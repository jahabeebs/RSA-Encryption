const NodeRSA = require('node-rsa');

// TODO: fill in someone's public key
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MEgCQQDlbsikU0T8gs1+zMpNlcEQs4qrVmRwKiMrOZ0U4QXdfi+yT1MpQHZljWDp
LW70GKnuZ3QMi9RhKnJDqEL3o4FpAgMBAAE=
-----END RSA PUBLIC KEY-----`;

const key = new NodeRSA(publicKey);

// TODO: add a message to encrypt
const message = "Team A";
const encrypted = key.encrypt(message, 'base64');

console.log(encrypted);
