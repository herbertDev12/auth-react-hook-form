import React from "react";
import "./YoutubeForm.css";

export const YoutubeForm: React.FC = () => {
    return (
        <div className="form-container">
            <form className="modern-form">
                <h2 className="form-title">Create Account</h2>
                
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        className="form-input"
                        placeholder="Enter your username"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="channel" className="form-label">Channel</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        className="form-input"
                        placeholder="Enter your channel name"
                    />
                </div>
                
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}