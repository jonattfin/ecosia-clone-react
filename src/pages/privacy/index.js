import { useContext } from 'react';
import { LanguageContext } from '../../language';
import { ThemeContext } from '../../theme';
import { getLanguage } from './languages';

var Component = () => {
  var languageContext = useContext(LanguageContext);
  var themeContext = useContext(ThemeContext);

  const language = getLanguage(languageContext);

  return (
    <div>
      {language.privacy}
      <div>
        language: {JSON.stringify(languageContext)}
      </div>
      <div>
        theme: {JSON.stringify(themeContext)}
      </div>

    </div>);
}

export default Component;
