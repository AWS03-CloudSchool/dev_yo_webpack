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
                placeholder="Enter User ID" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={fetchUser}>Fetch User</button>
            {user && (
                <div>
                    <h3>User Details:</h3>
                    {/* 예시로 ID와 Name을 출력하였으나, 실제 UserModel 구조에 따라 조정이 필요합니다. */}
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Birth: {user.byear}</p>
                </div>
            )}
        </div>
    );
}

export default UserFetcher;
