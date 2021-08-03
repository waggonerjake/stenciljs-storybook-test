import { Component, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'widget-component',
})
export class Widget {
  @Prop() result: string = 'Test';

  @Listen('buttonClicked')
  listener(event: { detail: string }) {
    this.result = event.detail;
    // eslint-disable-next-line no-console
    console.log(this.result);
  }

  render() {
    return (
      <wrapper-component>
        <directions-component slot="directions-1" directions="Please enter text to show in the dialog:" />
        <text-area slot="text" />
        <action-button slot="button" />
        <directions-component slot="directions-2" directions="Results after Update:" />
        <results-display slot="results" results={this.result as never} />
      </wrapper-component>
    );
  }
}
