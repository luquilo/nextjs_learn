'use client'
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {

  useEffect(()=>{
    console.log(error)
  }, [error])

  return (
    <div>
      <h1>error</h1>
    </div>
  )
}
