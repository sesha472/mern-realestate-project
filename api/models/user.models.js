


import mongoose, { model } from "mongoose";
 const useSchema= new model.Schema({
                   
             username:{
                type:String,
                require:true,
                unique:true
             },
             email:{
                type:String,
                require:true,
                unique:true,
             },
             password:{
                type:String,
                require:true,
             }
            },{timestand:true});

            const User= mongoose.model("User",useSchema);
            export default User;
        

 