import React, { Component } from 'react' ;
import fire , {auth} from './config/fire';

export default class Auth extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:"",
            name:""
        }
        
        

        
       
    }
   
    detail =(e)=>{
        e.preventDefault();
        console.log("inside detail");
        const email = this.y1.value;
        const password = this.y2.value
        console.log("email is"+ this.y1.value);
        console.log("name is "+ this.y2.value);
        fire.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
    <h1>yes,sign In successful</h1>
    console.log("sign in successful");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

    }
   
    
    render() {
        return (
            <div><form >
                <input type="email" name="email"
                 placeholder="please enter your email"
                ref = {(x1)=>this.y1=x1}
                  required>
</input> 
<input type="password" name="name" placeholder="yourname"   
ref = {(x2)=>{
    this.y2=x2;
   

}}
required >

</input>
<button type="submit" name="submit" id="submit"
onClick={this.detail}>
    give us your details
</button>
  </form>   </div>
        )
    }
}
