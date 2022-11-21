
import * as React from 'react';
import { useState } from 'react';

export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar?: string;
}

export type AuthContextType = {
    user: IUser | null;
    token: string;
    isAuth: boolean;
    updateToken: (token: string) => void;
    updateUser: (user: IUser) => void;
    updateAuth: (value: boolean) => void;
};

export const AuthContext = React.createContext<AuthContextType>({
    isAuth: false,
    user: null,
    token: '',
    updateToken: () => {},
    updateUser: () => {},
    updateAuth: () => {},
});

interface IAuthProvider {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ user, token, isAuth, updateToken: setToken, updateUser: setUser, updateAuth: setIsAuth }}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;