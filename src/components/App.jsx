import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
    currentPage: 1,
  };

  onFormSubmit = formSearchValue => {
    const { searchValue } = this.state;

    const normalizedSearchValue = formSearchValue.toLowerCase().trim();

    if (!normalizedSearchValue || searchValue === formSearchValue) return;

    this.setState({
      searchValue: normalizedSearchValue,
      currentPage: 1,
    });
  };

  onLoadMoreBtn = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { searchValue, currentPage } = this.state;

    return (
      <>
        <GlobalStyles />
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <main>
          <ImageGallery
            searchValue={searchValue}
            currentPage={currentPage}
            onLoadMoreBtn={this.onLoadMoreBtn}
          />
        </main>
      </>
    );
  }
}
