import React from "react";
import "../styles/Login.css";
export const Login = () => {
    return (
        <div className="loginform">
            <form>
                <h1> Login </h1>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>

        </div>
    );
};

            
            
    
  

        
    
}