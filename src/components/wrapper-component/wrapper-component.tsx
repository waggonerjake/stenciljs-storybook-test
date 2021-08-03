import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'wrapper-component',
  styleUrl: 'wrapper-component.css',
  shadow: false,
})
export class Wrapper {
  @Listen('clickedButton')
  // eslint-disable-next-line class-methods-use-this
  actionButtonClicked(env: any) {
    // eslint-disable-next-line no-console
    console.log('clicked', env);
  }

  render() {
    return (
      <div class="wrapper">
        <slot name="directions-1" /> {/* Used to hold spots for the other elements */}
        <slot name="text" />
        <slot name="button" />
        <slot name="directions-2" />
        <slot name="results" />
      </div>
    );
  }
}
