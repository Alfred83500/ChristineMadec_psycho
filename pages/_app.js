import '../styles/globals.css'
import '../styles/ckeditor.css'
import Navbar from '../components/Navbar/Navbar'
import Head from '../components/Head/Head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head/>
            <Navbar/>
            <Component {...pageProps} />


        </>
    );
}

export default MyApp
