// pages/_app.js
import { ThemeProvider } from '@/context/ThemeContext';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style jsx global>{`
          /* Hide Next.js icon */
          .nextjs-icon-container {
            display: none !important;
          }
        `}</style>
      </Head>
      <ThemeProvider>
         <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;