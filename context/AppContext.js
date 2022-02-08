import React, { createContext, useReducer, useMemo, useContext } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  posts: {
    limit: 4,
    increaseLimitBy: 4,
  },
};
export const AppContext = createContext(initialState);

export const AppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const ContextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
