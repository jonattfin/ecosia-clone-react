import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../context';

var Component = () => {
  var languageContext = useContext(LanguageContext);
  var themeContext = useContext(ThemeContext);
  return (
    <div>
      Privacy
      <div>
        language: {JSON.stringify(languageContext)}
      </div>
      <div>
        theme: {JSON.stringify(themeContext)}
      </div>

    </div>);
}

export default Component;
