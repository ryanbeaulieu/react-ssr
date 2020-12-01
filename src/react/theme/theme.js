import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ae24bc",
      main: '#4ee32a',
      dark: '#ae24bc'
    },
    secondary: {
      main: '#12bbd9',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;