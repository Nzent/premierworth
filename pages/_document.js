import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className='bg-gray-200 bg-bgimage1 bg-no-repeat bg-fixed h-full ' lang='en'>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc40d" />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600&display=swap" rel="stylesheet" />
                    <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js" defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument