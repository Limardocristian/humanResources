require('dotenv').config();

var config = {
	db: {
		host: process.env.DB_HOST,
		user:  process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
 	},

	site: {
		url: 'http://localhost:3001',
		title: 'Codejobs',
		language: 'en',
		html: {
			engine: 'jade',
			minify: true
	 	}
 	},
    routes: {
		route: './routes/',
        controller: '../controllers/'
 	},
};
 
module.exports = config;