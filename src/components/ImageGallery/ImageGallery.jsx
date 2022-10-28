import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImages } from 'services/api';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Notification } from 'components/Notification/Notification';
import ImgNotFound from '../../images/imgNotFound.jpg';

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

    if (
      prevState.searchQuery !== searchValue ||
      prevState.currentPage !== currentPage
    ) {
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
  }

  render() {
    const { searchData, totalHits, status } = this.state;
    const { onLoadMoreBtn, currentPage } = this.props;

    if (status === 'idle') {
      return <Notification message="Let's find some images" />;
    }

    if (status === 'empty') {
      return (
        <Notification message="Sorry, no images match your search">
          <img src={ImgNotFound} alt="images not found" width="280px" />
        </Notification>
      );
    }

    if (status === 'rejected') {
      return <Notification message="Ooops, something went wrong" />;
    }

    if (status === 'pending' && totalHits === 0) {
      return (
        <Notification>
          <Loader />
        </Notification>
      );
    }

    if (status === 'resolved' || (status === 'pending' && totalHits > 0)) {
      const totalHitsCount = totalHits - currentPage * 12;

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

          {totalHitsCount > 0 && (
            <Button onLoadMoreBtn={onLoadMoreBtn} status={status} />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  onLoadMoreBtn: PropTypes.func.isRequired,
};
