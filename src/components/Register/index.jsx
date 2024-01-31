import { useMutation } from "react-query";
import styles from "../login/login.module.scss";
import { useState } from "react";
import { postLogin } from "@/api/login/postLogin";
import { postRegister } from "@/api/login/postRegister";
import api from "@/api/http-common";
import { useRouter } from "next/navigation";

const Register = () =>{
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const {push} =  useRouter();

  

    const register = async () =>{
        try{
            const response = await postRegister(email, login, senha, "tutor");
            console.log(response)
            localStorage.setItem("token", response);
            push("/login");
        }catch(error){
            console.log(error);
        }
    }

    return(
        <main className={styles.page}>

            <div className={styles.text}>
                <h1>Register Now</h1>
                <p>to be a part of the list world.</p>
            </div>

            <div className={styles.login}>
                <div className={styles.login__inputContainer}>
                    <label htmlFor="login">Username <span style={{color:'#F21D2F'}}>*</span> </label>
                    <input placeholder="Enter your chosen username" className={styles.login__input} type="text" value={login} onChange={(e) => setLogin( e.target.value)} />
                    <label htmlFor="email">E-mail Address <span style={{color:'#F21D2F'}}>*</span> </label>
                    <input placeholder="Enter your best e-mail" className={styles.login__input} type="text" value={email} onChange={(e) => setEmail( e.target.value)} />
                    <label htmlFor="senha" >Password <span style={{color:'#F21D2F'}}>*</span></label>
                    <input placeholder="Enter a strong password" className={styles.login__input} type="password" value={senha} onChange={(e) => setSenha( e.target.value)} />
                </div>  
                <div className={styles.login__buttonLogin}>
                <button className={styles.login__button} onClick={register}>Register</button>
                </div>
            </div>
        </main>
    )
}

export default Register;