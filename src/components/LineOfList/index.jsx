//const { FaWhatsapp, FaRegCopy } = require("react-icons/fa")
import { useEffect, useState } from "react"
import { FaWhatsapp, FaRegCopy } from "react-icons/fa"
import { useGroup } from "../../contexts/groupContext"

//const styles = './style.module.css'
import styles from './style.module.css'




export default function component({person: inputPerson}){

    const { handlePersonDataChanged } = useGroup()


    const [ person, setPerson ] = useState({seq: 0, name: '', friend: ''})

    useEffect(() => {
        setPerson(inputPerson)

    }, [])

    function setPersonName(event){

        const newPersonData = person
        newPersonData.name = event.target.value

        handlePersonDataChanged(newPersonData)
    }


    return (
        <div className={styles.row}>
            <span>{person.seq}</span>
            <input 
                type="text" 
                name="txtSeq" 
                id="txtSeq" 
                value={person.name}
                onChange={setPersonName}
            />

            {person.friend != '' &&
                <div className={styles.tools}>
                    <button>
                        <FaRegCopy />
                    </button>
                    <button>
                        <FaWhatsapp />
                    </button>
                </div>
            }
        </div>
    )
}