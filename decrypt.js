const NodeRSA = require('node-rsa');

// TODO: fill in the private key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA(privateKey);

// TODO: fill in the encrypted message
const message = "Q25Yf0npc4lpXoJKtM463CM+tP5D//uoQ9LkQDvx/a2FVWaZVmDKotk5M8RUpuUtg3zLL/HBi92/6gieTPvKoR47sd84/qKhy3P4sQ+PbyUFkYxUeDBK9ZxX924Zz8hj+XuWq96OlCKCWo0Jye6OnNKoAD3drgJtBRs28gRuFSjVUV8CT6g69hSgDQbbd2lyc0KEvtcHpU0iYGBeGVvEXdCC8RsUuVqVQyc+yBJZOBEK1GgPpP8vghHhIR9fhq9fU9mWkXfZ9vVY1fzH7ji7UwF9pBL8foZcMwpl9FpAciaDiPjxLvvY6grBhcCxTBy/WVw0gzJDKCwW6oICRimjzJtfvsM3d6IchwnAW+sPGUVrWVxoMJf/9CpvfLn490valZ8fQRw6ffIIpVmjw/GFGypQLcRUbMIGdTROZZkI42LgK54d2/npxiKbOVdPc1/PvawWC03rQVuxDV8Nia3F17K3aa9uBVQ+JmTAauILA2WRW9NLr2D0tOJwmCAPP6BF0OI9OvSKnEAeCC7Fs+u0CjvxLn3+GwxmtdryE5TRSEa6WBV53A+gP3kxaG7+QLVQ46rx6uzUh8NxaT1nP3fejw==";

const decrypted = key.decrypt(message, 'utf8');

console.log(decrypted);
