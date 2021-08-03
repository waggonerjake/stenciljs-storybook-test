import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'directions-component',
  styleUrl: 'directions-component.css',
  shadow: false,
})
export class DirectionsComponent {
  @Prop() directions: string;

  render() {
    return <div class="directions">{this.directions}</div>;
  }
}
