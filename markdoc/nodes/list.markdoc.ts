import { Config, Node, Tag } from '@markdoc/markdoc';
import { List } from '../../components/List';

export default {
  render: List,
  children: ['list'],
  attributes: {
    id: { type: String },
    ordered: { type: Boolean, required: true, default: true },
    className: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    // @ts-ignore
    return new Tag(this.render, { ...attributes }, children);
  },
};
