import React, { useState } from 'react';
import axios from 'axios';

function UserFetcher() {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user:", error);
            setUser(null);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter User Name" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key = 'Enter') {
                        fetchUser();    
                    }
                    }
                }
            />
            <button onClick={fetchUser}>Fetch User</button>
            {user && (
                <div>
                    <h3>User Details:</h3>
                    <p>Name: {user.name}</p>
                    <p>ID: {user.id}</p>
                    <p>Birth: {user.byear}</p>
                </div>
            )}
        </div>
    );
}

export default UserFetcher;
