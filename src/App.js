import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Card from './components/Card/Card'
import RightArea from './components/RightArea/RightArea'
import Search from './components/SearchBar/Search';


class App extends Component {
  render() {
    return (
      <div>
        <Grid justify="center" container spacing={10} >

          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Search />
                <h1 ><a style={{ color: 'black', textDecoration: 'none' }} href="/">Flows</a>  >  <a style={{ color: 'black', textDecoration: 'none' }} href="/">Create Flows</a></h1>
                <hr style={{ width: '100%' }}></hr>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Card />
        <RightArea />


      </div>


    );
  }
}

export default App;







































