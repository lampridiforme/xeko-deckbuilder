import { r as registerInstance, h } from './index-37ada624.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}#toolbar{box-sizing:border-box;height:50px;border-bottom:5px solid black}#toolbar button{height:100%}#content{max-height:calc(100vh - 50px);overflow:auto}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pinned = true;
  }
  render() {
    return (h("div", null, h("div", { id: 'toolbar' }, h("stencil-route-link", { url: "/encyclopedia" }, h("button", null, "Encyclopedia")), h("stencil-route-link", { url: "/deck" }, h("button", null, "Deck"))), h("div", { id: 'content' }, h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }), h("stencil-route", { url: "/encyclopedia/:entry", component: "journal-main" }), h("stencil-route", { url: "/encyclopedia", component: "journal-main" }), h("stencil-route", { url: "/deck", component: "deck-viewer" })))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
