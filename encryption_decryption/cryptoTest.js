// const co = require('co');
// const fs = require('fs');
//
// const stream = fs.createReadStream('./les_miserables.txt');
// let valjeanCount = 0;
//
// co(function*() {
//     while(true) {
//         const res = yield Promise.race([
//             new Promise(resolve => stream.once('data', resolve)),
//             new Promise(resolve => stream.once('end', resolve)),
//             new Promise((resolve, reject) => stream.once('error', reject))
//         ]);
//         if (!res) {
//             break;
//         }
//         stream.removeAllListeners('data');
//         stream.removeAllListeners('end');
//         stream.removeAllListeners('error');
//         valjeanCount += (res.toString().match(/valjean/ig) || []).length;
//     }
//     console.log('count:', valjeanCount); // count: 1120
// });

// 非对称加密

let privKey = `-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKNYFTXc9iA+U7yE
5Qh6qlB34LYA4ueDP71/GV32uaiwDlBMl/itIIP865P2RyNr/CSd9fObmxPKEK8u
gv+fb0XqMw0Qb21qdMSmHbYdiIj1sQ5f4w/DIw6luUvtH1FaqFzOLk/FL7fab3x+
BMLv9QRS+6ptREdTFzQbavTnnyfFAgMBAAECgYAo6kdl1pNQQEx5TFCSbyd6QIzp
Cg/MLfQpY0zXXJXkyzTKqGToxXT/mrrntSjclo/yHB8fhjqyGktTljL6FNWqJwCg
S49cot1q2KZ6RQj220Gwt3XvDLBoyHmRQ7j5h1TGAADHJXP6viWj1VHcG7jjfBul
2sKWBN+ObUMzYByoAQJBANjjGNdA28CynoeK99LSRLgeuocCPrgZEbsGBN3PCFYY
hpu4WVM3QjDjikp0WihzNca+EwC3/hP+hFImTo+avZECQQDAzRh2UV958ddtpekH
SwpJqhgSKZKfwcsgDzIknK3Q8HCSKv9UmqPJ+jMnP8tf4aHOn95vaRe6BOx3pvKk
nfz1AkEA1fpn/aadqGYRhcSTcEnHRqf6e0y5uEPzfEMZ9gRWQyr7UxLz/efcxAMZ
4w8cDCBug9/vO5xLbkqDHdFxXLjcIQJBAMAytNQeQoOaJxvTbP4sPFE7E0vnzZcc
5ZVMELyWxF+pkU7lNivtDKJonV3fJqqqj1cf3+pIZbK2/dQ5xWF9bZECQQCIbhjU
hBcr2iS8IoVKmxP4GcokuJkRkgNVpkgfY+cstPlY8+nFnGzXr8Pqb1+yHnUtBRJZ
4vwHUILbKZSGxQb6
-----END PRIVATE KEY-----

`;

let pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjWBU13PYgPlO8hOUIeqpQd+C2
AOLngz+9fxld9rmosA5QTJf4rSCD/OuT9kcja/wknfXzm5sTyhCvLoL/n29F6jMN
EG9tanTEph22HYiI9bEOX+MPwyMOpblL7R9RWqhczi5PxS+32m98fgTC7/UEUvuq
bURHUxc0G2r0558nxQIDAQAB
-----END PUBLIC KEY-----
`;
const crypto = require('crypto');

// 加密方法
function encrypt(data, key) {
    // 注意，第二个参数是Buffer类型
    return crypto.publicEncrypt(key, Buffer.from(data));
}

// 解密方法
function decrypt(encrypted, key) {
    // 注意，encrypted是Buffer类型
    return crypto.privateDecrypt(key, encrypted);
}

const str = '要加密的信息123123';
const crypted = encrypt(str,pubKey);
console.log('加密后',crypted);
const decrypted  = decrypt(crypted,privKey);
console.log('解密后',crypted);
console.log('解密后',typeof crypted);
console.log(decrypted.toString());























