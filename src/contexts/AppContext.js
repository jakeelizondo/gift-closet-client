import React from 'react';

const AppContext = React.createContext({
  gifts: [],
  tags: [],
  setGifts: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
