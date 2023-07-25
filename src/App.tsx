import { useState } from 'react';
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import { ResultsList } from './components/ResultsList';
import { Spinner } from './components/Spinner';

interface Gif {
  id: string;
  url: string;
  title: string;
}

function App() {
  const [results, setResults] = useState<Gif[]>([]); // Here, we're creating a state variable 'results' to store the search results
  const [isLoading, setIsLoading] = useState(false); // New state to handle loading status

  // This is an async function that takes a search term and makes an API call to Giphy to fetch the gifs
  const searchGifs = async (searchTerm: string) => {
    setIsLoading(true);

    /* eslint-disable camelcase */
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        q: searchTerm,
      },
    });

    /* eslint-enable camelcase */

    // Once we get the response, we set the results to the gifs obtained from the response
    setResults(
      response.data.data.map((gif: any) => ({
        id: gif.id,
        url: gif.images.original.url,
        title: gif.title,
      })),
    );

    setIsLoading(false);
  };

  return (
    // We have the SearchBar component that lets the user enter a search term
    // The onSearch prop is a function that gets called when the user presses the search button
    // We also have the ResultsList component that displays the search results
    <div className="container">
      <SearchBar onSearch={searchGifs} />

      {/* Display loading message if isLoading is true */}
      {isLoading && <Spinner />}

      <ResultsList results={results} />
    </div>
  );
}

export default App;
