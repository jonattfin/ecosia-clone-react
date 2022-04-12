import HowItWorksPage from './';
import * as Components from './components';

export default () => <div></div>

export const BrandsComponent = () => {
  const props = { language: {} };
  return <Components.BrandsComponent {...props} />
}

export const GraphicsComponent = () => {
  const props = { language: {} };
  return <Components.GraphicsComponent {...props} />
}

export const HowItWorksComponent = () => {
  const props = { language: {} };
  return <Components.HowItWorksComponent {...props} />
}

export const PlantTreesComponent = () => {
  const props = { language: {} };
  return <Components.PlantTreesComponent {...props} />
}

export const ReportsComponent = () => {
  const props = { language: {} };
  return <Components.ReportsComponent {...props} />
}

export const HowItWorksPageIndex = () => {
  const props = {
  };

  return <HowItWorksPage {...props} />;
}
