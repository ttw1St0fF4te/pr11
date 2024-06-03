import React from "react";

class Header extends React.Component{
  render(){
    return(
        <section>
            <p class="koilo">KOILO.</p>
            <section class="container">
                <a href="javascript:alert('Вы и так на главной странице')">HOME</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">SERVICES</a>
                <a href="https://vk.com" target="_blank">OUR CLIENTS</a>
                <a href="javascript:alert('Сделал Новиков Е.Е. П50-5-22')">ABOUT US</a>
            </section>
            <form> 
                <input type="text" name="text" class="search-box" placeholder ="Search"></input>
            </form>
            <p class="bell">🕭</p>
        </section>
    )
  }
}

export default Header