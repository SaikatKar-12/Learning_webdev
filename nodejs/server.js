const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end("Hello saikat,how are you?")
    }else{
        res.writeHead(404)
        res.end("use the right url")
    }
})
server.listen(3000,()=>{
    console.log("server got started")
})