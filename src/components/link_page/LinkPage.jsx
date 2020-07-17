import React from 'react';
import style from './LinkPage.module.css';
import { NavLink } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    paper: {
      height: '32%',
      width: '20%',
      minWidth: '220px',
      margin: '0 40px',
    }
  }));

const LinkPage = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <NavLink to={props.url} className={style.wrapper}>
                {props.text}
            </NavLink>
        </Paper>
    );
};


export default LinkPage;