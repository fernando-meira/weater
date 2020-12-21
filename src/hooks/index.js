import React from 'react';

import { ParamsProvider } from './ParamsContext';

const AppProvider = ({ children }) => {
  return <ParamsProvider>{children}</ParamsProvider>;
};

export default AppProvider;
