const CryptoJS = require('crypto-js');

export const encrypt = (passphrase, plain_text) => {
  const salt = CryptoJS.lib.WordArray.random(256);
  const iv = CryptoJS.lib.WordArray.random(16);
  const key = CryptoJS.PBKDF2(passphrase, salt, {
    hasher: CryptoJS.algo.SHA512,
    keySize: 64 / 8,
    iterations: 999
  });

  const encrypted = CryptoJS.AES.encrypt(plain_text, key, {iv: iv});

  const data = {
    ciphertext: CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
    salt: CryptoJS.enc.Hex.stringify(salt),
    iv: CryptoJS.enc.Hex.stringify(iv)
  }

  return JSON.stringify(data);
};
