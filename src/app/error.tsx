"use client"

import Link from "next/link";

export default function Error() {
    return (
        <div className='flex flex-col items-center min-h-screen justify-center'>
          <h2 className='text-9xl'>500 - Internal Server Error</h2>
          <p className='mb-5'>Something went worng</p>
          <Link href="/" className='bg-blue-700 text-white p-3'>Return Home</Link>
        </div>
    )
}