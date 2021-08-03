import { html } from 'lit-html';

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Results Display',
  component: 'results-display',
};

export const Results = () => html`<results-display results="Test 1 2 3"></results-display>`;
