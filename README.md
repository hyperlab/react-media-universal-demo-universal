A demonstration of how react-media-universal solves the problems with hydrating server side rendered React.

This demo shows that when we wrap our tree in the `<MediaProvider>` component, and use the `<Media>` component imported from `react-media-universal`, we don't get the DOM inconsistency as demonstrated in [react-media-universal-demo-vanilla](https://github.com/hyperlab/react-media-universal-demo-vanilla).

# Setup and running

First install dependencies:

`yarn`

Then build server and client:

`yarn build`

And run server:

`yarn start`
