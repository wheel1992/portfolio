import { createTheme } from '@mui/material/styles';
import { constants } from '../constants';
import {
  FontPoppinsRegular
} from '../fonts';

export const theme = createTheme({
  palette: {
    background: {
      default: constants.colors.primary,
    },
    primary: {
      main: constants.colors.primary,
    },
    secondary: {
      main: '#3F51B5',
    },
  },
  typography: {
    fontFamily: ['"Poppins"', 'Sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [FontPoppinsRegular],
      },
    },
  },
});