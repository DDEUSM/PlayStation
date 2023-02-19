import gold from '../assets/game_status/goldTrophy.png'
import silver from '../assets/game_status/silverTrophy.png'
import bronze from '../assets/game_status/bronzeTrophy.png'

function GameStatus(){
    return (
        <div className="flex flex-col status-game mx-1 my-5 font-Inter text-white py-1 px-1">
            <div className="flex items-center gap-2">
                <label className="plataform-tag">
                    PS5
                </label>
                <h3>Gran Turismo 7</h3>
            </div>

            <div className="flex gap-2 items-center">
                <label className="text-slate-300 font-light">Progress</label>
                <div className="font-semibold">25%</div>

                <label className="text-slate-300 font-light">Earned</label>
                <div className="font-semibold">17/80</div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <img src={gold} alt="icon gold trophy" width={40.53}/>
                    <div className="font-semibold">7</div>
                </div>

                <div className="flex items-center">
                    <img src={silver} alt="icon silver trophy" width={40.53}/>
                    <div className="font-semibold">5</div>
                </div>

                <div className="flex items-center">
                    <img src={bronze} alt="icon bronze trophy" width={40.53}/>
                    <div className="font-semibold">5</div>
                </div>

            </div>
        </div>
    )
}

export default GameStatus