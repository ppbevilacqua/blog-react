import React from "react";

function Post( {match} ){

    console.log(match);

    return(
        <div className="m-2">
            <h3>Titolo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );

}
/*
class Post extends Component{


    render() {

        return(
                <div >
                    <h3>Titolo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            );
    }
}
*/
export default Post;