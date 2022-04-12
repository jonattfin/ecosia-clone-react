import { Container } from '@mui/material';

import * as Components from './components';

export default function Component(props: any) {
  const { counter, onSearch, language } = props;
  const commonProps = { language };

  return (
    <Container>
      <Components.SearchComponent {...{ counter, onSearch }} {...commonProps} />
      <Components.CountriesComponent {...commonProps} />
      <Components.MapComponent {...{ counter }} {...commonProps} />
      <Components.FinancialComponent {...commonProps} />
      <Components.WhyChooseUsComponent {...commonProps} />
      <Components.JoinUsComponent {...commonProps} />
    </Container>
  )
}
