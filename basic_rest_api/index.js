const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const PORT =3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

let blogList=[];

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data: blogList,
        success : true,
    });
});

app.post('/blogs',(req,res)=>{
    rand_id = Math.floor(Math.random()*1000);
    blogList.push({title:req.body.title, content: req.body.content, id: rand_id});
    return res.status(201).json({
        success:true,
    })
})

app.delete('/blogs/:id', (req, res) => {
    const blogId = req.params.id; // Extract the blog ID from the request parameters
    // Find the index of the blog with the specified ID in the blogList array
    const index = blogList.findIndex(blog => blog.id == blogId);
    if (index != -1) {
        // Remove the blog from the blogList array
        blogList.splice(index, 1);
        return res.status(200).json({
            success: true,
            message: `Blog with ID ${blogId} deleted successfully`
        });
    } else {
        return res.status(404).json({
            success: false,
            message: `Blog with ID ${blogId} not found`
        });
    }
});

app.get('/blogs/:id',(req,res)=>{
    //const blogId=req.params.id;
    const result =blogList.filter((blog)=> blog.id==req.params.id);
    return res.status(200).json({
        data: result,
        success : true,
    });
})

app.listen(PORT,()=>{
    console.log("Server started on PORT", PORT);
})