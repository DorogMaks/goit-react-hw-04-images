// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../../images/search.svg';
import {
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchFormStyled,
} from './SearchForm.styled';

export class SearchForm extends Component {
  state = {};

  // handleСhange = evt => {
  //   this.setState({
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

  // handleSubmit = evt => {
  //   evt.preventDefault();

  //   // this.props.onAddContact();

  //   this.setState({});
  // };

  render() {
    return (
      <SearchFormStyled>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <SearchIcon width="20" height="20" />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormStyled>
    );
  }
}

// SearchForm.propTypes = {

// };
