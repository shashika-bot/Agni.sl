const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LZ5iEKCI#42yqQY7VbVE1VBINRG_2M-SzhK0wKEOgujQJF5Qd6Fc", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:RhVVXvLrIXHTobpqGsuKIKbrEOAtmlVQ@nozomi.proxy.rlwy.net:39022",  //ඔයාගෙ mongoDb url එක
};
 
