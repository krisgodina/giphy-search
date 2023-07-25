import { FunctionComponent, useState } from 'react';
import { Spinner } from './Spinner';
import './ResultItem.css';

interface Gif {
  id: string;
  url: string;
  title: string;
}

interface ResultItemProps {
  gif: Gif;
}

export const ResultItem: FunctionComponent<ResultItemProps> = ({ gif }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(gif.url);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="result-item">
      {!isLoaded && <Spinner />}
      <img
        className="result-item-img"
        src={gif.url}
        alt={gif.title}
        style={isLoaded ? {} : { display: 'none' }}
        onLoad={handleImageLoad}
      />
      {isLoaded && (
        <div className="result-item-actions">
          <button onClick={copyUrlToClipboard}>Copy URL</button>
          <a
            className="result-item-link"
            href={gif.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Giphy
          </a>
        </div>
      )}
    </div>
  );
};
