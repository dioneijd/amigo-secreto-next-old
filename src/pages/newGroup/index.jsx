import { GroupProvider, useGroup } from '../../contexts/groupContext'
const style = require('./style.module.css')

import LineOfList from '../../components/LineOfList'


export default function group(){
    const { groupData, peopleData, handleGroupDataChanged, handleDrawSecrectFriends } = useGroup()


    function setGroupName(event){
        handleGroupDataChanged(event.target.value)
    }

    function setEventDate(event){
        handleGroupDataChanged(event.target.value)
    }

    function drawSecrectFriends(){
        handleDrawSecrectFriends()
    }

    return (
        <div className={style.container}>            
            <div className={style.paperPage}>
                <header className={style.pageHeader}>
                    <h1>GRUPO:</h1>
                    <input 
                        type="text" 
                        name="txtGrpName" 
                        id="txtGrpName" 
                        onChange={ setGroupName } 
                        value={ groupData.name }
                    />
                    <h1>DATA:</h1>
                    <input 
                        type="date" 
                        name="txtEventDate" 
                        id="txtEventDate" 
                        onChange={ setEventDate } 
                        value={ groupData.eventDate || ''}
                    />
                </header>
                <button onClick={drawSecrectFriends}>Sortear</button>
                <main>
                    {peopleData.map( p => <LineOfList key={p.seq} person={p}></LineOfList>)}
                </main>
            </div>
        </div>
    )
}