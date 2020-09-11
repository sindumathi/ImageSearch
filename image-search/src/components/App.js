import React, { useState, useEffect } from 'react';
import { getImages } from '../helpers/api';
import SearchBar from './SearchBar';
import ImageLists from './ImageLists';
import { Header } from 'semantic-ui-react';

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await getImages(term);
    //console.log(response);
    setImages(response.data.results);
  };
  useEffect(() => {
    console.log(images);
  });

  return (
    <div className='App'>
      <Header as='h1' textAlign='center' color='orange'>
        <Header.Content>Image Search</Header.Content>
      </Header>
      <SearchBar userSubmit={onSearchSubmit} />
      <ImageLists images={images} />
    </div>
  );
}

export default App;
