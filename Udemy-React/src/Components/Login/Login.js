import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {BUTTON ,Input , Checkbox} from '../Common'
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';


import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
 
  paper: {

    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:"2px darak"
  },
  item:{
  width:theme.spacing(50),
  padding:theme.spacing(1)
  },
  item1:{
   marginLeft:theme.spacing(13.5)
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  console.log("login",props)
/* 
  const {loginHandler}=this.props */
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [auth , setAuth ] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formData , setFormData ] = useState({
    email : 'anuradha@gmail.com',
    password : 'abc123'
})
const [errors ,setError] = useState({
    email : '' ,
    password : ''
})

const handleChange=(e)=>{
    setFormData({
        ...formData , 
        [e.target.name]  : e.target.value
    })
}



const handleSubmit = (e) =>{
    e.preventDefault();  
    if(formData.email == "anuradha@gmail.com" && formData.password == "abc123"){
         props.loginHandler() 
        props.history.push('/')
    }else{
        setError({
            email : 'You have entered a wrong Email' ,
            password : 'Either email or password is wrong'
        })
    }

}


  return (
    <div style={{border:"2px dark"}} >

<Container component="main" maxWidth="xs" color="black">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate style={{textAlign:"center"}}>
          <Grid container>
            <Grid item className={classes.item}>
            <Input 
            style={{paddingLeft:"2px" , width:"400px" }}
             name = 'email' 
             placeholder = "Enter Email"
             value={formData.email}                
             label = "Email"
             type = "email"
             onChange = {(e) => handleChange(e)}
             error={errors.email}
            />
        
            </Grid>
            <Grid item className={classes.item}>
            <Input 
             name = 'password' 
             placeholder = "Enter password"
             value={formData.password}                
             label = "Password"
             type = "password"
             onChange = {(e) => handleChange(e)}
             error={errors.password}
            />
        
            </Grid>
            
            <Grid item textAlign="center" justifyContent="center" >
              <Link to="/SignUp" variant="body2">
                <Typography variant="caption" className={classes.item1} >Don't have an account? Sign Up</Typography>
              </Link>
            </Grid>
          </Grid>
            
            
          {!auth ? 
            <>
          
          <BUTTON type="submit" text="Login"  color="secondary" />
            </>
            :    <BUTTON onClick={()=>setAuth(false)} text="Logout" color="primary"  ></BUTTON>
          }
          <Grid container>
           
          </Grid>
        </form>
      </div>
    
    </Container> 


    </div>
  );
}
