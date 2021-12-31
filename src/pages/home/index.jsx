import Link from 'next/link'
const style = require('./style.module.css')
const logo = '/logo.svg'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img src={logo}></img>
      </div>
      <Link href="/newGroup">
        <a>Criar um novo grupo</a>
      </Link>
    </div>
  )
}
