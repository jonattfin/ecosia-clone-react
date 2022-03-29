import { Languages } from '../../language';

const languages = {
  [Languages.En]: {
    'search-to-plant-trees': "Search the web to plant trees...",
    'the-search-engine': 'The search engine that plants trees.',
    'where-do-you-plant-trees': 'Where are your trees being planted?',
    'we-plant-30-countries': 'We plant in 30+ countries with local organizations',
    'we-plant-in-brazil': 'Your trees in Brazil protect thousands of endangered plants and animals.',
    'we-plant-in-burkina-faso': 'By planting trees in Burkina Faso, you restore desertified land to its former fertility.',
    'we-plant-in-indonesia': 'In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.'
  },
  [Languages.Ro]: {
    'search-to-plant-trees': "(R) Search the web to plant trees...",
    'the-search-engine': '(R) The search engine that plants trees.',
    'where-do-you-plant-trees': '(R) Where are your trees being planted?',
    'we-plant-30-countries': '(R) We plant in 30+ countries with local organizations',
    'we-plant-in-brazil': '(R) Your trees in Brazil protect thousands of endangered plants and animals.',
    'we-plant-in-burkina-faso': '(R) By planting trees in Burkina Faso, you restore desertified land to its former fertility.',
    'we-plant-in-indonesia': '(R) In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.'
  },
};

export const getLanguage = (lang: Languages) => {
  return languages[lang];
}
