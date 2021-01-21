import React from 'react';

const AppContext = React.createContext({
  gifts: [],
  tags: [],
  setGifts: () => {},
  setTags: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
