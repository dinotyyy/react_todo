import React, {Component} from 'react';

class Body extends React.Component {
    render(){
      return(
         
        <div className="container">
        
        <form>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"/>
            </div>
        </div>
        <fieldset class="form-group">
            <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Status</legend>
            <div class="col-sm-10">
                <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label class="form-check-label" for="gridRadios1">
                    Jomblo
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label class="form-check-label" for="gridRadios2">
                    Taken
                </label>
                </div>
            </div>
            </div>
        </fieldset>
        <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Birth</label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="inputPassword3"/>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
        </form>
        
    </div>
    
     
        
      )
    }
}

 export default Body