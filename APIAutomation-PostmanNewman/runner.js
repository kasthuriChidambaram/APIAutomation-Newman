const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/BookingCollection.postman_collection.json'),
    environment: require('./environment/BookingEnvironment.postman_environment.json'),
    reporters: 'htmlextra',
    reporter: {
            html: {
                export: './htmlResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
                template: './customTemplate.hbs' // optional, this will be picked up relative to the directory that Newman runs in.
            }
        }
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});