import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#83C5BE',
      dark: '#006D77',
    },
    secondary: {
      main: '#006D77',
      dark: '#E29578'
    },
    background: {
      default: '#ffddd2'
    },
    text: {
      primary: '#1e1e1e',
      secondary: 'white',
    }
  },
};

export default createMuiTheme(theme);
