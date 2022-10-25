import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import UserMemo from './context/User';
import { Navbar } from './components';

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
        <UserMemo>
          <Navbar />
          <Outlet />
          <footer>footer</footer>
        </UserMemo>
      </div>
    </ThemeProvider>
  );
}
export default App;
