import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex min-h-screen bg-amber-600 flex-col *:w-fit'>
    <a className='flex p-2 m-2 bg-[#F0F382] h-fit rounded-2xl' href='/pages/interactive_components/buttons/buttonexample'>
          Button Components
    </a>
    <a className='flex p-2 m-2 bg-[#F0F382] h-fit rounded-2xl' href='/pages/interactive_components/navigation-and-layout/'>
          Navigation and Layout
    </a> 
  </div>
}
