import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'wrapper-component',
  styleUrl: 'wrapper-component.css',
  shadow: false,
})
export class Wrapper {
  @Event() textSent: EventEmitter;

  render() {
    return (
      <div class="wrapper">
        <slot name="directions-1" />
        <slot name="text" />
        <slot name="button" />
        <slot name="directions-2" />
        <slot name="results" />
      </div>
    );
  }
}
