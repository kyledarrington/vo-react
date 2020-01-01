import helper from './blog-helper.js'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../../../src/blog/components/app/app.jsx'

const PUBLIC_PATH = path.join(__dirname, '../../public')
console.log(helper)

export default function (app, router) {
    router.get("/", async function(req, res) {
        const appElement = React.createElement(App, {})
        const routerElement = React.createElement(StaticRouter, {location: req.url, context: {}}, appElement)
        const app = ReactDOMServer.renderToString(routerElement)
        const file = path.join(PUBLIC_PATH, 'blog/index.html')
        fs.readFile(file, 'utf8', (err, data) =>{
            if (err){
                console.error(err)
                return res.sendStatus(500)
            }
            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            )
        })
    });

    router.get("/post/:slug", async (req, res) => {
        const appElement = React.createElement(App, {})
        const post = await helper.fetchOnePost(req.params.slug)
        const routerElement = React.createElement(StaticRouter, {location: req.url, context: {article : post}}, appElement)
        const app = ReactDOMServer.renderToString(routerElement)
        const file = path.join(PUBLIC_PATH, 'blog/index.html')
        fs.readFile(file, 'utf8', (err, data) =>{
            if (err){
                console.error(err)
                return res.sendStatus(500)
            }
            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            )
        })
    }) 

    app.get('/posts', async (req, res) => {
        let limit = parseInt(req.query.max) || 0
        const queryResult = await helper.fetchPosts(limit)
        return res.json(queryResult)
    })

    app.get('/posts/:slug', async (req, res) => {
        const queryResult = await helper.fetchOnePost(req.params.slug)
        return res.json(queryResult)
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