const mongoose = require('mongoose')
const path = require('path')
require("dotenv").config();

const IMAGE_PATH = path.join(__dirname, '../../public/blog/images/')
const MONGO_USER = process.env.MONGO_USER
const MONGO_PW = process.env.MONGO_PW
const MONGO_URL = process.env.MONGO_URL


var ObjectId = mongoose.Schema.Types.ObjectId;
var postSchema = new mongoose.Schema({
    id :  ObjectId,
    slug: String,
    title: String,
    mdBody: String,
    snippet: String,
    postDate: Date,
    headerSrc: String
},
{
    collection: 'Post'
})
const Post = mongoose.model('Post', postSchema)
const url = MONGO_URL

if (mongoose.connection.readyState == 0){
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(url, {user: MONGO_USER, pass: MONGO_PW, dbName: 'vo-blog-db'})
    
}

module.exports = {
    fetchPosts : async (count) =>{
        let queryResult = []
        try{
            queryResult = await Post
                .find({public: true})
                .limit(count)
                .sort('-postDate')
                .exec()
        }
        catch(err){
            console.error(err)
        }
        return queryResult
    },
    fetchOnePost : async (slug) =>{
        console.log('called')
        let queryResult = []
        try{
            queryResult = await Post
                .findOne({slug : slug, public: true})
                .select('title mdBody postDate headerSrc snippet slug')
                .exec()
        }
        catch(err){
            console.error(err)
        }
        console.log('done')
        return queryResult
    }
}