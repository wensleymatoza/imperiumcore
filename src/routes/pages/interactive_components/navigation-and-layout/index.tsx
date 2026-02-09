import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/pages/interactive_components/navigation-and-layout/',
)({
  component: RouteComponent,
})

type Topics ={
  id:number, 
  title:string,
  link?:string
}

const NavigationAndLayoutTopics:Topics[] = [
  {id:1, title:'Navbar', link:'/pages/interactive_components/navigation-and-layout/navbar'},
  {id:2, title:'Sidebar/Drawer', link:'/'},
  {id:3, title:'BreadCrumbs', link:'/'},
  {id:4, title:'Tabs', link:'/'},
  {id:5, title:'Accordion', link:'/'},
  {id:6, title:'Sticky Header', link:'/'},
]
function RouteComponent() {

  return (
    <div className ='min-h-screen bg-amber-50'>
        <div className='flex flex-col'>
            {NavigationAndLayoutTopics.map((item) => (
              <Link className='flex border-2 p-2 m-2 w-fit' key={item.id} to={item.link}>
                {item.title}
              </Link>
            ))}
        </div>
    </div>
  )
}
