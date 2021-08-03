import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'results-display',
  styleUrl: 'results-display.css',
  shadow: false,
})
export class ResultsDisplay {
  @Prop() results: string = 'Test';

  render() {
    return (
      <Host class="results-display">
        <div>{this.results}</div>
      </Host>
    );
  }
}
