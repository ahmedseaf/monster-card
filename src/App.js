import React , {Component} from 'react';

import {CardList} from './component/card-list/card-list-component';

import {SearchBox} from './component/search-box/search-box-component';

import logo from './logo.svg';
import './App.css';


class App extends Component
{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '' 
    }
  }


 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
 
  handleChange = (e) => { 
    this.setState({searchField: e.target.value});
  }

 render(){
   const {monsters, searchField} = this.state;
   const filterMonster = monsters.filter(monster => 
     monster.name.toLowerCase().includes(searchField.toLowerCase())
   );
   return (
     <div className="App">
      <header className="app-header">
      <h1>Monster Card</h1>
      <SearchBox 
        placeholder="Search Monster" 
        handleOnChange={ this.handleChange }
      />


   
       <CardList monsters={filterMonster} />
      </header>
     </div>
   )
 }

}


export default App;
