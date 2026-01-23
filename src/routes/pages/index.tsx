import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex border-2 min-h-svh p-2 bg-gray-700 w-screen flex-col'>
    <span className='text-2xl text-[#F0F0F0] mb-2'><h1>Components</h1></span>
    <div className='flex bg-slate-500 flex-1 rounded-2xl p-2 '>
    <a className='flex border-2 p-2 m-2 h-fit w-fit bg-gray-500 rounded-2xl' href='/pages/ButtonExample'>
      First Component
    </a>
    </div>
  </div>
}