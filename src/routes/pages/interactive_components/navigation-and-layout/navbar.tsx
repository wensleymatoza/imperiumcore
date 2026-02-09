import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/pages/interactive_components/navigation-and-layout/navbar',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/pages/interactive_components/navigation-and-layout/navbar"!
    </div>
  )
}
