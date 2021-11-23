import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
    () => true,
    new StaleWhileRevalidate()
);
