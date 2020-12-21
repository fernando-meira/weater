import React, { createContext, useContext } from 'react';

const ParamsContext = createContext({});

const ParamsProvider = ({ children }) => {
  return (
    <ParamsContext.Provider
      value={{
        appid: '59a02418589f6318271e63218c809045',
        lang: 'pt_br',
        units: 'metric',
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

function useParams() {
  const context = useContext(ParamsContext);

  if (!context) {
    throw new Error('ParamsContext must be used within ParamsProvider');
  }
  return context;
}

export { ParamsProvider, useParams };
