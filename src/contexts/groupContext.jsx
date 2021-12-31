import { createContext, useContext, useState, useEffect } from "react"
import { apiSecretFriend } from '../services/api100'


export const GroupContext = createContext({})

export function GroupProvider({ children }){
    const [groupData, setGroupData] = useState({name: ''})
    const [peopleData, setPeopleData] = useState([])

    useEffect(() => {
        let initialGroup = {people: []}

        for (let i = 1; i <= 10; i++) {
            const person = {
                "seq": i,
                "name": '',
                "friend": ''
            }
            initialGroup.people.push(person)
        }

        setPeopleData(initialGroup.people)

        setGroupData({name: 'dionei grp'})

    }, [])

    useEffect(() => {
        console.log('CONTEXT GROUP DATA: ',  groupData)
    }, [groupData])

    useEffect(() => {
        console.log('CONTEXT PEOPLE DATA: ',  peopleData)
    }, [peopleData])


    function handlePersonDataChanged(personData){
        if ( !personData ) return

        const people = peopleData.map( p => p.seq == personData.seq ? personData : p )
        setPeopleData(people)
    }

    function handleGroupDataChanged(newGroupData){
        if (!newGroupData) return
        setGroupData(newGroupData)
    }

    async function handleDrawSecrectFriends(){
        const newGroup = {...groupData, "people": [] }

        peopleData.forEach( p => {
            if (!p.name) return
            newGroup.people.push({"name": p.name})
        })

        console.log('NEW GROUP: ', newGroup)

        const  data = await apiSecretFriend.post('/groups', newGroup)

        console.log('POST RETURN', data)

    }

    return (
        <GroupContext.Provider value={{
            groupData,
            peopleData,            
            handleGroupDataChanged,
            handlePersonDataChanged,
            handleDrawSecrectFriends
        }}>
            {children}
        </GroupContext.Provider>
    )    
}

export function useGroup(){
  return useContext(GroupContext)  
}