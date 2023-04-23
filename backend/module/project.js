const mongoose = require("mongoose")
const Schema = mongoose.Schema

    const projectmodel = Schema(
  {
    title : {
        type :String,
        required: true,
    },

    description : {
        type :String,
        required: true,
    },

    applies : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
   },  
 {
    timestamps: true 
 }

)

module.exports = mongoose.model("projectmodel", projectmodel, "projectmodel");