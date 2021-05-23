import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // tysm for this blog post https://samiprogramming.medium.com/deploying-a-stenciljs-component-inside-a-virtual-directory-fac6b4bfb84c
      baseUrl: '/xeko-deckbuilder',
      dir: 'docs'
    },
  ],
};
