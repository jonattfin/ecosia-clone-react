
import React, { useState, useEffect, useContext } from 'react';
import { interval, tap } from 'rxjs';

import { LanguageContext } from '../../context';
import { getLanguage } from './languages';

import HomeComponent from './home-component';

const HomeContainer = () => {

  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);

  const [query, setQuery] = useState('');

  var languageContext = useContext(LanguageContext);
  const language = getLanguage(languageContext);

  useEffect(() => {
    const subscription = interval(1000)
      .pipe(tap(x => console.log(x)))
      .subscribe(value => setCounter(initialValue + value));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <HomeComponent {...{ counter, query, language, setQuery }} />
  )
}

export default HomeContainer;

