import style from './Navbar.module.css'

function Navbar({url}){    

    return (        
        <header>
            <nav>           
                <a className={style.logo} href='/'>Dinossauria</a>
                <ul className={style.navList}>
                    <li><a href='/'>Farenozóico</a></li>
                    <li><a href='/'>Proterozóico</a></li>
                    <li><a href='/'>Arqueano</a></li>
                    <li><a href='/'>Hadeano</a></li>                    
                </ul>
                <div className={style.mobileMenu} onClick={meuevento}>
                <div class="line1" ></div>   
                <div class="line2" ></div>   
                <div class="line3" ></div>   
                </div>
             </nav>
        </header>  
    )

    function meuevento(){
        console.log("meow")
    }
}
export default Navbar