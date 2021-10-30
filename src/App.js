import React from 'react';
import { useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import SectionIntroduction from './sections/introduction';

const Content = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        // width: '100vw', 
      }}
    >
      <Box
        sx={{
          // width: 100%
          // width: '100%',
          padding: '25px',
          // [theme.breakpoints.up('lg')]: {
          //   width: 1200,
          //   maxWidth: 1200,
          // }
        }}>
        <SectionIntroduction />
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  );
}

export default App;
