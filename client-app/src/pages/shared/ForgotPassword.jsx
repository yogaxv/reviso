import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SEO from '../../components/shared/Seo'
import { useLoginPageStyles } from '../../assets/styles'
import Copyright from '../../components/shared/Copyright'

const theme = createTheme()

export default function ForgotPassword() {
  const classes = useLoginPageStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <SEO title='Lupa password' />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box className={classes.cardHeader} />
          <Box
            component='form'
            onSubmit={handleSubmit}
            fullWidth
            noValidate
            sx={{ mt: 1, maxWidth: 300 }}
          >
            <Typography variant='subtitle2' align='center' gutterBottom>
             Masukan email Anda <br /> yang terhubungan dengan aplikasi <br /> REVISO.
            </Typography>

            <TextField
              className={classes.textField}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Alamat Email'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <Button
              className={classes.button}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2, borderRadius: 30, height: '48px' }}
              disableElevation
            >
              Reset email
            </Button>

            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant='body2' color='textSecondary'>
                  Atau
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>

            <Button fullWidth color='secondary'>
              <Typography variant='caption'>Kembali ke halaman sign-in</Typography>
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
