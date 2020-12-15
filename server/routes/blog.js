const helper = require('./blog-helper')
const path = require('path')
const fs = require('fs').promises

const DEFAULT_TWITTER_TITLE = 'Kyle D. Arrington VO Blog'
const DEFAULT_TWITTER_DESCRIPTION = 'Thoughts, feelings, and advice brought to you by Voice Over Artist Kyle D. Arrington.'
const DEFAULT_TWITTER_IMAGE = ''
const DEFAULT_PAGE_TITLE = 'Kyle D. Arrington Voiceover Blog'

module.exports = function (app, router){
    router.get('/', async (req, res) => {
        const file = path.join(__dirname, '../../public/blog/index.html')
        const data = await fs.readFile(file, 'utf-8')
        const result = data
            .replace(/\$PAGE_TITLE/g, DEFAULT_PAGE_TITLE)
            .replace(/\$TWITTER_TITLE/g, DEFAULT_TWITTER_TITLE)
            .replace(/\$TWITTER_DESCRIPTION/g, DEFAULT_TWITTER_DESCRIPTION)
            .replace(/\$TWITTER_IMAGE/g, DEFAULT_TWITTER_IMAGE)
        res.send(result)
    })

    router.get('/post/:slug', async (req, res) => {
        const post = await helper.fetchOnePost(req.params.slug)
        if (post == null){
            return res.sendStatus(404)
        }
        const file = path.join(__dirname, '../../public/blog/index.html')
        const data = await fs.readFile(file, 'utf8')
        const result = data
            .replace(/\$PAGE_TITLE/g, post.title)
            .replace(/\$TWITTER_TITLE/g, post.title)
            .replace(/\$TWITTER_DESCRIPTION/g, post.snippet.replace(/\"/g, '&quot;'))
            .replace(/\$TWITTER_IMAGE/g, post.headerSrc)
        res.send(result)
    })

    app.get('/posts', async (req, res) => {
        let limit = parseInt(req.query.max) || 0
        const result = await helper.fetchPosts(limit)
        res.json(result)
    })

    app.get('/posts/:slug', async (req, res) => {
        const post = await helper.fetchOnePost(req.params.slug)
        if (post == null){
            return res.sendStatus(404)
        }
        res.json(post)
    })
}