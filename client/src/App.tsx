import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

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
        <nav>navbar</nav>
        <Outlet />
        <footer>footer</footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
