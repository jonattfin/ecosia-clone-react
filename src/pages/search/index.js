import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import SearchComponent from './search-component';

export default function Component() {
  let { query = '' } = useParams();

  const [resultsObject, setResultsObject] = useState({
    totalEstimatedMatches: 0,
    values: []
  });

  var navigate = useNavigate();
  const doSearch = (q) => { navigate(`/search/${q}`); };

  useEffect(() => {
    const fetchData = async () => {
      const q = encodeURIComponent(query);
      let response = await fetch(`https://api.bing.microsoft.com/v7.0/search?q='${q}'`, {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_SEARCH_SUBSCRIPTION_KEY
        }
      });

      const data = await response.json();
      debugger;
      const { value, totalEstimatedMatches } = data.webPages;
      setResultsObject({ values: value, totalEstimatedMatches });
    }

    fetchData();
  }, [query]);

  return <SearchComponent {... { query, resultsObject, doSearch }} />;
}
