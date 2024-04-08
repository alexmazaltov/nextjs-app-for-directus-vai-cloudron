import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://directus.cloud.alefinvest.xyz').with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
);

export default directus;

