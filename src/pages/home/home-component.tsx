import * as Components from './components';

export default function Component(props: any) {
  const { language, counter, onSearch } = props;

  return (
    <div>
      <Components.SearchComponent {...{ language, counter, onSearch }} />
      <Components.CountriesComponent {...{ language }} />
      <Components.MapComponent {...{ counter }} />
      <Components.FinancialComponent {...{ language }} />
      <Components.WhyChooseUsComponent />
      <Components.JoinUsComponent />
    </div >
  )
}
