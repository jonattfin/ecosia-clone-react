import HowItWorksPage from './';
import * as Components from './components';
import styles from './styles.module.scss';

export default () => <div></div>

export const BrandsComponent = () => {
  const props = { styles, language: {} };
  return <Components.BrandsComponent {...props} />
}

export const GraphicsComponent = () => {
  const props = { styles, language: {} };
  return <Components.GraphicsComponent {...props} />
}

export const HowItWorksComponent = () => {
  const props = { styles, language: {} };
  return <Components.HowItWorksComponent {...props} />
}

export const PlantTreesComponent = () => {
  const props = { styles, language: {} };
  return <Components.PlantTreesComponent {...props} />
}

export const ReportsComponent = () => {
  const props = { styles, language: {} };
  return <Components.ReportsComponent {...props} />
}

export const HowItWorksPageIndex = () => {
  const props = {
  };

  return <HowItWorksPage {...props} />;
}
