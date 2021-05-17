import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
    font-family:roboto;
    box-sizing: border-box;
    background-color:#141414;
  }
`

const theme = {
    colors: {
      red: '#E50914',
      green:'#46d369',
      gray:'#999'
    },
  }

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
