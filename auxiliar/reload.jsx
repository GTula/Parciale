import  { React, createContext, useState } from 'react';

export const reloadContext = createContext();

export const ReloadPageProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  return (
    <reloadContext.Provider value={[reload, setReload]}>
      {children}
    </reloadContext.Provider>
  );
};
