import { tags } from '@markdoc/markdoc';
import { Table } from '../../components/Table';

export default {
  ...tags.table,
  inline: undefined,
  render: Table,
};
