import * as Components from './components';

export default function Component(props: any) {
  const { language, counter, query, setQuery, doSearch } = props;

  return (
    <div>
      <Components.SearchComponent {...{ language, counter, query, setQuery, doSearch }} />
      <Components.CountriesComponent {...{ language }} />
      <Components.MapComponent {...{ counter }} />
      <Components.FinancialComponent {...{ language }} />
      <Components.WhyChooseUsComponent />
      <Components.JoinUsComponent />
    </div >
  )
}
