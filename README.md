# This is a *clone* of "ecosia.org" search engine

The url where this repo is deployed is: https://ecosia-clone.vercel.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other *opinionated* decisions

- pages are split by "features", and all the components / images / styles stay within that feature folder "page" for better coupling.
- pages are loaded in a lazy fashion "by demand" to minimize the loading time.
- the components are split by the "smart/not smart" rule, and usually per page there's only one smart component which does the api calls, all the others just render what they receive as props.
- Storybook is used to render components "out of the box" and to build them in isolation. Also those components are snapshot tested.
- For the integration tests we're using cypress.js with cucumber.js and the features/scenarios are written in Gerkin.
- The style & icons are based on material ui and based on styled components.
- For static code analysis we're using SonarCloud.io. and the report is public at this address: https://sonarcloud.io/summary/overall?id=jonattfin_ecosia-clone 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
