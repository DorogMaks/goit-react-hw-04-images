// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';
export class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <>
        <List>
          <ImageGalleryItem />
        </List>
        <Button />
      </>
    );
  }
}

// ImageGallery.propTypes = {

// };
