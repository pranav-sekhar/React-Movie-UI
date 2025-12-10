//movie posters list display,play button
import React from "react";

function Row({title,movies}) {  //gets these props given in appjs,title is categorys name,movies is array of movie obj(in movierowjs)
    return(
        <div className="row">     {/*main container*/}
            <h2 className="title">{title}</h2>    {/*displays row title(trending,toprated)*/}
            <div className="posters">    {/*wrap movie posters in single row*/}
                {movies.map((movie,index) =>(    //loop through movies array,movie is obj,for each movie return img n button
                   <div key={index} className="container">  {/*wrap img n button together to position play button on top of img*/}
                        <img className="poster" src={movie.image} alt={movie.title} />  {/*shows movie img,movie.image for url*/}
                        <button className="play">Play</button>   {/*shows small play button on img*/}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Row;