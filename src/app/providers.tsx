'use client'
import {NextUIProvider} from '@nextui-org/react'
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import {useRouter} from 'next/navigation'
import { SWRConfig } from 'swr'

const API_BASE_URL = 'https://starwars-api-production-979e.up.railway.app';

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const fetcher = (resource: string, init?: RequestInit) => fetch(`${API_BASE_URL}${resource}`, init).then(res => res.json());
  return (
    <NextUIProvider navigate={router.push}>
      <SWRConfig 
        value={{
          refreshInterval: 3000,
          fetcher
        }}
      >
        {children}
      </SWRConfig>
    </NextUIProvider>
  )
}