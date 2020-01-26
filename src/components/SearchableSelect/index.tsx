import React from 'react';
import Select from 'react-select';
import {SelectWrapper, SelectLabel} from './style';

interface IProps {
    options: any[],
    label: string,
    onChange: (valueKey: string, value: string) => void,
    valueKey: string,
}

const SearchableSelect: React.SFC<IProps> = ({options, label, onChange, valueKey}) => {
  return (
    <SelectWrapper>
      <SelectLabel>
        {label}
      </SelectLabel>
      <Select
          isClearable={false}
          isSearchable
          name="countrySelect"
          options={options}
          onChange={(value) => onChange(valueKey, value)}
      />
    </SelectWrapper>
  )
}

export default SearchableSelect;
