import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D0SeAEC3.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_9HcElrun.mjs');
const _page1 = () => import('./chunks/404_DMFZjkqf.mjs');
const _page2 = () => import('./chunks/about_mBpkbJnN.mjs');
const _page3 = () => import('./chunks/_slug__B1C9nJ38.mjs');
const _page4 = () => import('./chunks/_single__OxGkW6SP.mjs');
const _page5 = () => import('./chunks/index_Cs8mThnP.mjs');
const _page6 = () => import('./chunks/_single__eOmH8Ynl.mjs');
const _page7 = () => import('./chunks/index_CLI50hOe.mjs');
const _page8 = () => import('./chunks/_category__IsMx-hp2.mjs');
const _page9 = () => import('./chunks/index_j0Ii3mkn.mjs');
const _page10 = () => import('./chunks/contact_DjB1lVao.mjs');
const _page11 = () => import('./chunks/features_CZX5Fykg.mjs');
const _page12 = () => import('./chunks/how-it-works_BSV0YkDK.mjs');
const _page13 = () => import('./chunks/_single__BlE0VK3t.mjs');
const _page14 = () => import('./chunks/index_GP9Ptoli.mjs');
const _page15 = () => import('./chunks/portal_C-tQwBTb.mjs');
const _page16 = () => import('./chunks/pricing_DAS9QOiz.mjs');
const _page17 = () => import('./chunks/signin_CFvbjP0R.mjs');
const _page18 = () => import('./chunks/signup_DQKXEzQb.mjs');
const _page19 = () => import('./chunks/_regular__LAhmPsmK.mjs');
const _page20 = () => import('./chunks/index_C9t68hFZ.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/page/[slug].astro", _page3],
    ["src/pages/blog/[single].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/career/[single].astro", _page6],
    ["src/pages/career/index.astro", _page7],
    ["src/pages/categories/[category].astro", _page8],
    ["src/pages/categories/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/features.astro", _page11],
    ["src/pages/how-it-works.astro", _page12],
    ["src/pages/integrations/[single].astro", _page13],
    ["src/pages/integrations/index.astro", _page14],
    ["src/pages/portal.astro", _page15],
    ["src/pages/pricing.astro", _page16],
    ["src/pages/signin.astro", _page17],
    ["src/pages/signup.astro", _page18],
    ["src/pages/[regular].astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f23c3664-5d51-40be-ab5c-999e96a4e4d6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };