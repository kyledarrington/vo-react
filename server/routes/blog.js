const helper = require('./blog-helper')
const path = require('path')
const fs = require('fs').promises

const DEFAULT_TWITTER_TITLE = 'Kyle D. Arrington VO Blog'
const DEFAULT_TWITTER_DESCRIPTION = 'Thoughts, feelings, and advice brought to you by Voice Over Artist Kyle D. Arrington.'
const DEFAULT_TWITTER_IMAGE = ''

module.exports = function (app, router){
    router.get('/', async (req, res) => {
        const file = path.join(__dirname, '../../public/blog/index.html')
        const data = await fs.readFile(file, 'utf-8')
        console.log(data)
        const result = data
            .replace(/\$TWITTER_TITLE/g, DEFAULT_TWITTER_TITLE)
            .replace(/\$TWITTER_DESCRIPTION/g, DEFAULT_TWITTER_DESCRIPTION)
            .replace(/\$TWITTER_IMAGE/g, DEFAULT_TWITTER_IMAGE)
        res.send(result)
    })

    router.get('/post/:slug', async (req, res) => {
        const post = await helper.fetchOnePost(req.params.slug)
        const file = path.join(__dirname, '../../public/blog/index.html')
        const data = await fs.readFile(file, 'utf8')
        const result = data
            .replace(/\$TWITTER_TITLE/g, post.title)
            .replace(/\$TWITTER_DESCRIPTION/g, post.snippet.replace(/\"/g, '&quot;'))
            .replace(/\$TWITTER_IMAGE/g, post.headerSrc)
        console.log(result)
        res.send(result)
    })

    app.get('/posts', async (req, res) => {
        let limit = parseInt(req.query.max) || 0
        const result = await helper.fetchPosts(limit)
        res.json(result)
    })

    app.get('/posts/:slug', async (req, res) => {
        const post = await helper.fetchOnePost(req.params.slug)
        res.json(post)
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