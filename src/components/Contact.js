import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '20ch',
     
      
    },
  },
  area:{width:"30ch"},
  name: {width:"17ch"},
  email:{width:"17ch"},


  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },
  cssLabel: {
    color : 'white'
  },
 

}));

function Contact() {
  const classes = useStyles();

  return (
    <section className="contact-main">
       <h1>Contact Us </h1>
      <form  className={classes.root} noValidate autoComplete="off" 
       
      >
     
      <TextField className={classes.name} id="outlined-basic" label="Name" variant="outlined" 
       InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          notchedOutline: classes.notchedOutline,
        },
        inputMode: "numeric"
      }}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
         
        },
      }}
      /><br/>
      <TextField className={classes.email} id="outlined-basic" label="Email" variant="outlined" 
       InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          notchedOutline: classes.notchedOutline,
        },
        inputMode: "numeric"
      }}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
         
        },
      }}
      /><br/>
      <TextField
      className={classes.area}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={10}
        variant="outlined"
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,

            notchedOutline: classes.notchedOutline,
          },
          inputMode: "numeric"
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
           
          },
        }}
       
      /><br/>
       <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>
    </form>
    </section>
  )
}

export default Contact
