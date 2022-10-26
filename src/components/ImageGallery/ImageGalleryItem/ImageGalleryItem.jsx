// import PropTypes from 'prop-types';
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
    return (
      <Item>
        <Image />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </Item>
    );
  }
}

// ImageGalleryItem.propTypes = {

// };
