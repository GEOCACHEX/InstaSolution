import fetch from 'node-fetch';
import fs from 'fs';

const minLat = 54.50734476593547;
const minLon = 18.545945167398138;

const maxLat = 54.5088025841609;
const maxLon = 18.549525607179877;

const stepsLat = 70;
const stepsLon = 100;

const perRequest = 100;
const perRequestCooldown = 1000;
const coordsPrecision = 8;
const elevationPrecision = 2;
const url = 'https://api.opentopodata.org/v1/eudem25m?locations=';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {

    let requests = 0;
    const totalRequestCount = Math.ceil((stepsLat + 1) * (stepsLon + 1) / perRequest);
    const rawElevations = [];
    let batch = [];

    for(let lat = 0; lat <= stepsLat; lat++) {
        for(let lon = 0; lon <= stepsLon; lon++) {

            const currentLat = minLat + (maxLat - minLat) * (lat / stepsLat);
            const currentLon = minLon + (maxLon - minLon) * (lon / stepsLon);
            const current = `${currentLat.toFixed(coordsPrecision)},${currentLon.toFixed(coordsPrecision)}`;
            batch.push(current);

            if(batch.length >= perRequest || (lat === stepsLat && lon === stepsLon)) {
                const combined = batch.join('|');
                const data = await fetch(`${url}${combined}`).then(x => x.json());
                rawElevations.push(...data.results.map(x => x.elevation));

                requests++;
                console.log(`======= ${(requests / totalRequestCount * 100).toFixed(2)}%`)

                batch = [];
                await sleep(perRequestCooldown);
            }
        }
    }

    const minElevation = Math.min(...rawElevations);
    const data = {
        minLat,
        minLon,
        maxLat,
        maxLon,
        stepLat: (maxLat - minLat) / stepsLat,
        stepLon: (maxLon - minLon) / stepsLon,
        stepsLat,
        stepsLon,
        elevations: rawElevations.map(e => Number((e - minElevation).toFixed(elevationPrecision)))
    };
    fs.writeFileSync('elevation.json', JSON.stringify(data));
})()
