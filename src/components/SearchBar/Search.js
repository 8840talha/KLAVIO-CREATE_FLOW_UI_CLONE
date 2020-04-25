import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavItems from '../NavItems/NavItems';
import './Search.css'
const Search = () => {
    const useStyles = makeStyles({
        paper:{
            padding: "10px",
            backgroundColor: "#696969"
        }
        ,h1:{ 
            display: "inline-block",
            verticalAlign: "middle",
             color: "white" 
            }
            ,form:{
                display: "inline-block",
                 verticalAlign: "middle",
                  marginLeft: "10px",
                color: "white"
            }
      });
      const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.paper}>
            <h1 className={classes.h1}>Klavio</h1>
            <form className={classes.form}>
                <TextField label="Search..." variant="outlined" />
            </form>
            <NavItems />
        </Paper>
    )
}

export default Search;