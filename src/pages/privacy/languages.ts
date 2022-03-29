import { Languages } from '../../constants';

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
