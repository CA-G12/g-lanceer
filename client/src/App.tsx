import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './interfaces';
import './App.css';
import UserContext from './context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1C3879',
    },
    secondary: {
      main: '#fff',
    },
  },
});
function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const userObj = await axios.get('/api/v1/user');
        setUser(userObj.data);
        console.log(userObj.data, 'user');
      } catch (err) {
        console.log(err, 'axios error');
      }
    };
    getUser();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UserContext.Provider value={user}>
          <nav>navbar</nav>
          <Outlet />
          <footer>footer</footer>
        </UserContext.Provider>
      </div>
    </ThemeProvider>
  );
}
export default App;
