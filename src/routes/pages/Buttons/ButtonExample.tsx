import CarouseLButton from '@/components/ComponentPractice.tsx/CarouseLButton'
import ConfigBasedButton from '@/components/ComponentPractice.tsx/ConfigBasedButton'
import Button from '@/components/ComponentPractice.tsx/ToggleButton'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/Buttons/ButtonExample')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Button />
    <CarouseLButton/>
    <ConfigBasedButton/>
  </div>
}
