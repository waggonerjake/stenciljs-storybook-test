import { html } from 'lit-html';

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Wrapper Component',
  component: 'wrapper-component',
};

export const Wrapper = () => html`<wrapper-component></wrapper-component>`;
