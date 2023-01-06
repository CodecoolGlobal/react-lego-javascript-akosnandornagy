import React from "react";
import { useState } from "react";
import "./App.css";
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from "./components/header";
import Card from "./components/card";

function App() {
  const [usersData, setUsersData] = useState(data);
  const [followers, setFollowers] = useState(
    data.users.map((user) => user.followers)
  );
  //console.log(data);
  return (
    <div className="root">
      <Header followers={followers} />

      {usersData.users.map((user, index) => (
        <Card
          user={user}
          key={user.name}
          icon={data.icon}
          followers={followers}
          setFollowers={setFollowers}
          index={index}
        />
      ))}

      <AddNewCard
        usersData={usersData}
        setUsersData={setUsersData}
        allFollowers={followers}
        allSetFollowers={setFollowers}
      />
    </div>
  );
}

export default App;
