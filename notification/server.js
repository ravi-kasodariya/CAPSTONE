import "dotenv/config";
import app from './src/app.js';

app.listen(4000, ()=>{
    console.log("Notification Service is running on port 4000");
});