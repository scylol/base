import React from 'react';

export default function LoginPage() {
    const text  = 'Base';
    return(
        <div className="login">
            <h1>{text}</h1>
            <p>Find players quick and easy!</p>
            <a href={'/api/auth/google'}>Login with Google</a>
        </div>
    );
}