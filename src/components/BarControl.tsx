import plusBtn from '../assets/bottom-controller/more.png'
import homeBtn from '../assets/bottom-controller/home.png'
import bellBtn from '../assets/bottom-controller/bell.png'
import psStoreBtn from '../assets/bottom-controller/psStore.png'

function BarControl(){
    return(
        <div className="bar-control px-7">
            <div className="cursor-pointer">
                <img src={homeBtn} alt="home icon" width={30}/>
            </div>
            <div className="cursor-pointer">
                <img src={bellBtn} alt="bell icon" width={30}/>
            </div>
            <div className="cursor-pointer">
                <img src={plusBtn} alt="plus icon" width={30}/>
            </div>
            <div className="cursor-pointer">
                <img src={psStoreBtn} alt="psStore icon" width={30}/>
            </div>
        </div>
    )
}

export default BarControl;