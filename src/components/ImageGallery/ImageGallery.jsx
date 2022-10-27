import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';
import { fetchImages } from 'services/api';

export class ImageGallery extends Component {
  state = {
    searchData: [],
    totalHits: 0,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, currentPage } = this.props;

    if (
      prevProps.searchValue === searchValue &&
      prevProps.currentPage === currentPage
    )
      return;

    this.setState({ status: 'pending' });

    const fetchResults = await fetchImages(searchValue, currentPage);

    if (fetchResults === 'error') {
      return this.setState({ status: 'rejected' });
    }

    if (fetchResults.hits.length === 0) {
      return this.setState({ status: 'empty' });
    }

    const collectionHits =
      currentPage === 1
        ? fetchResults.hits
        : [...this.state.searchData, ...fetchResults.hits];

    this.setState({
      searchData: collectionHits,
      totalHits: fetchResults.totalHits,
      status: 'resolved',
    });
  }

  render() {
    const { searchData } = this.state;

    return (
      <>
        <List>
          {searchData.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              smallImage={webformatURL}
              largeImage={largeImageURL}
              imageDescription={tags}
            />
          ))}
        </List>

        <Button />
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  onLoadMoreBtn: PropTypes.func.isRequired,
};
