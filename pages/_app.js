import { Styles } from '../styles/Styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Styles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
