import React, { useReducer } from 'react';
import { UserContext } from './UserContext';
import { formReducer } from '../useReducer';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(formReducer, {
    step: 1,
    formData: {}, // Inicializa con un objeto vacío
  });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
