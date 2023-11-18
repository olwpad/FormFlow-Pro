import React, { createContext } from 'react';
import { FormState,FormAction } from '../useReducer';

interface UserContextProps {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
