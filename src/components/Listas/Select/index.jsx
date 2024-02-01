import React, { useState } from 'react';
import styles from "./select.module.scss";
import Image from 'next/image'
import { postCategoria } from '@/api/api-common';

const Select = ({ newCategoryActive, setNewCategoryActive, selected, setSelected, categorias }) => {
    const [isActive, setIsActive] = useState(false);
    


    
    const [showName, setShowName] = useState("Select a category");


    return (

        <main className={styles.dropdown}>



            <div className={styles.dropdown__button} onClick={() => setIsActive(!isActive)}>
                  {selected  ? selected.name : showName}
                
                
            </div>

            

            {isActive && categorias && categorias.length > 0 &&
                <div className={styles.dropdown__content}>
                    <div className={styles.dropdown__item} key={0} onClick={(e) => {
                            setNewCategoryActive(true);
                            setIsActive(false);
                            setSelected(null);
                            setShowName("Create a new category");
                        }}>Create a new category</div>
                    {categorias.map((option) => (
                        <div className={styles.dropdown__item} key={option.id} onClick={(e) => {
                            setNewCategoryActive(false); 
                            setSelected(option);
                            setIsActive(false);
                        }}>
                            {option.name}
                        </div>
                    ))}
                </div>
            }


        </main>





    )
}

export default Select;