import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface GroupContextData {
    name: String
    people: [GroupPersonData]
    isEditing: Boolean
}

interface GroupPersonData {
    row: Number
    name: String
}

interface GroupProviderProps {
    children: ReactNode
}

export const GroupContext = createContext({} as GroupContextData)

export function GroupProvider({ children }: GroupProviderProps){

    const [group, setGroup] = useState({} as GroupContextData)

    
    useEffect(() => {

        group.people = [{} as GroupPersonData]
        
        for(let i = 0; i < 5; i++){
            group.people.push({
                row: i + 1,
                name: 'dion' + i
            })
        }
        
        group.isEditing = false

        setGroup(group)

    }, [])


    console.log('group on group provider', group)

    return (
        <GroupContext.Provider value={
            group
        }>
            {children}
        </GroupContext.Provider>
    )    
}

export function useGroup() {
    return useContext(GroupContext)
}