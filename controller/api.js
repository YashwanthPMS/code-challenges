
const axios = require('axios');
var list = [];
exports.userData=(req,res)=>{
    axios.get('https://api.github.com/users?access_token=81719dc087dd5195505c7c27abfe68395bb03115')
    .then( response=> {    
        if(response.status==200){
            list = response.data
            res.render('home', { posts: list })
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