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

module.exports = function (app){
    app.get('/posts', async (req, res) => {
        let limit = parseInt(req.query.max) || 0,
            queryResult = undefined
        try{
            queryResult = await Post
                .find()
                .limit(limit)
                .sort('-postDate')
                .exec()
        }
        catch(err){
            console.error(err)
        }
        res.json(queryResult)
    })

    app.get('/posts/:slug', async (req, res) => {
        let queryResult = undefined
        try{
            queryResult = await Post
                .findOne({slug : req.params.slug})
                .select('title mdBody postDate headerSrc snippet')
                .exec()
        }
        catch(err){
            console.error(err)
        }
        res.json(queryResult)
    })
}

/*
    app.post('/posts/insert', async (req, res) =>{
        const data = req.body
        let p = {
            slug: data.slug,
            title: data.title,
            mdBody: data.body,
            snippet: data.description,
            postDate: new Date()
        }
        if (req.files.header){
            let header = req.files.header
            let fileName = getHeaderFilename(header, 'full')
            p.headerPathFull = path.join(IMAGE_PATH, data.slug, fileName)
            img.mv(p.headerPathFull)

            //get resized version
            let imgClone = await Jimp.read(img.data).clone()
            let bmp = imgClone.bitmap
            if (bmp.width > 800 || bmp.height > 300){
                imgClone.cover(800, 300)
                let resizedHeaderName = getHeaderFilename(imgClone, 800, 300)
                p.headerPathResized = path.join(IMAGE_PATH, data.slug, resizedHeaderName)
                await imgClone.writeAsync(p.headerPathResized)
            }
        }
        const postDoc = Post.create(p)
        await postDoc.save()
        res.send(p.slug)
    })
    
}

function getHeaderFilename(file, width, height){
    let fileNameSplit = img.name.split('.')
    let extension = fileNameSplit[fileNameSplit.length -1]
    let size = width == 'full' ? 'full' : width + 'x' + 'height'
    let fileName = 'header_' + size +  '.' + extension
    return fileName
}

*/