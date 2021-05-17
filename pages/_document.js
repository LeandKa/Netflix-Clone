import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
                <html>
                <head>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap"
                    rel="stylesheet"
                  />
                </head>
                <body style={{background:"#141414"}}>
                  <App {...props} />
                </body>
              </html>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
