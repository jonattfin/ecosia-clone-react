import { Languages } from '../../language';

const languages = {
  [Languages.En]: {
    privacy: "Privacy EN"
  },
  [Languages.Ro]: {
    privacy: "Privacy RO"
  },
};

export const getLanguage = (lang: Languages) => {
  return languages[lang];
}
