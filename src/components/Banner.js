//banner img,name,descrip,buttons
import React from "react";

function Banner(){
    return(
    <header>
        <div className="banner">
            <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7b350a2f-0b3e-4033-8125-34c4d67e3bbe/compose?aspectRatio=1.78&format=webp&width=1200" 
            alt="banner"/>
            <div className="ban">
                <h1 className="name">AVENGERS : END GAME</h1>
                <p className="descrip">Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team 
                    the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. After Thanos, 
                    an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to 
                    reinvigorate their trounced allies and restore balance.</p>                     
                <div className="butt">
                    <button>Play</button>
                    <button>More Info</button>
                </div>
            </div>   
        </div>     
    </header>
    )
}
export default Banner;