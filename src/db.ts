import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://rishisinghrajputr2:rishi1234@cluster0.eehgqlm.mongodb.net/?retryWrites=true&w=majority"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
