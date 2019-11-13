import React, { useState } from "react";
import Context from '../context/Context';

function AppProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const handleLanguage = language => {
    setLanguage(language);
  };
  return (
    <Context.Provider
      value={{
        language,
        handleLanguage
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppProvider;
