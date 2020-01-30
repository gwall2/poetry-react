import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems:[]
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/poems/').then((res) => {
      console.log(res)
      this.setState({poems:res.data})
    })
  }

  render() {
    return (
      <div className="App">
        {
          _.map(this.state.poems, (poem)=>{
            return (
              <div>
                <h1>
                  {poem.title}
                </h1>
                {poem.content}
              </div>
            )
          })
        } 
      </div>
    );  
  }
  
}

export default App;
