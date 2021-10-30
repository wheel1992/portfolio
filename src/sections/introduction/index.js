import { Box } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import React from 'react';



const SectionIntroduction = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '700px',
      justifyContent: 'flex-start',
      [theme.breakpoints.up('md')]: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }
    }}>
      <Box
        sx={{
          marginBottom: '50px',
          [theme.breakpoints.up('md')]: {
            marginBottom: 0,
          }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#ffffff',
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            textTransform: 'uppercase',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
              textAlign: 'left',
            }
          }}
        >
          Hello, I'm Joseph Cheng.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: 1.125,
            marginBottom: '1.25rem',
            textTransform: 'uppercase',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
              textAlign: 'left',
            }
          }}
        >
          Software & UX Engineer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#ffffff',
            fontWeight: 400,
            fontSize: '1.125rem',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
              textAlign: 'left',
            }
          }}
        >
          Opportunism & Passionate about Technology
        </Typography>
      </Box>
      <Box
        sx={{
          height: '100%',
          textAlign: 'center',
          [theme.breakpoints.up('md')]: {
            textAlign: 'left',
          }
        }}
      >
        <Box
          component="img"
          sx={{
            height: '100%',
            maxWidth: '100%',
            // [theme.breakpoints.up('md')]: {
            //   width: 450,
            // },
            // [theme.breakpoints.up('lg')]: {
            //   width: 600,
            // },
          }}
          src={`${process.env.PUBLIC_URL}/image/joseph.png`}
        />
      </Box>

      
    </Box>
  );
};

export default SectionIntroduction;