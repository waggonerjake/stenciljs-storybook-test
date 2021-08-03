import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'action-button',
  styleUrl: 'action-button.css',
  shadow: false,
})
export class ActionButton {
  @Event() numberOfClicks: EventEmitter<number>;

  render() {
    return (
      <button type="button" class="action-button" onClick={() => this.numberOfClicks.emit()}>
        Update
      </button>
    );
  }
}
