import PropTypes from 'prop-types';
import { SearchbarContainer } from './Searchbar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export const Searchbar = ({ onFormSubmit }) => {
  return (
    <>
      <SearchbarContainer>
        <SearchForm onFormSubmit={onFormSubmit} />
      </SearchbarContainer>
    </>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
