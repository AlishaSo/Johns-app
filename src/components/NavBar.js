import {NavLink} from 'react-router-dom'
function NavBar(){

    return (
    <div className='NavBar'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/search'}>Search</NavLink>
        <NavLink to={'/lyrics'}>Lyrics</NavLink>
        <NavLink to={'./explore'}>Explore</NavLink>
        <NavLink to={'/similar'}>Similar</NavLink>
        <NavLink to={'/trending'}>Trending</NavLink> 
        <NavLink to={'/about'}>About</NavLink>
    </div>    
    )
}
export default NavBar