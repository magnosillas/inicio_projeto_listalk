
import { getCategoria } from "@/api/categorias/getCategorias";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import styles from "./categories.module.scss";

const Categories = () =>{
    const [categorias, setCategotias] = useState([]);

    useEffect(()=>{
        mutate();
    },[])
    const { status, mutate } = useMutation(
        async () =>{
            return getCategoria;
        },
        {
            onSuccess: (res) =>{
              setCategotias(res.data);
              console.log(res.data)
            },

            onError: (error) =>{
                console.log(error)
            }

        }
   
    )
    return(
        <div className={styles.categories}>
            <h1>Categorias</h1>
            <button className={styles.categories__buttonNewCategory}>Nova Categoria</button>
            <h2>Status: {status}</h2>
            <div className={styles.categories__listCategories}>
                {
                    categorias?.map((categoria) =>{
                        return(
                            <div className={styles.categories__category} key={categoria.id} >{categoria.name}</div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Categories;