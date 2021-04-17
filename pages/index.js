import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1 className={styles.title} > To become a developer, one must .. </h1>
      <p className={styles.text}>
      Do the difficult things while they are easy and do the great things while they are small. <br></br>
      A journey of a thousand miles must begin with a single step.
      </p>
      <p> Lao Tzu </p>

      <h1>My Story </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla venenatis aliquam mattis. Etiam at luctus felis. Duis ex urna, auctor a libero ut, gravida cursus risus. 
        Suspendisse non arcu et ligula viverra sollicitudin. Nulla ligula mauris, ultricies sit amet tristique at, molestie sed nunc. 
        Curabitur lacus nisl, porta ac lobortis ac, pretium eget enim. Nulla tortor felis, bibendum eget ultrices sed, convallis ac ante.
         Phasellus ut faucibus dui. Integer vestibulum efficitur nisl sed vehicula. 
      </p>

      <p>
      Maecenas ac nibh tempus risus semper bibendum. In hendrerit felis at nulla pellentesque luctus. 
      Donec maximus sit amet augue nec pharetra. Sed tempus placerat finibus. Nunc eleifend, ipsum et lobortis commodo, ex justo vulputate est, 
      sed ultrices sem tellus at sapien. Praesent a est ipsum. Aliquam sed odio sit amet dui tincidunt pellentesque at a enim. 
      Vestibulum id tempor lacus. Nam fermentum lacus felis, ut gravida mauris fringilla non.
      </p>

      <h1>Accomplishments</h1>
      <Link href="/experience">
        <a className={styles.btn}> See My Experience </a>
      </Link>
    </div>
  )
}

