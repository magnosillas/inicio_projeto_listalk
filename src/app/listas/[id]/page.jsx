"use client"
import styles from "./lista.module.scss";
import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from "react";
import { getCategoria, deleteList, updateList, getLista } from "@/api/api-common";
import Header from "@/components/Header/index.jsx";
import { useParams } from "next/navigation";
import Select from "@/components/Listas/Select";
import { postCategoria, getItens, createItem, deleteItem } from '@/api/api-common';
import { useRouter } from "next/navigation";

const ListasIdPage = () => {

    const { push } = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [selected, setSelected] = useState();
    const [newCategory, setNewCategory] = useState("");
    const [newCategoryActive, setNewCategoryActive] = useState(false);


 

    const createNewcategory = async (name) => {
        const response = await postCategoria(name);
        categoriasData();
        setSelected(response);
    }

    const postItem = async () => {
        const requsest = { "content": newItem}
        const response = await createItem(id,requsest);
        console.log(response);
        itensData();
    }

    const deleteItemButton = async (idItem) => {
        const response = await deleteItem(id,idItem);
        itensData();
        console.log(response);
    }


    const categoriasData = async () => {
        setCategories(await getCategoria());
    }
    const itensData = async () => {
        setItems(await getItens(id));
        console.log(items);
    }

    const removeList = async () => {
        const response = await deleteList(id);
        push(`/listas`);
        console.log(response);
    }

    const saveList = async () => {
        const requsest = { "name": title, "description": description, "category": selected }
        const response = await updateList(id, requsest);
        console.log(response);
        push(`/listas`);
    }

    const listaData = async () => {
        const response = await getLista(id);
        setTitle(response.name);
        setDescription(response.description);
        console.log(response);
    }

    useEffect(() => {
        categoriasData();
        itensData();
        listaData()

    }, []);


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

                        
                            {
                                items && items.map((item) => (
                                    <div className={styles.list__items__item} key={item.id}>
                                        <div className={styles.list__items__item__text}><p>{item.content}</p> </div>
                                        <div className={styles.list__items__item__close}> 
                                        <Image onClick={
                                            () =>{
                                            deleteItemButton(item.id)}} src="/imagens/close.svg" width={20} height={20} alt="Picture of the author" /> </div>
                                      
                                    </div>
                                ))
                            }
                       
                        </div>

                        <section className={styles.list__bottom}>

                            <div className={styles.list__inputs}>
                                <div>
                                <label htmlFor="newItem">New Item:</label>
                                <div className={styles.list__inputs__newItens}>
                                    <input className={styles.list__inputs__input} placeholder="Enter your another item to your list" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                                    <button className={styles.addButton} onClick={postItem}> <Image src="/imagens/check.svg" width={24} height={24} alt="Picture of the author" />
                                    </button>
                                </div>
                                
                                </div>
                                <div>
                                <label htmlFor="selected">Category:</label>

                                <Select newCategoryActive={newCategoryActive} setNewCategoryActive={setNewCategoryActive} selected={selected} setSelected={setSelected} categorias={categories} />
                                {newCategoryActive &&
                                    <div className={styles.list__inputs__newItens}>
                                        <input placeholder="Enter a name for the new category" className={styles.list__inputs__input} type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                                        <button className={styles.addButton} onClick={() => {
                                            createNewcategory(newCategory);
                                            setNewCategoryActive(false);
                                        }}><Image src="/imagens/check.svg" width={24} height={24} alt="Picture of the author" /></button>
                                    </div>
                                }
                                </div>
                            </div>

                            <div className={styles.list__buttonContainer}>
                                <button className={styles.list__button} onClick={removeList} >Delete List</button>
                                <button className={styles.list__button} onClick={saveList} >Save list</button>
                            </div>
                        </section>
                    


                </main>

            </div>



        </>


    )
}

export default ListasIdPage;