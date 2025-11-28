import React from "react";
import "./YoutubeForm.css";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"

//This React hook helps to manage form data
//Submit Form Data
//Enforce validations and provide visual feedback

type FormValues = {
    username: string,
    email: string,
    channel: string
};

export const YoutubeForm: React.FC = () => {

    const form = useForm<FormValues>();
    const  { register, control, handleSubmit } = form;
    //const { name, ref, onChange, onBlur } = register("username");
    //those are the atributes that contains register object
    //we are passing the object in the spread sintax way to each input
    const onSubmit = (data: FormValues) => {
        console.log('Form submitted',data)
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="modern-form">
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
        <DevTool control={control}/>
        </div>
        
    )
}