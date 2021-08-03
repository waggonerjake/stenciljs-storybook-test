import { html } from 'lit-html';

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Action Button',
  component: 'action-button',
};

export const Button = () => html`<action-button></action-button>`;
