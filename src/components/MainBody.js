import React from "react";

class MainBody extends React.Component{
  render(){
    return(
        <div class="quote-container">
            <p class="quote">ELEVATE YOUR <br></br>
                BRAND WITH <br></br>
                KOILO — "
            </p>

            <div class="div_container">
                <div class="div_container2">
                    <p class="firststar">&#10022;</p>
                    <p class="secondstar">&#10022;</p>
                </div>

                <div class="div_container1">
                    <p class="secondquote">Unlimited design subcriptions to your business. <br></br>
                    We believe that the power of design.
                    </p>
                    <button type="button">GET STARTED</button>
                </div>
            </div>
        </div>
    )
  }
}

export default MainBody