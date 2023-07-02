// import { createHash } from "crypto"
import { SHA256 } from 'crypto-js';

function hashPassword(password){
    const { createHmac } = require('crypto');

    const secret = password;
    const hash = createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
    console.log(hash);


return(hash)

}




export default{hashPassword}