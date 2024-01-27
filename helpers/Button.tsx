'use client'

import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'gray',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
            }}
        >
            {children}
        </button>
    )
}

export default Button