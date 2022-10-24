import {
  createContext, useMemo, useState, useEffect,
} from 'react';
import axios from 'axios';
import { User } from '../interfaces';

type UserContex = {
  user?: User | null,
  setUser?: (user: User) => void,
};
export const UserContext = createContext<UserContex>({});
function UserMemo({ children } : any) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const userObj = await axios.get('/api/v1/user');
        setUser(userObj.data);
      } catch (err) {
        console.log(err, 'axios error');
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
