import React, { Component } from 'react'
import $ from 'jquery'; 
var homeimg='first.jpg';
class Home extends Component {
  render () {
    return( 
      <div className="homeclass">
        <h1>It is Home Component</h1>
        <img src={homeimg} alt="..." />
      </div>
    );
  }
}
$( document ).ready(function() {
    $('p').text("Changed P Tag Value From Neeraj Kushwah to Other One Using Jquery")
});
export default Home;