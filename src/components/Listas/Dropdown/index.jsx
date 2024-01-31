import styles from "./dropdown.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";


const Dropdown = ({ selected, setSelected, categorias }) => {
    const [isActive, setIsActive] = useState(false);

    const clear = () => {
        setSelected(null);
    }


    return (

        <main className={styles.dropdown}>



            <div className={styles.dropdown__button} onClick={() => setIsActive(!isActive)}>
                <Image src="/imagens/Filter.png" width={15} height={15} />  {selected ? selected.name : "Select a category"}
                {selected && 
                <Image src="/imagens/marca-x.png" width={15} height={15} className={styles.dropdown__clear} onClick={clear}  />
                }
                
            </div>
            {isActive && categorias && categorias.length > 0 &&
                <div className={styles.dropdown__content}>
                    {categorias.map((option) => (
                        <div className={styles.dropdown__item} key={option.id} onClick={(e) => {
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

export default Dropdown;