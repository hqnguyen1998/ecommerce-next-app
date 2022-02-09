import React, {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  products: {
    limit: 8,
    increaseLimitBy: 4,
    carts: [],
    totalPrice: 0,
  },
};
export const AppContext = createContext(initialState);

export const AppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('state'))) {
      dispatch({
        type: 'INIT_STORED',
        payload: JSON.parse(localStorage.getItem('state')),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(
        'state',
        JSON.stringify({
          carts: state.products.carts,
          totalPrice: state.products.totalPrice,
        })
      );
    }
  }, [state]);

  const ContextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
