import React, { useState } from 'react';
import { UserContext } from './UserContext';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [uservalue, setuse] = useState("hola");

  return (
    <UserContext.Provider value={{ setuse, uservalue }}>
      {children}
    </UserContext.Provider>
  );
};
