// import PropTypes from 'prop-types';
import { SearchbarContainer } from './Searchbar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <SearchbarContainer>
        <SearchForm onSubmit={onSubmit} />
      </SearchbarContainer>
    </>
  );
};

// SearchBar.propTypes = {

// };
