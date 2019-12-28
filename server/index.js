require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendgrid = require("@sendgrid/mail");
const rssParser = require("rss-parser");

const app = express();
const path = require("path");
const blog = require('./routes/blog')(app)

const port = 3000;
const router = express.Router();
const blogRouter = express.Router();

const port = 3000;

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

blogRouter.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/blog/index.html'));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
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
                title: entry.title
            });
        }
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

app.use("/assets", express.static(path.join(__dirname, '../public')))
app.use(vhost('localhost', router))
   .use(vhost('blog.localhost', blogRouter))
app.listen(port, "127.0.0.1", err => {
    if (err) {
        return console.log("error", err);
    }
    console.log(`server listening on ${port}`);
});
