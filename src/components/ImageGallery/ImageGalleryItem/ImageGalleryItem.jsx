import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { smallImage, largeImage, imageDescription } = this.props;

    return (
      <Item>
        <Image
          src={smallImage}
          alt={imageDescription}
          onClick={this.toggleModal}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={imageDescription} />
          </Modal>
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
};
