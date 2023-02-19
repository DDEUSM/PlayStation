import granTurismo7 from '../assets/slider_games/Gran-Turismo-7.jpg'

import theLastOfUs from '../assets/slider_games/the-Last-Us.jpg'

function Slider(){
    return (
        <div className="flex flex-wrap">
            <div className="flex w-screen gap-1 mx-1 mb-1">
                <div className="option-favorite font-Inter">
                    Favorites
                </div>
                <div className="option-media font-Inter">
                    Media
                </div>
            </div>
            <div className="container-slider mx-1 gap-1">
                <div className="container-game-selected">
                    <img className="img-game" src={granTurismo7} alt="" />
                </div>
                <div className="container-game">
                    <img className="img-game" src={theLastOfUs} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Slider;