import React, { Component } from 'react'
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios'



const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
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
 

});


class Contact extends Component {

  state = {
    fullname: '',
    email: '',
    message: '',
    sent: false
  }

  //handle inputs
  handleFullName = (event) =>{
    this.setState({fullname: event.target.value})
  }

  handleEmail = (event) =>{
    this.setState({email: event.target.value})
  }

  handleMessage = (event) =>{
    this.setState({message: event.target.value})
  }

  //handle submit

  handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      fullname: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/api/form', data)
    .then(res => {
      this.setState({sent: true}, this.resetForm())
    }).catch(()=>{
      console.log('sorry, message failed to sent')
    })
  }

  //reset form input
  resetForm = () => {
    this.setState({
      fullname: "",
      email: "",
      message: ""
    })
    setTimeout (() => {
      this.setState({sent:false})
    }, 4000)
  }







  render() {
    const { classes } = this.props;
    return (
      <section className="contact-main">
      <h1>Contact Us </h1>
     <form  onSubmit={this.handleSubmit}  className={classes.root} noValidate autoComplete="off" 
      
     >
    
     <TextField className={classes.name} id="outlined-basic" label="Full Name" variant="outlined" 
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
     value = {this.state.fullname}
     onChange = {this.handleFullName}
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
     value = {this.state.email}
     onChange = {this.handleEmail}
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
       value = {this.state.message}
     onChange = {this.handleMessage}
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
}
export default withStyles(styles)(Contact);



// function Contact() {
//   const classes = useStyles();

//   return (
//     <section className="contact-main">
//        <h1>Contact Us </h1>
//       <form  className={classes.root} noValidate autoComplete="off" 
       
//       >
     
//       <TextField className={classes.name} id="outlined-basic" label="Name" variant="outlined" 
//        InputProps={{
//         classes: {
//           root: classes.cssOutlinedInput,
//           notchedOutline: classes.notchedOutline,
//         },
//         inputMode: "numeric"
//       }}
//       InputLabelProps={{
//         classes: {
//           root: classes.cssLabel,
         
//         },
//       }}
//       /><br/>
//       <TextField className={classes.email} id="outlined-basic" label="Email" variant="outlined" 
//        InputProps={{
//         classes: {
//           root: classes.cssOutlinedInput,
//           notchedOutline: classes.notchedOutline,
//         },
//         inputMode: "numeric"
//       }}
//       InputLabelProps={{
//         classes: {
//           root: classes.cssLabel,
         
//         },
//       }}
//       /><br/>
//       <TextField
//       className={classes.area}
//         id="outlined-multiline-static"
//         label="Message"
//         multiline
//         rows={10}
//         variant="outlined"
//         InputProps={{
//           classes: {
//             root: classes.cssOutlinedInput,

//             notchedOutline: classes.notchedOutline,
//           },
//           inputMode: "numeric"
//         }}
//         InputLabelProps={{
//           classes: {
//             root: classes.cssLabel,
           
//           },
//         }}
       
//       /><br/>
//        <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         endIcon={<SendIcon/>}
//       >
//         Send
//       </Button>
//     </form>
//     </section>
//   )
// }

//export default Contact
