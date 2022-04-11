import * as Components from './components';
import styles from './styles.module.scss';

export default function Component() {
  const props = { styles, language: {} };
  return (
    <div>
      <Components.PlantTreesComponent {...props} />
      <Components.BrandsComponent {...props} />
      <Components.HowItWorksComponent {...props} />
      <Components.GraphicsComponent {...props} />
      <Components.ReportsComponent {...props} />
    </div>
  );
}
