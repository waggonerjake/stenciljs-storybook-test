import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'action-button',
  styleUrl: 'action-button.css',
  shadow: false,
})
export class ActionButton {
  @Event() buttonClicked: EventEmitter;

  // eslint-disable-next-line class-methods-use-this
  private getText(): string {
    const textArea = document.querySelector('.text-area') as HTMLInputElement;
    return textArea.value;
  }

  render() {
    return (
      <button type="button" class="action-button" onClick={() => this.buttonClicked.emit(this.getText())}>
        Update
      </button>
    );
  }
}
