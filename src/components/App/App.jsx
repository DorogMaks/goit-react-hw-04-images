import { useState } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const onFormSubmit = formSearchValue => {
    const normalizedSearchValue = formSearchValue.toLowerCase().trim();

    if (!normalizedSearchValue || searchValue === formSearchValue) return;

    setSearchValue(normalizedSearchValue);
    setCurrentPage(1);
  };

  const onLoadMoreBtn = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <GlobalStyles />
      <Searchbar onFormSubmit={onFormSubmit} />
      <main>
        <ImageGallery
          searchValue={searchValue}
          currentPage={currentPage}
          onLoadMoreBtn={onLoadMoreBtn}
        />
      </main>
    </>
  );
};
