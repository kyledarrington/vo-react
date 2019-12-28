const mongoose = require('mongoose')
const faker = require('faker')

var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const mongoPosts = async () => {
    mongoose.connect('mongodb://localhost/vo-blog-db')
    const db = mongoose.connection;
    
    try{
        var postSchema = new mongoose.Schema({
            id :  ObjectId,
            slug: String,
            title: String,
            mdBody: String,
            snippet: String,
            postDate: Date
        })
    }
    catch(err){
        console.log(err)
    }

    const Post = await mongoose.model('Post', postSchema)

    Post.deleteMany({}, () => {})

    for (let i = 0; i < 5; i++) {
        const data = {
            slug: 'sample-post-' + (i + 1),
            title: 'Sample Post ' + (i + 1),
            mdBody: buildPostBody(),
            snippet: faker.lorem.paragraph(3),
            postDate: faker.date.recent(60)
        }
        const p = new Post(data)
        await p.save()
    }
    const posts = await Post.find()
    console.log(posts.length + ' Posts inserted')
}

module.exports = mongoPosts

function buildPostBody(){
    return faker.fake(bodyTemplate)
}

const bodyTemplate = 
`{{lorem.paragraph(5)}}


## {{lorem.sentence(2)}}


{{lorem.paragraph(5)}}


{{lorem.paragraph(5)}}


## {{lorem.sentence(2)}}


{{lorem.paragraph(5)}}


{{lorem.paragraph(5)}}


## {{lorem.sentence(2)}}


{{lorem.paragraph(5)}}


{{lorem.paragraph(5)}}


## {{lorem.sentence(2)}}


{{lorem.paragraph(5)}}


{{lorem.paragraph(5)}}
`
