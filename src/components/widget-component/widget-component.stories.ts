import { html } from 'lit-html';

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Widget',
  component: 'widget-component',
};

export const Widget = () => html`<widget-component></widget-component>`;
