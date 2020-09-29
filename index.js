require('dotenv').config();
const app = require('./src/app');
require('./src/database');
// require('./src/passport/authSecurity');
async function main() {
	await app.listen(app.get('port'));
	console.log('server on port', app.get('port'));
}

main();
