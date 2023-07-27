'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function layout({children}) {
    const pathname=usePathname()
  return (
    <div>
      <h1>layout</h1>
      {pathname}
      {children}
    </div>
  )
}