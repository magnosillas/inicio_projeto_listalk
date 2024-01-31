import styles from "./listas.module.scss";
import Link from 'next/link'
import Image from 'next/image'

const Lista = ({lista}) =>{

    return(
      
        <main className={styles.list}>

            <Link href={`listas/${lista.id}`}>
                
                <button className={styles.list__button}>{lista.name}</button>
            </Link>
            
        </main>

        
        
    )
}

export default Lista;