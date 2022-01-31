import { createContext } from 'react'
let defaultUser = null;
export const UserContext = createContext<any>({
    user: defaultUser,
    setUser: ({name,avatar}:any) => {},
  });
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
