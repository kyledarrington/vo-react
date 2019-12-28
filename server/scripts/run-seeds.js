var glob = require( 'glob' )
  , path = require( 'path' );

run()

async function run(){
    const files = glob.sync( path.join(__dirname, '../seeds/*.js'))
    for (var file of files){
        const func = require( path.resolve( file ) );
        await func();
    }
    process.exit()
}