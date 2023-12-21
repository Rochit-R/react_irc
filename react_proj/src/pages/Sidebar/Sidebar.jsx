import { NavLink } from 'react-router-dom';
import { LINKS } from '../../Data';
import classes from './style.module.css'
import {IoClose as  CloseIcon} from 'react-icons/io5'
const Sidebar = ({ isOpen,closeSidebar }) => {
  return (
    <div className={`${classes.sidebar}
     ${isOpen && classes.open}`}>
        <span className={classes.closeIcon} onClick={closeSidebar}>
            <CloseIcon size={30} />
        </span>
        <div className={classes.links}>
        {
                    LINKS.map((link)=>(

                        <NavLink key={link.name} to={link.to} className={({ isActive}) =>
                        (isActive ? classes.activeLink : "")} onClick={closeSidebar}>{link.name}</NavLink>
                    ))
                    }
        </div>
        <div className={classes.auth}>
                <NavLink to='/Login' className={classes.login} onClick={closeSidebar}>Login</NavLink>
    
                <NavLink to='/SignUp' className={({ isActive}) =>
                        `${classes.SignUp} ${isActive ? classes.activeLink : ""}`}>SignUp</NavLink>
            </div>
    </div>
  )
}

export default Sidebar;