import { useMutation } from "react-query";
import styles from "./login.module.scss";
import { useState } from "react";
import { postLogin } from "@/api/login/postLogin";
import api from "@/api/http-common";
import { useRouter } from "next/navigation";

const Login = () =>{
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const {push} =  useRouter();

   


    const loginPost = async () =>{
        try{
            const response = await postLogin(login, senha);
            console.log(response)
            localStorage.setItem("token", response);
            push("/listas");
        }catch(error){
            console.log(error);
        }
    }

    return(
        <main className={styles.page}>

            <div className={styles.text}>
                <h1>Welcome back!</h1>
                <p>Your organized world awaits...</p>
            </div>

            <div className={styles.login}>
                <div className={styles.login__inputContainer}>
                    <label htmlFor="login">E-mail Adress <span style={{color:'#F21D2F'}}>*</span> </label>
                    <input placeholder="Enter your best e-mail" className={styles.login__input} type="text" value={login} onChange={(e) => setLogin( e.target.value)} />
                    <label htmlFor="senha" >Password <span style={{color:'#F21D2F'}}>*</span></label>
                    <input placeholder="Enter a strong password" className={styles.login__input} type="password" value={senha} onChange={(e) => setSenha( e.target.value)} />
                </div>  
                <div className={styles.login__buttonLogin}>
                <button className={styles.login__button} onClick={ loginPost}>Login</button>
                </div>
            </div>
        </main>
    )
}

export default Login;