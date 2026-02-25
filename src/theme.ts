import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 20px',
          width: "360px",
        },
        containedPrimary: {
          color: 'white',
          background: 'linear-gradient(to right, #FF8D6B, #FFBA47)',
          '&:hover': {
            background: 'linear-gradient(to right, #e87a5a, #e8a93a)',
          },
        },
      },
    },
  },
});

export default theme;