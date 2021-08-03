import { Component, h, Prop, Host, Listen } from '@stencil/core';

@Component({
  tag: 'results-display',
  styleUrl: 'results-display.css',
})
export class ResultsDisplay {
  @Prop() results: string = 'Jake';

  @Listen('numberOfClicks', { target: 'body' })
  function(clickEvent) {
    this.results = clickEvent;
  }

  render() {
    return (
      <Host class="results-display">
        <div>{this.results}</div>
      </Host>
    );
  }
}
