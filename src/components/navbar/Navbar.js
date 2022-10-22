import style from './Navbar.module.css'
import { useEffect, useState } from "react"

function Navbar({url, nome}){    

    const[menu, setMenu] = useState()

    return (        
        <header>
            <nav>           
                <a className={style.logo} href='/'>Dinossauria</a>
                <ul className={ menu ? style.navListActive : style.navList}>
                    <li><a href='/'>Farenozóico</a></li>
                    <li><a href='/'>Proterozóico</a></li>
                    <li><a href='/'>Arqueano</a></li>
                    <li><a href='/'>Hadeano</a></li>                    
                </ul>                   
                <div className={style.mobileMenu} >
                <div className="line1" ></div>   
                <div className="line2" ></div>   
                <div className="line3" ></div>   
                </div>                
             </nav>
        </header>  
    )




}
export default Navbar