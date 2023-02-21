import express,{Application,Request,Response} from 'express';
const app:Application = express();
const port:number = 3003;

app.get('/',(req:Request,res:Response)=>{
    //fetch
    //res->send
})
app.listen(port,()=>console.log(`express started on port ${port}`));

