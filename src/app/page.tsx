"use client"
import { Chat } from '@/components/Chat';
import { Presentation } from '@/components/Presentation'
import { UserContextHook, UserContextProvider } from '@/contexts/UserContext';
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Page = () => {


  return (
    <UserContextProvider>
      <div className='container mx-auto max-w-lg'>
        <h2 className='text-center text-3xl my-3 text-white'>Chat Simples</h2>
        <Chat />
      </div>
    </UserContextProvider>
  )
}

export default Page