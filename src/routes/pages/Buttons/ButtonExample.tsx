import CarouseLButton from '@/components/ComponentPractice.tsx/CarouseLButton'
import Button from '@/components/ComponentPractice.tsx/ToggleButton'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/Buttons/ButtonExample')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Button />
    <CarouseLButton/>
  </div>
}
