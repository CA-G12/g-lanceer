import {
  createContext, useMemo, useState, useEffect,
} from 'react';
import axios from 'axios';
import { User, UserContex, Props } from '../interfaces';

export const UserContext = createContext<UserContex>({});
function UserMemo({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get('/api/v1/user');
        setUser(data.data);
      } catch (err) {
        setUser(null);
      }
    };
    getUser();
  }, []);
  const memo = useMemo(() => ({ user, setUser }), [user]);
  return (
    <div>
      <UserContext.Provider value={memo}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserMemo;
