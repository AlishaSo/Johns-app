import {NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'
function NavBar(){
const [menu,setMenu] = useState(false)
useEffect(()=>{
function toggle(event){
    if(event.orignalTarget.tagName !== 'BUTTON' && event.orignalTarget.tagName !=='SPAN'){
        setMenu(false)
}
document.body.addEventListener('click', toggle)
return ()=>document.body.removeEventListener('click', toggle)
}
},[])

    return (

    <div className='NavBar'>
        <div className='NavContainer'>
            <button onClick={()=>{setMenu(prevMenu =>!prevMenu)}} className='NavButton'>
                <span className='Hamburger'></span>
            </button>
            <nav className={`${menu ? 'visible': ''}`}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/search'}>Search</NavLink>
            <NavLink to={'/lyrics'}>Lyrics</NavLink>
            <NavLink to={'./explore'}>Explore</NavLink>
            <NavLink to={'/similar'}>Similar</NavLink>
            <NavLink to={'/trending'}>Trending</NavLink> 
            <NavLink to={'/about'}>About</NavLink>   
            </nav>
        </div>
    </div>    
    )
}
export default NavBar