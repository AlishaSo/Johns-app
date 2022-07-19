import {NavLink} from 'react-router-dom'
function NavBar(){

    return (
    <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/search'}>Search</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/lyrics'}>Lyrics</NavLink>
        <NavLink to={'./explore'}>Explore</NavLink>
    </div>    
    )
}
export default NavBar