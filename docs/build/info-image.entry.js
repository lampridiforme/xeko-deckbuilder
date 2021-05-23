import { r as registerInstance, h, e as Host } from './index-37ada624.js';

const infoImageCss = ":host{display:block}";

const InfoImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
InfoImage.style = infoImageCss;

export { InfoImage as info_image };
