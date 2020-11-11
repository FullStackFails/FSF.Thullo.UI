import React from 'react';
import '../../index.css';

import SearchInput from './SearchInput';

const defaultExport = {
  title: 'Search Input',
  component: SearchInput,
};

export default defaultExport;

const Template = (args) => <SearchInput {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder Text...',
  searchTerm: '',
  onChange: undefined,
};

export const WithSearchTerm = Template.bind({});
WithSearchTerm.args = {
  placeholder: '',
  searchTerm: 'Search term being passed in...',
  onChange: undefined,
};
