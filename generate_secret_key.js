const speakeasy = require("speakeasy");

function generate_secreate_key() {
  // Generate a secret key
  const secretKey = speakeasy.generateSecret({ length: 20 });

  return secretKey;
}

module.exports = generate_secreate_key;