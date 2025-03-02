import 'dotenv/config'
import app from "../Backend/src/app.js"


const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})