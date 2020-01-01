import path from "path"
import fs from "fs"
import express from "express"

import morgan from 'morgan'

import cors from "cors"
import sendgrid from "@sendgrid/mail"
import rssParser from "rss-parser"
import fileUpload from 'express-fileupload'
import vhost from "vhost"

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
const router = express.Router();

const blogRouter = express.Router();
import blog from './routes/blog/blog.js'
const blogRoutes = blog(app, blogRouter)

const port = 3000;

const PUBLIC_PATH = path.join(__dirname, '../../public')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

router.get("*", function(req, res) {
    res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
});

app.post("/contact", async function(req, res) {
    var data = req.body;
    var emailBody = `
	<p>Name: ${data.name}</p> 
	<p> Subject: ${data.subject} </p> 
	<p>Email: ${data.email}</p> 
	<p>${data.body}</p>`;

    const msg = {
        to: "kyle@kyledarrington.com",
        from: "Kyle D Arrington <info@kyledarrington.com>",
        subject: "New Message: " + data.subject,
        html: emailBody
    };

    try {
        await sendgrid.send(msg);
        res.send("success");
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
    return;
});

app.get("/blog-feed", async function(req, res) {
    let parser = new rssParser();
    try {
        let posts = [];
        const feed = await parser.parseURL(
            "http://blog.kyledarrington.com/feed"
        );
        for (var entry of feed.items) {
            if (posts.length >= 6) break;
            posts.push({
                date: new Date(entry.pubDate).toLocaleDateString(),
                url: entry.link,
                title: entry.title,
                description: entry.contentSnippet
            });
        }
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

app.use("/assets", express.static(PUBLIC_PATH))
const host = process.env.NODE_ENV == 'production' ? 'kyledarrington.com' : 'localhost'
app.use(vhost('blog.' + host, blogRouter))
   .use(vhost('www.blog.' + host, blogRouter))
   .use(vhost(host, router))
   .use(vhost('www.' + host, router))
   
app.listen(port, "127.0.0.1", err => {
    if (err) {
        return console.log("error", err);
    }
    console.log(`server listening on ${port}`);
});
