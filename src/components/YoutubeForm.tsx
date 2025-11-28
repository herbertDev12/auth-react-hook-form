import React from "react";
import "./YoutubeForm.css";
import { useForm } from "react-hook-form";

//This React hook helps to manage form data
//Submit Form Data
//Enforce validations and provide visual feedback

export const YoutubeForm: React.FC = () => {

    const form = useForm();
    const  { register } = form;
    //const { name, ref, onChange, onBlur } = register("username");
    //those are the atributes that contains register object
    return (
        <div className="form-container">
            <form className="modern-form">
                <h2 className="form-title">Create Account</h2>
                
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        {...register("username")}    
                        className="form-input"
                        placeholder="Enter your username"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register("email")}   
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="channel" className="form-label">Channel</label>
                    <input 
                        type="text" 
                        id="channel" 
                        {...register("channel")}  
                        className="form-input"
                        placeholder="Enter your channel name"
                    />
                </div>
                
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}