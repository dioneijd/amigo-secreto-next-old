import '../styles/globals.css'
import { GroupProvider} from '../contexts/groupContext'

function MyApp({ Component, pageProps }) {
  return (
    <GroupProvider>
      <Component {...pageProps} />
    </GroupProvider>
)}

export default MyApp
