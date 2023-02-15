import React from "react";
function Form(){
let user = "Rob Bob";
    return(
        <div>
            <h2>HTML Forms</h2>
        <p>user: {user}</p>
            <form>
                <label >First name:</label><br />
                <input type="text" id="fname" name="fname"></input><br />
                <label>Last name:</label><br />
                <input type="text" id="lname" name="lname"></input><br /><br />
                <input type="submit"></input>
            </form> 
        </div>
    )
}
export default Form;