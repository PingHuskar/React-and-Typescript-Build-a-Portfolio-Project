import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20},
    { name: 'Alex', age: 29},
    { name: 'Michael', age: 24},
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState< {name: string, age: number} | undefined >()
    const handleClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }
    return <div>
        usersearch
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
        </div>
}

export default UserSearch