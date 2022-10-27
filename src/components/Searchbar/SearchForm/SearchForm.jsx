import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../../images/search.svg';
import {
  SearchFormStyled,
  SearchFormButton,
  SearchFormInput,
  ButtonLabel,
} from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searcValue: '',
  };

  handleСhange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onFormSubmit(this.state.searcValue);

    this.setState({ searcValue: '' });
  };

  render() {
    return (
      <SearchFormStyled autoComplete="off" onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
          <SearchIcon width="20" height="20" />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="searcValue"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searcValue}
          onChange={this.handleСhange}
        />
      </SearchFormStyled>
    );
  }
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
