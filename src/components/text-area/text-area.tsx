import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'text-area',
  styleUrl: 'text-area.css',
  shadow: false,
})
export class TextArea {
  render() {
    return (
      <Host class="text-container">
        <textarea class="text-area" />
      </Host>
    );
  }
}
