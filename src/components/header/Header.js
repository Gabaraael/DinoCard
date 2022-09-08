import styles from './Header.module.css'

function Header({url}){

    return (
        <div>                
            <img className={styles.header}src={url} alt='header'></img>      
        </div>
    )

}
export default Header