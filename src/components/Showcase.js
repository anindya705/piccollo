import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Fab } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const style = {
  marginLeft: 10,
  marginRight:10,
  textTransform: 'lowercase',

};


const Showcase = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>level up your game. anytime. anywhere.</h1>
        <div className="size">
          <h3>
          get personalized, professional coaching from the world's best for just $25. without ever having to leave your room.
          </h3>
        </div>
        <div className="redirect">
          <Fab href={"https://docs.google.com/forms/d/e/1FAIpQLSdoh_pbdV9Qbz8axv5RwGA6296HOQupZtHW8ZfZPvG_VLqyBw/viewform"} style={style} variant="extended">
            LevelUp™ 🚀
          </Fab>
          <Fab onClick={handleScroll} style={style} variant="extended">
            wait, how? 🤔 
          </Fab>
        </div>
      </div>
    </section>
  )
}

export default Showcase
