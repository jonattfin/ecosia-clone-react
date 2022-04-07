
import { useState, useEffect, useContext } from 'react';
import { interval, tap } from 'rxjs';
import { useNavigate } from "react-router-dom";

import { LanguageContext } from '../../language';
import { getLanguage } from './languages';

import HomeComponent from './home-component';

export default function Component() {
  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);

  var languageContext = useContext(LanguageContext);
  const language = getLanguage(languageContext);

  var navigate = useNavigate();
  const onSearch = (q) => { navigate(`/search/${q}`); };

  useEffect(() => {
    const subscription = interval(5000)
      .pipe(tap(value => console.log(value + 1)))
      .subscribe(value => setCounter(initialValue + (value + 1)));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <HomeComponent {...{ counter, language, onSearch }} />
  )
}
