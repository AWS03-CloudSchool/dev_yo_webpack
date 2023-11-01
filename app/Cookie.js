import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Cookie = () => {
    const [cookieValue, setCookieValue] = useState('');

    const handleSaveCookie = () => {
        // 쿠키 설정
        Cookies.set('myCookie', cookieValue, { expires: 7 }); // 7일 동안 유효
    }

    const handleFetchCookie = () => {
        // 쿠키 가져오기
        const fetchedValue = Cookies.get('myCookie');
        alert(`Stored 'mycookie' Value: ${fetchedValue}`);
    }

    return (
        <div>
            <input
                type="text"
                value={cookieValue}
                onChange={e => setCookieValue(e.target.value)}
                placeholder="Enter cookie value"
            />
            <button onClick={handleSaveCookie}>Save to Cookie</button>
            <button onClick={handleFetchCookie}>Fetch Cookie</button>
        </div>
    );
}

export default Cookie;
