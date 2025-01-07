import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
      <h2 className='text-9xl'>404 - Not Found</h2>
      <p className='mb-5'>Could not find requested resource</p>
      <Link href="/" className='bg-blue-700 text-white p-3'>Return Home</Link>
    </div>
  )
}