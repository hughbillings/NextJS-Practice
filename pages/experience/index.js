import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data}
    }
}

const Ninjas = ({ ninjas }) => {
    return ( 
        <div>

            <h1> Education </h1>
               
                    <a className={styles.single}>
                        <h3>Ardenne High School</h3>
                    </a>
                
                    <a className={styles.single}>
                        <h3>University of the West Indies, Mona</h3>
                    </a>
               
            <h1> Formal Experiences </h1>
                <h4 className={styles.single}>Coming Soon </h4>

        
            <h1> Social Media </h1>
               <Link href="https://github.com/hughbillings?tab=repositories">
               <a target="_blank"  className={styles.single}>
                   <h3>Github</h3>
               </a>
               </Link>

               <Link href="https://www.linkedin.com/in/hughbillingsjnr/">
               <a target="_blank"  className={styles.single}>
                   <h3>LinkedIn</h3>
               </a>
               </Link>
               
        </div>
     );
}
 
export default Ninjas;