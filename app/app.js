const warningComment = `<!---->
<!---->
<!---->
<!---->
<!---->
<!--️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️-->
<!-- Przeglądając jedynie kod źródłowy nie otworzysz pojemnika (na prawdę!) i więcej czasu zmarnujesz na siedzenie przed komputerem, niż zabawe w terenie z tym keszem! Zagadka jest na prawdę absuralnie prosta, zajmuje kilka minut na miejscu i przeglądanie tego kodu kompletnie niszczy Ci jakąkolwiek zabawę/niepodziankę z podejmowania tego kesza. Po co rujnować sobie zabawę, jeśli i tak nic z tego nie masz? -->
<!--️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️-->
<!-- By only browsing the source code, you won't open the container (really!) and you will waste more time sitting in front of the computer than having fun in the field with this cache! The puzzle is really absurdly simple, takes a few minutes on the spot and browsing through this code completely destroys any fun/suprise of finding this cache. Why do you want to ruin your own fun, if there's nothing to gain from it? -->
<!--️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️️⚠️-->
<!---->
<!---->
<!---->
<!---->
<!---->`


const arHtml = `<a-scene
    id="car-scene"
    loading-screen="enabled: false"
    shadow="type: pcf"
    renderer="logarithmicDepthBuffer: true;antialias: true;precision: medium"
    vr-mode-ui="enabled: false"
    embedded
    light="defaultLightsEnabled: false"
    arjs="detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;"
>
  <a-assets>
    <img id="car-shadow" src="app/zuk/textures/shadow.png">
    <img id="car-name" src="app/zuk/textures/name.png">
    <a-asset-item id="car-model" src="app/zuk/scene.gltf"></a-asset-item>
  </a-assets>

  <a-entity id="car-scene-root" >
    <a-entity light="type: ambient; color: #CCC; intensity: 4"></a-entity>
    <a-entity light="type: directional; color: #CFC; intensity: 4" position="-1.5 1.0 1.0"></a-entity>
    <a-entity light="type: directional; color: #FCC; intensity: 4" position="1.5 1.1 -1.0"></a-entity>
    <a-marker id="marker" type="barcode" value="69">
      <a-entity
          position="0 0.25 0"
          scale="1.5 1.5 1.5"
          rotation="0 -15 0"
          gltf-model="#car-model"
      ></a-entity>
      <a-image src="#car-shadow" rotation="90 0 15" position="0 0 0.1" scale="1.2 2.5 0"></a-image>
      <a-image src="#car-name" rotation="-90 0 0" position="0 0.041 1.22" height="0.12" width="1.1"></a-image>
      <a-box color="#050505" position="0 0.02 1.2" depth="0.25" height="0.04" width="1.3"></a-box>

    </a-marker>
  </a-entity>
  <a-entity camera id="car-scene-camera"></a-entity>

</a-scene>`;

const modelHtml = `<a-scene
    id="model-scene"
    loading-screen="enabled: false"
    shadow="type: pcf"
    renderer="logarithmicDepthBuffer: true;antialias: true;precision: medium"
    vr-mode-ui="enabled: false"
    embedded
    light="defaultLightsEnabled: false"
>
  <a-assets>
    <img id="car-shadow" src="app/zuk/textures/shadow.png">
    <img id="car-name" src="app/zuk/textures/name.png">
    <a-asset-item id="car-model" src="app/zuk/scene.gltf"></a-asset-item>
  </a-assets>
  
  <a-entity light="type: ambient; color: #CCC; intensity: 4"></a-entity>
  <a-entity light="type: directional; color: #CFC; intensity: 4" position="-1.5 1.0 1.0"></a-entity>
  <a-entity light="type: directional; color: #FCC; intensity: 4" position="1.5 1.1 -1.0"></a-entity>
  
  <a-entity id="model-scene-root">
        <a-entity
          position="0 0.25 0"
          scale="1.5 1.5 1.5"
          rotation="0 -15 0"
          gltf-model="#car-model"
      ></a-entity>
      <a-image src="#car-shadow" rotation="90 0 15" position="0 0 0.1" scale="1.2 2.5 0"></a-image>
      <a-image src="#car-name" rotation="-90 0 0" position="0 0.041 1.22" height="0.12" width="1.1"></a-image>
      <a-box color="#050505" position="0 0.02 1.2" depth="0.25" height="0.04" width="1.3"></a-box>
  </a-entity>
  <a-entity id="model-scene-camera" camera rotation="-25 0 0" position="0 1.7 3"></a-entity>
</a-scene>`;

let arScene;

document.addEventListener('DOMContentLoaded', async () => {
    appendWarnings();
    if (await didAlreadyGrantPermissions()) {
        onAllPermissionsGranted();
    }
}, true);

window.addEventListener('load', () => {
    initPopups();
    hideLoader();
    setTimeout(() => switchPopup('language-select'), 300);
});

function hideLoader() {
    const loader = document.querySelector('#loading-screen');
    loader.classList.add('exit');
    setTimeout(() => loader.remove(), 1000);
}

function appendWarnings() {
    const links = document.querySelectorAll('link[rel="preload"]')
    const popups = document.querySelectorAll('#popup-layer > div');
    const all = [...Array.from(links), ...Array.from(popups)];
    for(let element of all) {
        element.insertAdjacentHTML('afterend', warningComment);
    }
}

function addArElements() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'app/ar/aframe-ar_3_3_3.min.js';
    script.onload = () => {
        const temp = document.createElement('div');
        temp.innerHTML = arHtml;
        document.body.appendChild(temp.firstChild);
    }
    document.head.appendChild(script);
}

function addModelElements() {
    const temp = document.createElement('div');
    temp.innerHTML = modelHtml;
    const scene = temp.firstChild;
    scene.addEventListener('loaded', () => startBackupAnimation());
    document.body.appendChild(scene);
}

function onAllPermissionsGranted() {
    rememberGrantingPermissions();
    handleGPS();
    handleLoadingAr();
    addArElements();
    hideModeExclusiveElements(true);
}

function onArReady() {
    handleMarkerDetection();
}

function handleLoadingAr() {
    let interval = setInterval(checkReadiness, 100);
    function checkReadiness() {
        if (document.querySelector('#arjs-video')) {
            clearInterval(interval);
            setTimeout(() => onArReady(), 200);
        }
    }
}

let currentLat = 0;
let currentLon = 0;
function handleGPS() {
    navigator.geolocation.watchPosition(onLocationChange, () => {}, {
        enableHighAccuracy: true,
        maximumAge: 0
    });

    function onLocationChange(data) {
        const lat = data.coords.latitude;
        const lon = data.coords.longitude;
        currentLat = lat;
        currentLon = lon;
        onCoordsChange();
    }
}

function handleMarkerDetection() {
    const layer = document.getElementById('popup-layer');
    const marker = document.getElementById('marker');
    marker.addEventListener('markerFound', () => layer.classList.add('hidden'));
    marker.addEventListener('markerLost', () => layer.classList.remove('hidden'));
}

////////////////////////////////////////////////////////////////////////////////// POPUPS

let activePopup;

function initPopups() {
    initialHideAllPopups();
}

function initialHideAllPopups() {
    for (let popup of document.getElementById('popup-layer').children) {
        hidePopupElement(popup);
    }
}

function hidePopupElement(element, onFinish) {
    onTransitionEnd(element, () => {
        element.style.transition = null;
        if (onFinish) setTimeout(onFinish);
    });
    element.style.transition = 'all 0.1s ease-out';
    element.style.display = 'none';
    element.style.transform = 'translateX(-60px)';
    element.style.opacity = '0';
}

function hideActivePopup(onFinish) {
    if (activePopup) {
        setTimeout(() => {
            const popup = document.getElementById(activePopup);
            popup.style.transform = 'translateX(60px)';
            popup.style.opacity = '0';

            onTransitionEnd(popup, () => hidePopupElement(popup, onFinish));
        }, 100);
    } else onFinish();
}

function onTransitionEnd(popup, onEnd) {
    const onTransitionEnd = e => {
        if (e.target === popup) {
            popup.removeEventListener('transitionend', onTransitionEnd);
            onEnd();
        }
    };
    popup.addEventListener('transitionend', onTransitionEnd);
}

function showPopup(id, onFinish) {
    const popup = document.getElementById(id);
    popup.style.display = null;
    popup.style.transition = null;

    setTimeout(() => {
        popup.style.transform = null;
        popup.style.opacity = null;
        onTransitionEnd(popup, () => onFinish());
    }, 100);
}

let isSwitchingPopup = false;
function switchPopup(id, initPopup, onCenter) {
    if (isSwitchingPopup) return;
    isSwitchingPopup = true;
    hideActivePopup(() => {
        activePopup = id;
        if (initPopup) initPopup();
        if (id) {
            showPopup(id, () => {
                isSwitchingPopup = false;
                if (onCenter) onCenter();
            });
        } else {
            isSwitchingPopup = false;
            if (onCenter) onCenter();
        }
    });
}

////////////////////////////////////////////////////////////////////////////////// LANGUAGE SELECT

function leaveSingleLanguage(isPolish) {
    const attributeToRemove = isPolish ? 'en' : 'pl';
    for (let element of document.querySelectorAll(`[data-${ attributeToRemove }]`)) {
        element.remove();
    }
}


let didSelectLanguage = false;
async function selectLanguage(isPolish) {
    if (didSelectLanguage) return;
    didSelectLanguage = true;
    leaveSingleLanguage(isPolish);
    review = isPolish ? reviewPL : reviewEN;

    if (!(await hasCameras())) {
        switchPopup('no-cam');
    }
    else if (await didAlreadyGrantPermissions()) {
        switchPopupToCurrentState();
    } else {
        switchPopup('permissions');
    }
}

////////////////////////////////////////////////////////////////////////////////// PERMISSIONS

function onPermissionFailure() {
    switchPopup('permissions-fail');
    showAllCoordsLockedButtons();
    hideModeExclusiveElements(false);
}

const permissionsSaveName = 'permissions';

function rememberGrantingPermissions() {
    window.localStorage.setItem(permissionsSaveName, 'OK!');
}

const hasCameraSaveName = 'hasCamera';
function rememberHavingCamera() {
    window.localStorage.setItem(hasCameraSaveName, 'OK!');
}

const forceBackupSaveName = 'forceBackup';

function rememberForcingBackup() {
    window.localStorage.setItem(forceBackupSaveName, 'Yup...');
}

function shouldBeForcingBackup() {
    return !!window.localStorage.getItem(forceBackupSaveName)
}

async function didAlreadyGrantPermissions() {
    return !!window.localStorage.getItem(permissionsSaveName) && (await hasCameraPermission());
}

async function didAlreadyHaveCamera() {
    return !!window.localStorage.getItem(hasCameraSaveName);
}

async function hasCameraPermission() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter(x => !!x.deviceId && !!x.label && x.kind === 'videoinput').length > 0;
    } catch (e) {
        return false;
    }
}

async function hasCameras() {
    if (didAlreadyHaveCamera()) return true; // ios 13 workaround
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const result = devices.filter(x => x.kind === 'videoinput').length > 0;
        if (result) rememberHavingCamera();
        return result;
    } catch (e) {
        return false;
    }
}

async function askPermissions(button) {

    button.disabled = true;

    // Orientation
    if (deviceTypeRequiresOrientationPermission()) {
        try {
            const permissionState = await DeviceOrientationEvent.requestPermission();
            if (permissionState !== 'granted') {
                return onPermissionFailure();
            }
        } catch (e) {
            return onPermissionFailure();
        }
    }

    // Backup
    if (shouldBeForcingBackup()) {
        return onPermissionFailure();
    }

    // GPS
    navigator.geolocation.getCurrentPosition(() => onGpsGranted(), () => onPermissionFailure());

    // Camera
    const onGpsGranted = async () => {

        let hasCameraAccess = false;

        // New API
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const constraints = {
                    video: {
                        width: { ideal: 640 },
                        height: { ideal: 480 }
                    },
                    audio: false
                };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                for (let track of stream.getTracks()) {
                    track.stop();
                }
                hasCameraAccess = true;
            }
        } catch (e) {}

        // Old API
        if (!hasCameraAccess) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            const constraints = {
                audio: false,
                video: {
                    mandatory: { minWidth: 640, minHeight: 480 }
                }
            };
            if (navigator.getUserMedia) navigator.getUserMedia(constraints, () => hasCameraAccess = true, () => {});
        }


        // Final
        if (hasCameraAccess) {
            onAllPermissionsGranted();
            switchPopupToCurrentState();
        } else {
            onPermissionFailure();
        }
    };
}

function deviceTypeRequiresOrientationPermission() {
    return typeof DeviceOrientationEvent !== "undefined" && !!DeviceOrientationEvent.requestPermission;
}

////////////////////////////////////////////////////////////////////////////////// COORD LOCKING

let onCoordsUnlock;
let lockedCoordsArea;
let firstCoordsCheckTimeout;

function onCoordsChange() {
    if (onCoordsUnlock && isPlayerInArea(lockedCoordsArea.latMin, lockedCoordsArea.lonMin, lockedCoordsArea.latMax, lockedCoordsArea.lonMax)) {
        let delayedCallback = onCoordsUnlock;
        clearCoordsEntryListener();
        setTimeout(() => delayedCallback(), 200);
    }
}

function clearCoordsEntryListener() {
    onCoordsUnlock = undefined;
    lockedCoordsArea = undefined;
}

function setCoordsEntryListener(callback, latMin, lonMin, latMax, lonMax) {
    onCoordsUnlock = callback;
    lockedCoordsArea = { latMin, lonMin, latMax, lonMax };
    onCoordsChange();
}

function isPlayerInArea(latMin, lonMin, latMax, lonMax) {
    //return true;
    return latMin < currentLat && latMax > currentLat && lonMin < currentLon && lonMax > currentLon;
}

////////////////////////////////////////////////////////////////////////////////// STATE

function saveState(state) {
    window.localStorage.setItem('state', state);
    return state;
}

function getState() {
    return Number(window.localStorage.getItem('state')) || 0;
}

const popupsByState = [
    { id: 'init', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.507471597227585, 18.54653548533536, 54.507745282621414, 18.547338431105164) },
    { id: 'eula' },
    { id: 'eula2', init: () => eulaInit(), center: () => eulaHandler() },
    { id: 'eula3' },
    { id: 'coord1', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.50781932078247, 18.54680613024657, 54.50817186777658, 18.548696039080703) },
    { id: 'coord2', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.50779292541855, 18.547939102479628, 54.508159263218396, 18.549059186426508) },
    { id: 'coord3', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.5076874280227, 18.54840192535867, 54.508159263218396, 18.549059186426508) },
    { id: 'quiz1' },
    { id: 'quiz2' },
    { id: 'quiz3' },
    { id: 'quiz4' },
    { id: 'coord4', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.507978493153736, 18.548368990354938, 54.50828514682594, 18.54905681322526) },
    { id: 'coord5', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.50793186205135, 18.54727416240388, 54.50843129010726, 18.54809248416851) },
    { id: 'coord6', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.508013209285586, 18.547220160798165, 54.50822156986935, 18.547963509297283) },
    { id: 'review1' },
    { id: 'review2', center: () => onReviewCenter() },
    { id: 'coord7', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.507908238052366, 18.54635364953128, 54.50839817351376, 18.547626094486112) },
    { id: 'coord8', init: () => timeLockActiveButton(), center: () => coordsAdvance(54.50805526840849, 18.54641484589541, 54.508507288344376, 18.547264374877308) },
    { id: 'enter' },
    { id: 'end' }
];

function advance() {
    saveState(getState() + 1);
    switchPopupToCurrentState();
}

function coordsAdvance(latMin, lonMin, latMax, lonMax) {
    setCoordsEntryListener(() => advance(), latMin, lonMin, latMax, lonMax);
}

function switchPopupToCurrentState() {
    const state = getState();
    const popup = popupsByState[state] || {};
    switchPopup(popup.id, popup.init, popup.center);
}

////////////////////////////////////////////////////////////////////////////////// EULA

function eulaInit() {
    const text = document.getElementById('eula-text');
    text.style.display = 'none';
    text.innerHTML = eula.repeat(2);
}

function eulaHandler() {

    const timer = document.getElementById('eula-timer');
    const text = document.getElementById('eula-text');

    setTimeout(() => timer.innerHTML = '2', 1000);
    setTimeout(() => timer.innerHTML = '1', 2000);
    setTimeout(() => {
        timer.style.display = 'none';
        text.style.display = null;
        setTimeout(() => text.style.transform = 'translateY(-105%)', 100);
        setTimeout(() => advance(), 4100);
    }, 3000);
}

////////////////////////////////////////////////////////////////////////////////// QUIZ

function moveQuizButton(button) {
    button.style.transform = button.style.transform ? null : `translateY(${ Math.random() > 0.5 ? '-' : '' }100px)`;
}

////////////////////////////////////////////////////////////////////////////////// REVIEW

function onReviewCenter() {
    document.getElementById('review-input').focus();
}

function onReviewChange(input) {
    input.value = review.substring(0, input.value.length);
    const button = document.getElementById('review-button');
    if (input.value.length === review.length) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute('disabled', '');
    }
}

////////////////////////////////////////////////////////////////////////////////// BACKUP

let modelRoot;
let modelCamera;
let firstFrameTime;
function startBackupAnimation() {
    modelRoot = document.getElementById('model-scene-root');
    modelCamera = document.getElementById('model-scene-camera');

    backupAnimationTick(0);
}

function startForcingBackupAndAdvance() {
    advance();
    rememberForcingBackup();
}

function easing(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function interpolate(a, b, x) {
    const dist = b - a;
    return a + dist * easing(x);
}

function backupAnimationTick(x) {

    if(!firstFrameTime) {
        firstFrameTime = x;
    }
    const time = x - firstFrameTime;
    let rotation = (time / 40 + 220) % 360;

    const cameraRotation = { x: -25, y: 0, z: 0 };
    const cameraPosition = { x: 0, y: 1.7, z: 3 };

    // 60 - 260
    if (rotation > 60 && rotation < 260) {
        const backCameraRotation = { x: -20, y: 0, z: 0 };
        const backCameraPosition = { x: 0, y: 1, z: 1.8 };
        let fr = 1 - (Math.abs(rotation - 160) / 100);
        cameraRotation.x = interpolate(cameraRotation.x, backCameraRotation.x, fr);
        cameraRotation.y = interpolate(cameraRotation.y, backCameraRotation.y, fr);
        cameraRotation.z = interpolate(cameraRotation.z, backCameraRotation.z, fr);
        cameraPosition.x = interpolate(cameraPosition.x, backCameraPosition.x, fr);
        cameraPosition.y = interpolate(cameraPosition.y, backCameraPosition.y, fr);
        cameraPosition.z = interpolate(cameraPosition.z, backCameraPosition.z, fr);
    }

    // 280 - 440
    if (rotation <= 80 || rotation >= 280) {
        let r = rotation;
        if(r <= 80) r+= 360;
        let fr = 1 - (Math.abs(r - 360) / 80);
        const frontCameraRotation = { x: -35, y: 0, z: 0 };
        const frontCameraPosition = { x: 0, y: 1.8, z: 2.2 };
        cameraRotation.x = interpolate(cameraRotation.x, frontCameraRotation.x, fr);
        cameraRotation.y = interpolate(cameraRotation.y, frontCameraRotation.y, fr);
        cameraRotation.z = interpolate(cameraRotation.z, frontCameraRotation.z, fr);
        cameraPosition.x = interpolate(cameraPosition.x, frontCameraPosition.x, fr);
        cameraPosition.y = interpolate(cameraPosition.y, frontCameraPosition.y, fr);
        cameraPosition.z = interpolate(cameraPosition.z, frontCameraPosition.z, fr);
    }

    // Adjust for hori
    const ratio = Math.min(window.innerWidth / window.innerHeight, 1);
    const adjust = Math.max(ratio - 0.55, 0) / 0.45;

    cameraPosition.z *= 1 - (0.23 * adjust);
    cameraPosition.y *= 1 - (0.2 * adjust);
    cameraRotation.x *= 1 - (0.2 * adjust);

    modelRoot.setAttribute('rotation', { x: 0, y: -rotation, z: 0})
    modelCamera.setAttribute('rotation', cameraRotation)
    modelCamera.setAttribute('position', cameraPosition)

    window.requestAnimationFrame((x) => backupAnimationTick(x));
}

function hideModeExclusiveElements(showNormalMode) {
    document.querySelector(`[data-${showNormalMode ? 'simple' : 'normal'}]`).remove();
}

function showBackup() {
    switchPopup(undefined);
    addModelElements();
}

function showAllCoordsLockedButtons() {
    const buttons = document.querySelectorAll('.coord-locked .buttons');
    for (let button of buttons) {
        button.style.display = 'flex';
    }
}

function timeLockActiveButton() {
    const button = document.querySelector(`#${activePopup} button`);
    const span = document.createElement('span');
    button.appendChild(span);
    button.disabled = true;
    let seconds = 9;
    updateTimeLockButton(span, seconds);
    let interval = setInterval(() => {
        seconds--;
        updateTimeLockButton(span, seconds);

        if (seconds <= 0) {
            button.disabled = false;
            span.remove();
            clearInterval(interval);
        }
    }, 1000);
}

function updateTimeLockButton(span, seconds) {
    span.innerHTML = `\xa0(${seconds})`;
}



const reviewPL = "Geocachex jest najlepszy!!";
const reviewEN = "Geocachex is the best!!!!";
let review = reviewPL;

const eula = `InstaSolution END USER LICENSE AGREEMENT
In order to protect InstaSolution (our "Game") and the members of our community, we need these end user license terms to set out some rules for downloading and using our Game. This license is a legal agreement between you and us (Geocachex) and describes the terms and conditions for using the Game. We don't like reading license documents any more than you do, so we have tried to keep this as short as possible. If you break these rules we may stop you from using our Game. If we think it is necessary, we might even have to ask our lawyers to help out.

If you buy, download, use or play our Game, you are agreeing to stick to the rules of these end user license agreement ("EULA") terms. If you don't want to or can't agree to these rules, then you must not buy, download, use or play our Game. This EULA incorporates the terms of use for the geocachex.com website ("Account Terms"), our brand and asset usage guidelines, and our privacy policy. By agreeing to this EULA you also agree to all of the terms of the foregoing documents, so please read through them carefully.

ONE MAJOR RULE
The one major rule is that you must not distribute anything we've made unless we specifically agree to it. By "distribute anything we've made" what we mean is:

give copies of our Game to anyone else;
make commercial use of anything we've made;
try to make money from anything we've made; or
let other people get access to anything we've made in a way that is unfair or unreasonable;
unless we specifically agree to it. And so that we are crystal clear, "the Game" or "what we have made" includes, but is not limited to, the client or the server software for our Game and includes InstaSolution and InstaSolution: Java Edition on all platforms. It also includes updates, patches, downloadable content, add-ons, or modified versions of a Game, part of those things, or anything else we've made.

Otherwise we are quite relaxed about what you do - in fact we really encourage you to do cool stuff - but just don't do those things that we say you can't.

USING OUR GAME
You have been granted a license to the Game so you can play and use it, yourself, on your devices.

Below we also give you limited rights to do other things but we have to draw a line somewhere or else people will go too far. If you wish to make something pertaining to anything we've made we're humbled, but please make sure that it can't be interpreted as being official and that it complies with this EULA and the brand and asset usage guidelines and above all do not make commercial use of anything we've made.

The license and permission we give you to use and play our Game can be revoked if you break any of the terms of this EULA.

When you buy our Game, you receive a license that gives you permission to install the Game on your own personal device and use and play it on that device as set out in this EULA. This permission is personal to you, so you are not allowed to distribute the Game (or any part of it) to anyone else. This also means you cannot sell or rent the Game, or make it available for access to other people and you cannot pass on or resell any license keys. You may however give gift codes that have been bought through our official gift code system. This is important to help us stop piracy and fraud and to protect our Game. It is also important to prevent members of our community from buying pirated versions of our Game or fraudulent license keys - which we may cancel, such as in the case of fraud.

If you've bought the Game, you may play around with it and modify it by adding modifications, tools, or plugins, which we will refer to collectively as "Mods." By "Mods," we mean something original that you or someone else created that doesn't contain a substantial part of our copyrightable code or content. When you combine your Mod with the InstaSolution software, we will call that combination a "Modded Version" of the Game. We have the final say on what constitutes a Mod and what doesn't. You may not distribute any Modded Versions of our Game or software, and we'd appreciate it if you didn't use Mods for griefing. Basically, Mods are okay to distribute; hacked versions or Modded Versions of the Game client or server software are not okay to distribute.

Within reason you're free to do whatever you want with screenshots and videos of the Game. By "within reason" we mean that you can't make any commercial use of them or do things that are unfair or adversely affect our rights unless we've specifically said it's okay in this EULA, allowed it through the Brand and Asset Usage Guidelines, or provided for it in a specific agreement with you. If you upload videos of the game to video sharing and streaming sites you are however allowed to put ads on them. Also, don't just rip art resources and pass them around, that's no fun.

Essentially the simple rule is do not make commercial use of anything we've made unless we've specifically said it's okay. Oh and if the law expressly allows it, such as under a "fair use" or fair dealing" doctrine then that's ok too - but only to the extent that the law applicable to you says so.

In order to ensure the integrity of the Game, we need all Game downloads and updates to come from an authorized source. It's also important for us that 3rd party tools/services don't seem "official" as we can't guarantee their quality. It's part of the responsibility we have to the customers of InstaSolution. Make sure that you read through our brand and asset usage guidelines too.

OWNERSHIP OF OUR GAME AND OTHER THINGS
Although we license you permission to install on your device and play our Game, we are still the owners of it. We are also the owners of our brands and any content contained in the Game. Therefore, when you pay for our Game, you are buying a license to play / use our Game in accordance with this EULA - you are not buying the Game itself. The only permissions you have in connection with the Game and your installation of it are the permissions set out in this EULA.

Any Mods you create for the Game from scratch belong to you (including pre-run Mods and in-memory Mods) and you can do whatever you want with them, as long as you don't sell them for money / try to make money from them and so long as you don't distribute Modded Versions of the Game. Remember that a Mod means something that is your original work and that does not contain a substantial part of our code or content. You only own what you created; you do not own our code or content.

CONTENT
If you make any content available on or through our Game, you agree to give us permission to use, copy, modify, adapt, distribute, and publicly display that content. This permission is irrevocable, and you also agree to let us permit other people to use, copy, modify, adapt, distribute, and publicly display your content. You are not giving up your ownership rights in your content, you are just giving us and other users permission to use it. For example, we may need to copy, reformat, and distribute content that you post on our website so others can read it. If you don't want to give us these permissions, do not make content available on or through our Game. Please think carefully before you make any content available, because it may be made public and might even be used by other people in a way you don't like.

If you are going to make something available on or through our Game, it must not be offensive to people or illegal, it must be honest, and it must be your own creation. Some examples of the types of things you must not make available using our Game include: posts that include racist or homophobic language; posts that are bullying or trolling; posts that are offensive or that damage our or another person's reputation; posts that include porn or someone else's creation or image; or posts that impersonate a moderator or try to trick or exploit people.

Any content you make available on our Game must also be your creation or you must have permission or the legal right to do it. You must not and you agree that you will not make any content available, using the Game that infringes the rights of others.

We reserve the right to take down any content in our discretion.

Please watch out if you are talking to people in our Game. It is hard for either you or us to know for sure that what people say is true, or even if people are really who they say they are. You should think twice about giving out information about yourself.

UPDATES
We might make upgrades, updates or patches (we call them all "updates") available from time to time, but we don't have to. We are also not obliged to provide ongoing support or maintenance of any Game. Of course, we hope to continue to release new updates for our Game, we just can't guarantee that we will do so. With updates come changes that might not work well with other software, such as Mods. This is unfortunate, but it is something we don't take responsibility for. If that is the case, try running an older version.

LIABILITY AND GOVERNING LAW
The terms of this EULA do not affect any legal (statutory) rights that you may have under the law that applies to you for the Game. You might have certain rights which the law that applies to you says cannot be excluded. Nothing we say in these terms will affect those legal rights, even if we say something which sounds like it contradicts your legal rights. That's what we mean when we say "subject to applicable law".

SUBJECT TO APPLICABLE LAW, WHEN YOU GET A COPY OF OUR GAME, WE PROVIDE IT "'AS IS"'. UPDATES ARE ALSO PROVIDED "'AS IS"'. THIS MEANS THAT WE ARE NOT MAKING ANY PROMISES TO YOU ABOUT THE STANDARD OR QUALITY OF OUR GAME, OR THAT OUR GAME WILL BE UNINTERRUPTED OR ERROR FREE. WE ARE NOT RESPONSIBLE FOR ANY LOSS OR DAMAGE THAT IT MAY CAUSE. YOU BEAR THE ENTIRE RISK AS TO ITS QUALITY AND PERFORMANCE. YOU HAVE TO ACCEPT THAT WE MAY RELEASE GAMES WELL BEFORE THEY ARE COMPLETE AND SO THEY MAY (AND OFTEN WILL) HAVE BUGS -BUT WE PREFER TO RELEASE THESE FEATURES EARLY THAN MAKE YOU WAIT FOR PERFECTION. IF YOU WOULD LIKE TO NOTIFY US ABOUT A POTENTIAL BUG, WE HAVE A SITE FOR THAT HERE.

The laws of the country where you have your habitual residence govern this EULA and all disputes, including disputes relating to it, our Game, or our Website, regardless of conflict of laws principles.

TERMINATION
If we want we can terminate this EULA if you breach any of the terms. You can terminate it too, at any time; all you have to do is uninstall the Game from your device and the EULA will be terminated. If the EULA is terminated, you will no longer have any of the rights to the Game given in this license. You do still have the right to things you have created yourself with the game of course. The paragraphs about "Ownership of Our Game", "Our Liability" and "General Stuff" will continue to apply even after the EULA is terminated.

GENERAL STUFF
Your local law may give you rights that this EULA cannot change; if so, this EULA applies as far as the law allows. Nothing in this license limits our liability for death or bodily injury resulting from our negligence or fraudulent misrepresentations.

We may change this EULA from time to time, if we have reason to, such as changes to our games, our practices, or our legal obligation. But those changes will be effective only to the extent that they can legally apply. For example if you use the Game only in single-player mode and don't use the updates we make available then the old EULA applies but if you do use the updates or use parts of the game that rely on our providing ongoing online services then the new EULA will apply. In that case we'll inform you of the change before it takes effect, either by posting a notice on our Website or by other reasonable means. We're not going to be unfair about this though - but sometimes the law changes or someone does something that affects other users of the Game and we therefore need to put a lid on it.

If you come to us with a suggestion for any one of our Websites or Games, that suggestion is made for free and we have no obligation to accept or consider it. This means we can use or not use your suggestion in any way we want and we don't have to pay you for it. If you think you have a suggestion that we would be willing to pay you for, please do not submit your suggestion unless you have first told us you expect to be paid and we have responded in writing by asking you to submit the suggestion.

`;
