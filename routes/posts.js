const express = require('express')

const router = express.Router();
const Post = require('../models/post')


// Gets all the posts
router.get('/', async (req,res) => {
    try {
    const posts = await Post.find();
    res.json(posts)
    } catch (err) {
        res.json({message:err})
    }
});

// Gets a post with a certain title
router.get('/title/:title', async (req,res) => {
    try{
        console.log("hi")
        const post = await Post.find(
            {title: "randomPost"}
        )
        res.send(post)
    } catch(err){
        res.send({messages:err})
    }
})
// SUBMITS A POST
router.post('/', async (req,res) => {
    const post = new Post({
        Title: req.body.Title,
        Description: req.body.Description
    })
   
    try {
        
        const savedPost = await post.save();
    res.json(savedPost)
    } catch (err){ 
        res.json({message: err});

    }
    
});

//SPECIFIC POST
router.get('/:postID', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postID)
        res.json(post);
    } catch(err) {
        res.json({message: err});
    }
    
})

//Delete Post
router.delete('/:postId', async (req, res) => {
   try{
    const removedPost = await  Post.remove({_id: req.params.postId})
    res.json(removedPost)
   }
   catch (error){
    res.json({message:err})
   }
});

//UPDATE POST
router.patch('/:PostId', async(req,res) => {
    try{    
        
        const updatedPost = await Post.updateOne({_id: req.params.PostId},
                                                {$set: {Completed:req.body.Completed}}
        );
                                            
    res.json(updatedPost)
    } catch(err){
        res.json({message: err})
    }
})

module.exports = router;