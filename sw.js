﻿import {registerRoute} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  ({request}) => request.destination === 'document',
  new CacheFirst()
);


registerRoute(
    ({request}) => request.destination !== 'document',
    new StaleWhileRevalidate()
);
