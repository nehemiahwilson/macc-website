import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar style={{ background: '#1f1f1f' }} position="static">
          <Toolbar> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Button style={{ color: '#ffffff' }}>HOME</Button>
            <Button style={{ color: '#ffffff' }}>ABOUT US</Button>
            <Button style={{ color: '#ffffff' }}>OPPORTUNITIES</Button>
          </Toolbar>
        </AppBar>
      </div>
      <h1>Welcome to the M@CC Website!</h1>
    </div>
  )
}
