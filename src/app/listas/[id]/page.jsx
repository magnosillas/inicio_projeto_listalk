"use client"
import styles from "./lista.module.scss";
import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from "react";
import { getCategoria } from "@/api/api-common";
import Header from "@/components/Header/index.jsx";
import { useParams } from "next/navigation";

const ListasIdPage = () => {

    const [title, setTitle] = useState("Edit the list name...");
    const [description, setDescription] = useState("Add a description to your list here");
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [selected, setSelected] = useState();

    const addItemToList = () => {
        // Aqui você pode fazer a chamada para adicionar o item à lista
        // Você pode usar o valor de `newItem` para saber qual item adicionar
    }


    return (
        <>
            <Header />

            < div className={styles.list}>

                <section className={styles.list__top}>
                    <input className={styles.list__top__title} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className={styles.list__top__description} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </section>

                <main className={styles.list__main}>
                    <div className={styles.list__items}>

                        <div className={styles.list__items__list}>
                            {
                                items && items.map((item) => (
                                    <div className={styles.list__items__list__item} key={item.id}>
                                        <input type="checkbox" />
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <section className={styles.list__bottom}>

                            <div className={styles.list__inputs}>
                                <label htmlFor="newItem">New Item:</label>
                                <div className={styles.list__inputs__newItens}>
                                    <input className={styles.list__inputs__input} placeholder="Enter your another item to your list" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                                    <button className={styles.addButton} onClick={addItemToList}> <Image src="/imagens/check.svg" width={24} height={24} alt="Picture of the author" />
                                    </button>
                                </div>

                                <label htmlFor="selected">Category:</label>
                                <select  name="selected" id="selected" value={selected} onChange={(e) => setSelected(e.target.value)}>
                                   <option value="nome">nome</option>
                                   <option value="nomeeee">nomeeee</option>
                                   <option value="nomaae">nomaae</option>   
                                    {
                                        categories && categories.map((category) => (
                                            <option key={category.id} value={category.name}>{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className={styles.list__buttonContainer}>
                                <button className={styles.list__button}>Add Item</button>
                                <button className={styles.list__button}>Delete Item</button>
                            </div>
                        </section>
                    </div>


                </main>

            </div>



        </>


    )
}

export default ListasIdPage;