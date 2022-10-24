import { createContext } from 'react';
import { User } from '../interfaces';

const UserContext = createContext<User | null>(null);

export default UserContext;
