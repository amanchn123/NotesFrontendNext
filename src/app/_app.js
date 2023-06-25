'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function ChakraProviders({ children}) {
  return (
    <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}