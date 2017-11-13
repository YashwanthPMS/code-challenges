
const axios = require('axios');

exports.userData=(req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( response=> {    
        if(response.status==200){
            res.render('home', { posts: response.data })
        }
        else{
            res.render('home', { posts: "" })
        }
        
    })
    .catch( error =>{
        res.render('home', { posts: "" })
      res.status(404).send({status:"unable to retrieve the data"})
    });   
}