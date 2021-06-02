import React, { Component } from 'react'
import BaseContext from './MyContext';
class BaseProvider extends Component {
   state = {
      books: {
         book1: { name: 'React Book', price: 500 },
         book2: { name: 'Angular Book', price: 450 }
      }
   };
   render() {
      return (
         <BaseContext.Provider
            value={{
               books: this.state.books,
            }}
         >
         {this.props.children}
         </BaseContext.Provider>
      );
   }
}

export default BaseProvider;