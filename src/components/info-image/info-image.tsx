import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'info-image',
  styleUrl: 'info-image.css',
  shadow: true,
})
export class InfoImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
