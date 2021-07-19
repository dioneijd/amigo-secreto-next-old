import { FaWhatsapp, FaRegCopy } from "react-icons/fa"
import styles from './style.module.css'

export default function component(){

    return (
        <div className={styles.row}>
            <span>1.</span>
            <input type="text" name="" id="" />

            <div className={styles.tools}>
                <button>
                    <FaRegCopy />
                </button>
                <button>
                    <FaWhatsapp />                    
                </button>
            </div>
        </div>
    )
}