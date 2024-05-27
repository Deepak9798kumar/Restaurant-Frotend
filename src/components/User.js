import { useState } from "react";

const User = ({ name }) => {
    const [count1] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>count1 : {count1}</h1>
            <h1>count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Noida</h3>
            <h3>Contact : iamitabh</h3>
        </div>
    )
}
export default User;