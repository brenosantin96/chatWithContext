import { UserContextHook } from '@/contexts/UserContext';
import React from 'react'
import { Presentation } from './Presentation';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';

export const Chat = () => {

    const userCtx = UserContextHook();

    if (!userCtx) return null;

    if (!userCtx.user) return <Presentation />

    return (
        <div className='border border-white/30 rounded-md'>
            <div className='h-96 p-3 overflow-y-scroll'>
                <ChatMessages />
            </div>
            <div className='border-t border-t-white/30 p-3'>
                <ChatInput name={userCtx.user} />
            </div>
            <div className='border-t border-t-white/30 p-3'>
            <ChatInput name={"BOT"} />
            </div>
        </div>
    )
}