import { GroupProvider } from '../contexts/group'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
    <GroupProvider>
      <Component {...pageProps} />
    
    </GroupProvider >

  )
}

export default MyApp
