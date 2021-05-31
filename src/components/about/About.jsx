import React, { Component } from 'react'
class About extends Component {
  render () {
    return( 
    <div className="homeclass">    
      <h1>It is About Component</h1>
        <div class="row">
            <div class="col-md-6">
            <h3>How bootstrap grid works?</h3>
            <p>Some Bootstrap grid system rules: Rows must be placed within a .container
            (fixed-width) or .container-fluid (full-width) for proper alignment and 
            padding. ... Grid columns are created by specifying the number of 12 
            available columns you wish to span. For example, three equal columns
            would use three .col-sm-4.</p>
            <p>Some Bootstrap grid system rules: Rows must be placed within a .container
            (fixed-width) or .container-fluid (full-width) for proper alignment and 
            padding. ... Grid columns are created by specifying the number of 12 
            available columns you wish to span. For example, three equal columns
            would use three .col-sm-4.</p>
            <p>Some Bootstrap grid system rules: Rows must be placed within a .container
            (fixed-width) or .container-fluid (full-width) for proper alignment and 
            padding. ... Grid columns are created by specifying the number of 12 
            available columns you wish to span. For example, three equal columns
            would use three .col-sm-4.</p>
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
export default About;