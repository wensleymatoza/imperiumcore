import HomeMain from '@/components/HomeMain'
import Navbar from '@/components/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='min-h-screen bg-blue-200'>
      <div className='flex flex-col min-h-screen border-2 mx-20 bg-stone-100'>
    <Navbar />
    <HomeMain />
    </div>
    </div>
  )
}