import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext } from 'react';
import { User } from './interfaces';

import './App.css';

const UserContext = createContext<User | null>(null);
const user: User = {
  id: 3,
  email: 'user@gmail.com',
  name: 'user',
  role: 'client',
};
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
//   const value = React.useContext(UserContext);

export default App;
