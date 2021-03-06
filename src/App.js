import React from 'react';
import Media, { MediaProvider } from 'react-media-universal';

const server = { color: 'darkred' };
const client = { color: 'darkgreen' };

const App = () => (
  <MediaProvider>
    <div>
      <Media
        query="(max-width: 500px)"
        render={() => <h2 style={server}>Rendered on server</h2>}
        defaultMatches={true}
      />
      <Media
        query="(min-width: 501px)"
        render={() => <h2 style={client}>Rendered on the client</h2>}
        defaultMatches={false}
      />
    </div>
  </MediaProvider>
);

export default App;
