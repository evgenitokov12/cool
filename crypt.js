/*!
 * Node.js script to encrypt and decrypt an arbitrary string using
 * 128-bit AES method in CFB mode.
 *
 */

// A 16-byte key is required for a 128-bit encryption
(function (){
    let data = '';
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');


    //   buff = new Buffer(base64data, 'base64');
    // let text = buff.toString('ascii');
    console.log(base64data);
//     try{
//         var crypto = require('crypto'),
//             key = new Buffer('sixteen byte key'),
//             iv = crypto.randomBytes(16),
//             orig = 'A confidential message.';
//
//         console.log('  original msg:', orig);
//
// // Start encrypt
// //console.log(' iv1:', iv.toString('hex'));
//         var cipher = crypto.createCipheriv('aes-128-cfb',
//             key.toString('utf8'), iv.toString('binary'));
//
//         var enc = cipher.update(orig, 'utf8', 'hex');
//         enc += cipher.final('hex');
//
// // Append enc message to iv to create an encrypted message
//         enc = iv.toString('hex') + enc;
//         console.log(" encrypted msg:", enc);
//
// // Start decrypt
// // Get new iv from the encrypted message; first 32 characters
//         var new_iv = new Buffer(enc.slice(0, 32), 'hex');
// //console.log(' iv2:', new_iv.toString('hex'));
//
//         var decipher = crypto.createDecipheriv('aes-128-cfb',
//             key.toString('utf8'), new_iv.toString('binary'));
//
//         console.log('encrypted data:', enc.slice(32));
//         var recv = decipher.update(enc.slice(32), 'hex', 'utf8');
//         recv += decipher.final('utf8');
//
//         console.log("  received msg:", orig);
//     }catch (e) {
//         console.log(e);
//     }
})()
module.exports={}
