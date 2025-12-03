import React from "react";
import "./YoutubeForm.css";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

//This React hook helps to manage form data
//Submit Form Data
//Enforce validations and provide visual feedback

const schema = z.object({
    username: z.string().nonempty("Username is required"),
    email: z.string().nonempty("Email is required").email("Email format is not valid"),
    channel: z.string().nonempty("Channel is required")
})

type FormValues = {
    username: string,
    email: string,
    channel: string
};

export const YoutubeForm: React.FC = () => {

    const form = useForm<FormValues>({
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        },
        resolver: zodResolver(schema)
    });
    const  { register, control, handleSubmit, formState } = form;
    const {errors} = formState;
    //const { name, ref, onChange, onBlur } = register("username");
    //those are the atributes that contains register object
    //we are passing the object in the spread sintax way to each input
    const onSubmit = (data: FormValues) => {
        console.log('Form submitted',data)
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="modern-form">
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
                <div>
                    <p className="error">{errors.username?.message}</p>
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
                <div>
                    <p className="error">{errors.email?.message}</p>
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
                <div>
                    <p className="error">{errors.channel?.message}</p>
                </div>
                
                <button type="submit" className="form-button">Submit</button>
            </form>
        <DevTool control={control}/>
        </div>
        
    )
}