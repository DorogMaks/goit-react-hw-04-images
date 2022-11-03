import PropTypes from 'prop-types';
import { useState } from 'react';
import { fetchImages } from 'services/api';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Notification } from 'components/Notification/Notification';
import ImgNotFound from '../../images/imgNotFound.jpg';
import { useEffect } from 'react';

export const ImageGallery = ({ searchValue, currentPage, onLoadMoreBtn }) => {
  const [searchData, setSearchData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchValue) return;

    if (currentPage === 1) setSearchData([]);

    setStatus('pending');

    fetchImages(searchValue, currentPage)
      .then(fetchResults => {
        if (fetchResults.hits.length === 0) return setStatus('empty');

        setSearchData(prevSearchData => [
          ...prevSearchData,
          ...fetchResults.hits,
        ]);
        setTotalHits(fetchResults.totalHits);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [currentPage, searchValue]);

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
};

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  onLoadMoreBtn: PropTypes.func.isRequired,
};
