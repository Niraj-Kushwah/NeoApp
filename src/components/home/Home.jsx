import React, { Component } from 'react'
import $ from 'jquery'; 
import BaseContext from '../../context/MyContext';
var homeimg='first.jpg';
class Home extends Component {
  render () {
    return( 
    <>	
      <div className="homeclass">
        <h1>It is Home Component</h1>
        <img src={homeimg} alt="..." />
      </div>
    <div>  
        <BaseContext.Consumer>
	      {context => (
	         <div>
	            <h4>Use Context to Showing Books Details</h4>
	            {Object.keys(context.books).map(bookID => (
	               <p> Book Name is {context.books[bookID].name} And Price {context.books[bookID].price} </p>
	            ))}
	         </div>
	      )}
   		</BaseContext.Consumer>
   </div>
   </>
    );
  }
}
$( document ).ready(function() {
    $('p').text("Changed P Tag Value From Neeraj Kushwah to Other One Using Jquery")
});
export default Home;