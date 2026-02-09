import CarouseLButton from '@/components/componentpractice.tsx/CarouseLButton'
import ConfigBasedButton from '@/components/componentpractice.tsx/ConfigBasedButton'
import Button from '@/components/componentpractice.tsx/ToggleButton'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/pages/interactive_components/buttons/buttonexample')({
  component: RouteComponent,
})

function RouteComponent() {
  const [bgColor, setBgColor] = useState(false)

  //create toggle helper
  const nightMode = () => {
    setBgColor((prev) => !prev)
  }

  return( 
  <div className={`flex min-h-screen border-2 flex-col ${bgColor? 'bg-white':'bg-slate-400'}`}>
    <button onClick={() => nightMode()} className='flex self-end p-2 m-2 border-2 bg-gray-800 text-white'>
       {bgColor? 'Day':'Night'}
    </button>
    <Button />
    <CarouseLButton/>
    <ConfigBasedButton/>
  </div>
  )
}
