import React, {useState} from "react";

const AddNewCard = ({ usersData, setUsersData, allFollowers, allSetFollowers }) => {
    const [name, setName] = useState("")
    const [followers, setFollowers] = useState("")
    const [difference, setDifference] = useState("")

    function handleClick() {
        if(name === "" || isNaN(followers) || isNaN(difference)) {
            setName("");
            setFollowers("");
            setDifference("");
        } else {
            setUsersData(usersData => {
                allSetFollowers(allFollowers => {
                    const newFollowers = [...allFollowers];
                    newFollowers.push(followers);
                    return newFollowers;
                });
                const newUsersData = {...usersData};
                const newUser = { name, followers, difference }
                newUsersData.users.push(newUser);
                setName("");
                setFollowers("");
                setDifference("");
                return newUsersData;
            })
        }
    }

    return (
        <div className="add-card">
            <input type='text' value={name} placeholder="name" onChange={e => setName(e.target.value)}></input>
            <input type='text' value={followers} placeholder="followers" onChange={e => setFollowers(e.target.value)}></input>
            <input type='text' value={difference} placeholder="difference" onChange={e => setDifference(e.target.value)}></input>
            <button onClick={handleClick}>Create New Card</button>
        </div>
    )
}

export default AddNewCard
