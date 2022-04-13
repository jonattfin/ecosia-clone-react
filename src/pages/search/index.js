import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { range } from 'lodash-es';

import SearchComponent from './search-component';

export default function Component() {
  let { query = '' } = useParams();

  const [resultsObject, setResultsObject] = useState({
    totalEstimatedMatches: 0,
    values: [],
  });

  const [progress, setProgress] = useState(false);

  var navigate = useNavigate();
  const doSearch = (q) => { navigate(`/search/${q}`); };

  useEffect(() => {
    const fetchData = async () => {
      setProgress(true);
      const data = await searchByQuery(query);
      setResultsObject({ values: data, totalEstimatedMatches: data.length });
      setProgress(false);
    }

    fetchData();
  }, [query]);

  return <SearchComponent {... { query, resultsObject, doSearch, progress }} />;
}

function searchByQuery(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const max = getRandomInt(50, 1000);

      const data = range(1, max).map(i => {
        return {
          url: `https://${query}.com`,
          snippet: `snippet ${query}`,
          name: `name ${i}`
        };
      });
      resolve(data);
    }, 1000);
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
