import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import styled, { ThemeProvider as ScThemeProvider } from 'styled-components';
import theme from './theme';
import Landing from "./components/landing/Landing";

const StyledApp = styled(Box)`
  text-align: center;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <CssBaseline />
        <StyledApp>
          <Landing />
        </StyledApp>
      </ScThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;