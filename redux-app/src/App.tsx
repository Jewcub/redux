import React from 'react';

import "@fontsource/roboto"
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import { Flashcard } from './features/flashcard/Flashcard'
import './App.css';

const headerStyle = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark
  },
}))

function App() {
  const headerClass = headerStyle()
  return (
    <div className="App">
      <Box >
        <Box className={headerClass.root} bgcolor="primary" width="100" display="flex"
          justifyContent="center" >
          <Typography color="textSecondary" variant="h1" >
            Flashcards
          </Typography>
        </Box>

        <Container maxWidth="sm">

          <Flashcard />

        </Container>
      </Box>

    </div>
  );
}

export default App;
