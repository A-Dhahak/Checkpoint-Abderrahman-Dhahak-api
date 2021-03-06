import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export default function UserList() {
    const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => { setlistOfUSer(res.data) });
  }, []);

    return (
        <div className="listof">
           {listOfUSer.map((user) => (
           <div>
               {user.username} 
           </div>))}
        </div>
    )
}
    

