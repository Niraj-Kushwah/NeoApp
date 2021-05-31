import React, { Component } from 'react'
class Contact extends Component {
  render () {
    return( 
        <div className="homeclass">    
        <h1>It is Contact Component</h1>
          <div class="row">
              <div class="col-md-6">
                <h3>How to Contact?</h3>
                <p>Address:- 27,test area behind xyz restaurent near shree ram colony indore</p>
                <p>Email:- neeraj.kushwah@neosoftmail.com</p>
                <p>Phone:- 8888888888</p>
              </div>
              <div class="col-md-6">
              <h3>Create Your Free Account From Here</h3>
                  <form>
                      <div class="row">
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="First name"/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Last name"/>
                          </div>
                          <div class="form-group">
                              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                          </div>
                          <div class="form-group">
                              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                          </div>
                          <div class="form-group col-md-6">
                                  <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                          </div>
                          <div class="form-group col-md-6">
                              <input type="text" class="form-control" id="inputState" placeholder="State"/>
                          </div>
                          <div class="form-group col-md-6">
                              <input type="text" class="form-control" id="inputZip" placeholder="Zip Code"/>
                          </div>
                      </div>
                      <div class="form-control">
                          <button type="submit" class="btn btn-primary">Create Account</button>
                      </div>
                  </form>
              </div>
              
          </div>
      </div>
    );
  }
}
export default Contact;