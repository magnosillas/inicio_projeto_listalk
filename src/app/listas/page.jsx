"use client"
import styles from "./listas.module.scss";

import Lista from '@/components/Listas/index.jsx'
import Dropdown from "@/components/Listas/Dropdown";
import { useState, useEffect } from "react";
import { createList, getCategoria, getListas } from "@/api/api-common";
import Header from "@/components/Header/index.jsx";
import { useRouter } from "next/navigation";

const ListasPage = () => {
    const {push} =  useRouter();

    const [selected, setSelected] = useState();
    const [categorias, setCategorias] = useState([]);
    const [listas, setListas] = useState([]);

    const categoriasData = async () => {
        setCategorias(await getCategoria());
    }

    const listasData = async () => {  
        setListas(await getListas());
    }

    useEffect(() => {
        categoriasData();
        listasData();
        
    }, []);


    const addNewList = async () => {
        const newList = {
            "name": "Edit the list name...",
            "description":"Add a description to your list here"
        }
        const response = await createList(newList);
        console.log(response);
        push(`/listas/${response.id}`);
    }


    return (
        <>
            <Header />
            <main className={styles.lista}>

                <section className={styles.lista__top}>
                    <div className={styles.text}>
                        <h1>Your lists</h1>
                        <p>all in one place.</p>
                    </div>

                    <Dropdown categorias={categorias} selected={selected} setSelected={setSelected} ></Dropdown>
                </section>
               
                <div className={styles.lista__list}>
                    {
                        listas && listas.map((lista) => (
                            !selected ||  selected.name === lista.category.name ?
                              <Lista lista={lista} key={lista.id}></Lista> :
                              null
                          ))
                    }

                </div>

                <div className={styles.lista__buttonContainer}>
                    <button className={styles.lista__button} onClick={addNewList}>Add New List</button>
                </div>

            </main>
        </>


    )
}

export default ListasPage;