import Button from '@/components/ComponentPractice.tsx/Button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/ButtonExample')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Button />
  </div>
}
