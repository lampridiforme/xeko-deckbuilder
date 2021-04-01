import { r as registerInstance, h, e as Host } from './index-37ada624.js';

const borderedImageCss = ":host{display:block}";

const BorderedImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
BorderedImage.style = borderedImageCss;

export { BorderedImage as bordered_image };
