import { Callout } from '../../components/Callout';

export default {
  render: Callout,
  description: 'Display the enclosed content in a callout box',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
      description: 'The title displayed at the top of the callout',
    },
    type: {
      type: String,
      default: 'tip',
      matches: ['info', 'tip'],
      errorLevel: 'critical',
      description:
        'Controls the color and icon of the callout. Can be: "info", "tip"',
    },
  },
};
