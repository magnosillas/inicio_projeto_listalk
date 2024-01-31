import styles from "./footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'

const Footer = () =>{

    return(
      
        <footer className={styles.footer}>
            <div className={styles.footer__main}>
                <div className={styles.footer__main__logo}>
                <Image
                    src="/imagens/pencil.png"
                    width={60}
                    height={60}
                    alt="Logo Listalk"
                />
                <h1>LISTALK</h1>
                </div>

                <div className={styles.footer__main__links}>
                    <a href="">Concept</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                </div>

                <div className={styles.footer__main__social}>
                    <a href=""><Image src="/imagens/Facebook.png" width={15} height={15}></Image> </a>
                    <a href=""><Image src="/imagens/Instagram.png" width={15} height={15}></Image> </a>
                    <a href=""><Image src="/imagens/Twitter.png" width={15} height={15}></Image> </a>
                    <a href=""><Image src="/imagens/Linkedin.png" width={15} height={15}></Image> </a>
                </div>
            </div>
            
            <div className={styles.footer__credits}>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies Settings</a>
        </div>
        </footer>

        
        
    )
}

export default Footer;