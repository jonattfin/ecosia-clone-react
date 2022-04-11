import * as Components from './components';

import styles from './styles.module.scss';

export default function Component(props: any) {
  const { counter, onSearch, language } = props;
  const commonProps = { language, styles };

  return (
    <div>
      <Components.SearchComponent {...{ counter, onSearch }} {...commonProps} />
      <Components.CountriesComponent {...commonProps} />
      <Components.MapComponent {...{ counter }} {...commonProps} />
      <Components.FinancialComponent {...commonProps} />
      <Components.WhyChooseUsComponent {...commonProps} />
      <Components.JoinUsComponent {...commonProps} />
    </div >
  )
}
