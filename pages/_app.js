import '../styles/globals.css'


//add tsconfig.json: yarn add --dev typescript @types/react
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
