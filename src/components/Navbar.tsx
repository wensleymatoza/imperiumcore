import { Link } from "@tanstack/react-router"

export type Navitem = {
    name: string,
    href: string
}

export const navItems:Navitem[] = [
    {name:'Home', href:'/'},
    {name:'About', href:'/about'},
    {name:'Products', href:'/products'},
    {name:'Members', href:'/members'},
    {name:'Login', href:'/login'}
]
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="flex gap-x-5 justify-center p-2 border-2 rounded-b-2xl mx-50 ">
        {navItems.map((n) => <Link to={n.href}><h2>{n.name}</h2></Link>)}
        </div>
    </nav>
    </>
  )
}

export default Navbar


