import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  smallImage,
  largeImage,
  imageDescription,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Item>
      <Image src={smallImage} alt={imageDescription} onClick={toggleModal} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt={imageDescription} />
        </Modal>
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
};
