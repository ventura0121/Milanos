import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import CreateButton from './components/Button'
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
  <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  </div>
  );
}

export default App;
