import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bordered-image',
  styleUrl: 'bordered-image.css',
  shadow: true,
})
export class BorderedImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
