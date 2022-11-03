import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../../images/search.svg';
import {
  SearchFormStyled,
  SearchFormButton,
  SearchFormInput,
  ButtonLabel,
} from './SearchForm.styled';

export const SearchForm = ({ onFormSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleСhange = evt => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onFormSubmit(searchValue);

    setSearchValue('');
  };

  return (
    <SearchFormStyled autoComplete="off" onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
        <SearchIcon width="20" height="20" />
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="searchValue"
        autoFocus
        placeholder="Search images and photos"
        value={searchValue}
        onChange={handleСhange}
      />
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
