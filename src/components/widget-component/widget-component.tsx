import { Component, h } from '@stencil/core';

@Component({
  tag: 'widget-component',
})
export class Widget {
  render() {
    return (
      <wrapper-component>
        <directions-component slot="directions-1" directions="Please enter text to show in the dialog:" />
        <text-area slot="text" />
        <action-button slot="button" />
        <directions-component slot="directions-2" directions="Results after Update:" />
        <results-display slot="results" />
      </wrapper-component>
    );
  }
}
