"use client"
import { UserContextHook } from '@/contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { User } from '@/types/User';
import { v4 as uuidv4 } from 'uuid';

export const Presentation = () => {

    const [nameUserInput, setNameUserInput] = useState("");
    const userCTX = UserContextHook();


    const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === "enter") {
            if (nameUserInput.trim() !== "" && nameUserInput !== "bot") {
                userCTX?.setUser(nameUserInput.trim());
            }
        }
    }

    const loginUser = () => {
        userCTX?.setUser(nameUserInput.trim());
    }

    return (
        <div className='max-w-md mx-auto w-full'>
            <h2 className='text-xl mt-14 mb-3'>Qual é seu nome?</h2>
            <div className='flex text-lg'>
                <input
                    type="text"
                    className='h-10 bg-gray-800 rounded-md text-white border border-gray-400 w-2/3 outline-none'
                    value={nameUserInput}
                    onChange={(e) => setNameUserInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
                <button
                    className='bg-gray-800 border border-gray-400 text-white rounded-md ml-3 h-10 py-2 px-4 flex-1'
                    onClick={loginUser}
                >
                    Iniciar Chat
                </button>
            </div>
        </div>
    );
}