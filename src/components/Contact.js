import React, { Component } from 'react'
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios'
import address from '../images/addressIcon.png'
import envelope from '../images/envelope.png'
import phone from '../images/phone-call.png'




// const styles = (theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   area:{width:"30ch"},
//   name: {width:"17ch"},
//   email:{width:"17ch"},


//   notchedOutline: {
//     borderWidth: '1px',
//     borderColor: 'white !important'
//   },
//   cssLabel: {
//     color : 'white'
//   },
 

// });


class Contact extends Component {
  constructor(){
    super()
    this.state = {
    fullname: '',
    email: '',
    message: '',
    sent: false
  }
  this.handleFullName = this.handleFullName.bind(this)
  this.handleEmail = this.handleEmail.bind(this)
  this.handleMessage = this.handleMessage.bind(this)
  

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
      fullname: this.state.fullname,
      email: this.state.email,
      message: this.state.message
    }
    console.log("state", this.state)

    axios.post('/api/form', data)
   // console.log("DATA", data)
    .then(res => {
      this.setState({sent: true}, this.resetForm)
      
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
            <div class="hero">
              <h1>Contact Us</h1>
            </div>
          <div className="contact-flex-container">
            <div className="left-container">

              <div className="form-address">
              <img src= {address} width="24" height="24" alt="Address"/><h2>Address</h2><br />
              <p>8381 Longbranch St.Hollis, NY 11423</p>
              </div>

              <div className="form-call">
              <img src= {phone} width="24" height="24" alt="Phone"/><h2>Call Us</h2><br />
              <p>(887) 201-1375</p>
              </div>

              <div className="form-envelop">
              <img src= {envelope} width="24" height="24" alt="envelope"/><h2>General Support</h2><br />
              
              <a href="mailto:someone@yoursite.com"><p>mjewell@outlook.com</p></a>  

              </div>

            </div>
            <form onSubmit={this.handleSubmit}>
            <p>Fill out this form, and we will get in touch with you to figure how we can serve you better. See you soon!!!.</p>
              <label for="fullName">Full Name</label>
              <input  className="fullNameField" type="text" value = {this.state.fullname} onChange = {this.handleFullName}/>
              <label for="email">Email</label>
              <input  className="emailField" type="text" value = {this.state.email} onChange = {this.handleEmail}/>
              <label for="message">Message</label>
              <textarea rows={10}  className="messageField"  type="text" value = {this.state.message} onChange = {this.handleMessage}/><br/>
              <button type="submit"  className="contact">Let's talk</button>
              
          </form>

          </div>
          

      </section>
    )
  }
}
export default Contact;

{/* export default withStyles(styles)(Contact); */}

      {/* <h1>Contact Us </h1>
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
      type="submit"
       variant="contained"
       color="primary"
       className={classes.button}
       endIcon={<SendIcon/>}
     >
       Send
     </Button>
   </form> */}
  

