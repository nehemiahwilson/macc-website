import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link';

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
    <div class="home-div">
      <p class="macc-title">
        <span style={{ color: "#EFAA6C" }}>minorities </span>
        <span style={{ color: "#8ED6EE" }}> at </span>
        <span style={{ color: "#EFAA6C" }}>college of computing</span>
      </p>
      <Link href="/posts/about-us">
        <a class="home-link">ABOUT US</a>
      </Link>
      <Link href="/posts/opportunities">
        <a class="home-link">OPPORTUNITIES</a>
      </Link>
    </div>
  )
}
