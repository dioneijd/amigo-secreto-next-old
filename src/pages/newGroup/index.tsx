import LineOfList from '../../components/LineOfList'
import { GroupProvider, useGroup } from '../../contexts/group'
import style from './style.module.css'


export default function group(){

    const group = useGroup()

    console.log('Group from newGroup page', group)
    return (
            
        <div className={style.container}>
            
                <div className={style.paperPage}>
                    <header className={style.pageHeader}>
                        <h1>GRUPO:</h1>
                        <input type="text" name="" id="" />
                        <h1>DATA:</h1>
                        <input type="date" name="" id="" />
                    </header>
                    <main>
                        {/* {group.people.map(() => {
                            return <LineOfList></LineOfList>
                        })} */}
                        
                    </main>
                </div>
                
        </div>   
    )
}