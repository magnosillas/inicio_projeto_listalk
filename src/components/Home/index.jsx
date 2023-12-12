import styles from "./home.module.scss";

const Home = ({setVisible}) =>{

    return(
        <section>
            <h1>Home</h1>
            <button onClick={() => setVisible(true)} >Login</button>
        </section>
    )
}

export default Home;