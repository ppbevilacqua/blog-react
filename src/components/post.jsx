import React from "react";


export default function Post( {match} ){

    // match contiene l'id del post da visualizzare

    return(
        <div className="m-2">
            <h3>Titolo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );
}
