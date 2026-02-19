import Navbar from '@/components/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='flex min-h-screen bg-blue-200 justify-center'>
      <div className='flex flex-col min-w-svh border-2 bg-stone-100'>
    <Navbar />
      <h1>Studying Java</h1>
    </div>
    </div>
  )
}