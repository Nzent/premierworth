// components/layout.js

// import Navbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <h1>Navbar</h1>
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}