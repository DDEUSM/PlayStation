import search from '../assets/img_header/lupa_branca.png';
import psLogo from '../assets/img_header/ps1_logo.png';
import hamburguerBar from '../assets/img_header/menu.png';

function Header(){
    return(
        <header className="ps_header relative">

            <div className="absolute left-0 ml-2">
                <img src={psLogo} alt="" width={39}/>
            </div>
            
            <div className="absolute right-0 mr-20 cursor-pointer">
                <img src={search} alt="" width={24}/>    
            </div>

            <div className="absolute right-0 mr-2 cursor-pointer">
                <img src={hamburguerBar} alt="" width={35}/>
            </div>
        </header>
    )
}

export default Header