import { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {};

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <>
        <GlobalStyles />
        <Searchbar />
        <main>
          <ImageGallery />
        </main>
      </>
    );
  }
}
