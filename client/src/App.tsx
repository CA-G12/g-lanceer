import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
  const [user, setUser] = useState({ name: '', role: '', userID: 0 });
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
        <nav>navbar</nav>
        <Outlet context={user} />
        <footer>footer</footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
