import { r as registerInstance, h } from './index-37ada624.js';

const appProfileCss = ".app-profile{padding:10px}";

const AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    console.log(this.match.params);
    if (this.match && this.match.params.name) {
      return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
    }
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
