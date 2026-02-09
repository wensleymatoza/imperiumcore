import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex'>
    <a className='flex p-2 m-2 bg-[#F0F382]' href='/pages/buttons/'>
          Button Components
    </a>
  </div>
}
