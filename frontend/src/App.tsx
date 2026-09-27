import { Container, CssBaseline, Typography } from '@mui/material'

function App() {
  return (
    <>
      <CssBaseline />
      <Container component="main" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1">
          chatWithMe
        </Typography>
      </Container>
    </>
  )
}

export default App
