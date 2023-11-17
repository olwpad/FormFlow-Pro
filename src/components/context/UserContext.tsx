import React, { createContext } from 'react';

interface UserContextProps {
  uservalue: string;
  setuse: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
