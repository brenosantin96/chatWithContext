import { useChat } from '@/contexts/ChatContext'
import { UserContextHook } from '@/contexts/UserContext';
import React from 'react'

export const ChatMessages = () => {

    const chatCtx = useChat();
    const userCTX = UserContextHook();

    return (
        <div className='flex flex-col gap-1'>
            {chatCtx?.chat.map((item) => (
                <div key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm
                    ${item.user === userCTX?.user ? "self-end bg-white/10 text-right" :
                            "self-start bg-white/5 text-left"}
                    
                    `}
                >

                    <div className='font-bold'>{item.user}</div>
                    <p>{item.text}</p>

                </div>
            ))}
        </div>
    )
}
