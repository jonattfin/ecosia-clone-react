# This is a clone of "ecosia.org" search engine

The url where this repo is deployed is: https://ecosia-clone.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other *opionated* decisions

- pages are split by "features", and all the components / images / styles stay within that feature folder "page" for better coupling.
- pages are loaded in a lazy fashion "by demand".
- the components are split by the "smart/dumb" rule, and usually per page there's only one smart component, all the others just render what they receive as props.
- Storybook is used to render components "out of the box". Also those components are snapshot tested.
- For the integration tests we're using cypress.js with cucumber.js and the features/scenarios are written in Gerkin.
- The style & icons are based on material ui and based on styled components.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
