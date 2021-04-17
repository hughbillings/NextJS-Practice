import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1 className={styles.title}> Hello World! </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam sit amet metus massa. Nunc at turpis sed augue congue venenatis eu sed ex.
        Ut nec ullamcorper lorem, id pharetra felis. Suspendisse potenti. 
        Phasellus nec dapibus augue. Donec aliquet, massa ac elementum sodales, tortor lorem condimentum risus, eget vulputate nisi est sit amet ipsum. Sed ultricies vel sem at porttitor. Fusce consequat tempus dolor quis placerat. Nullam id porttitor lectus. Quisque lacus dui, blandit vel convallis vel, tempor non nisi. Duis felis sem, scelerisque eu ipsum eu, aliquet imperdiet diam. Praesent maximus, dui at ultrices fermentum, sem erat pulvinar sapien, non sagittis odio nibh vel ipsum. Vestibulum pellentesque ligula id lectus scelerisque interdum. 
        Integer consequat est vitae metus porttitor dictum.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninja Listing </a>
      </Link>
    </div>
  )
}

