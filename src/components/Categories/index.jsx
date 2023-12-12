
import { getCategoria } from "@/api/categorias/getCategorias";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";

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
        <div>
            <h1>Categorias</h1>
            <h2>{status}</h2>
            {
                categorias?.map((categoria) =>{
                    return(
                        <div key={categoria.id} >{categoria.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Categories;