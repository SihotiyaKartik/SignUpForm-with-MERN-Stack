import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  constructor(){
    super()
    this.state = {
      fullname:'',
      username:'',
      email:'',
      password:''
    }
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }
  changefullname = (event) => {
    this.setState({fullname:event.target.value})
  }
  changeusername = (event) => {
    this.setState({username:event.target.value})
  }
  changeemail = (event) => {
    this.setState({email:event.target.value})
  }
  changepassword = (event) => {
    this.setState({password:event.target.value})
  }
  onsubmit = (event) => {
    event.preventDefault()
    const registered = {
      fullname:this.state.fullname,
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:8000/users/signup',registered)
      .then((res)=>console.log(res.data))
    
    this.setState({
      fullname:'',
      username:'',
      email:'',
      password:''
    })  
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='form-div'>
            <form onSubmit={this.onsubmit}>
              <input type='text' 
                placeholder='Full Name' 
                onChange={this.changefullname} 
                value={this.state.fullname} 
                className='form-control form-group' />

              <input type='text' 
              placeholder='UserName'
              onChange={this.changeusername}
              value={this.state.username}
              className='form-control form-group' /> 

              <input type='text' 
              placeholder='Email'
              onChange={this.changeemail}
              value={this.state.email}
              className='form-control form-group' /> 

              <input type='text' 
              placeholder='Password'
              onChange={this.changepassword}
              value={this.state.password}
              className='form-control form-group' />

              <input type='submit'
              
              className='btn btn-danger btn-block'
              value='Sign up'
              />

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App

