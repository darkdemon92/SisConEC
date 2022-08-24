import React, { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Menu from "./components/Menu";
import Rutas from "./routes/routes";





function App() {

  const [mode, setmode] = useState("dark");
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Container fixed>
          <Menu mode={mode} setmode={setmode} />
          <Rutas />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
