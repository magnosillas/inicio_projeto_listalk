import styles from "./home.module.scss";
import Image from 'next/image'
const Home = () =>{

    return(
        <section className={styles.home}>
            

            <div className={styles.home__text}>
                <div className={styles.home__text__logo}>
                    <h1>LIST</h1>
                    <h1>ALK</h1>
                </div>
                

                <h2>Your Ultimate Destination for<br/> Cataloging Life's Favorites</h2>
            </div>
            <Image
            src="/imagens/Home.png"
            width={700}
            height={700}
            alt="Home Image"
            />
           
        </section>
    )
}

export default Home;