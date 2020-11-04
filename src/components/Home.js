import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


function Home() {
 return (
  <section className="home">
   {/* <h1>Home page</h1> */}
   <div className="Home-img">
       <div>
           <h2>It's Our</h2>
           <h2>Responsability to make</h2>
           <h2>you Beautifull</h2>
       </div>

    <Box mt={10}>
    <Button variant="contained" color="primary" disableElevation 
    style={{
       
        backgroundColor: "black",
        
    }}
    href="/Services"
    >
          Learn more
    </Button>

    </Box>
    
       
   </div>
  
   
  
  </section>
 )
}

export default Home
