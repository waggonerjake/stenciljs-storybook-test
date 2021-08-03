import { html } from 'lit-html';

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Directions Component',
  component: 'directions-component',
};

export const Directions = () => html`<directions-component directions="Please enter text to show in the dialog:"></directions-component>`;
