import mongoose from "mongoose";
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  shares: String,
  messages: String,
});
//collection --table
export default mongoose.model("tiktokVidoes", tiktokSchema);
