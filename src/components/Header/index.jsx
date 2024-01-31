import styles from "./header.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";
import api from "@/api/http-common";

const Header = () =>{
    const[logado, setLogado]  = useState(false);

     const verificarLogado = () =>{
        localStorage.getItem("token") ? setLogado(true) : setLogado(false);
     }

     useEffect(() =>{
        verificarLogado();
     }, [logado])

     const logout = () =>{
           
            localStorage.removeItem("token");
            setLogado(false);
        }



    return(
        <header className={styles.header}>
           <div className={styles.image}>
                <Image
                src="/imagens/pencil.png"
                width={55}
                height={55}
                alt="Picture of the author"
                />
           </div>
            

            <div className={styles.header__links}>
                <Link href="/" className={styles.header__links__home}>
                Home
                </Link>
                <Link href="/listas" className={styles.header__links__categoria}>
                Listas
                </Link>
            </div>
           
            
            <div className={styles.header__buttons}>
                {!logado && <>
                    <Link href="/login">
                <button  className={styles.header__buttons__beje} >Login</button>
                </Link>
                <Link href="/register">
                <button className={styles.header__buttons__laranja} >Register</button>
                </Link>
                </>}

                {logado && <>
                    <Link href="/login">
                <button  className={styles.header__buttons__laranja} onClick={logout} >Logout</button>
                </Link> </> }
                
                    
            </div>
        </header>
    )
}

export default Header;