import { FunctionComponent } from 'react';
import { ResultItem } from './ResultItem';
import './ResultsList.css';

interface Gif {
  id: string;
  url: string;
  title: string;
}

interface ResultsListProps {
  results: Gif[];
}

export const ResultsList: FunctionComponent<ResultsListProps> = ({
  results,
}) => {
  return (
    <div className="results-list">
      {results.map((gif) => (
        <ResultItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};
