# Ethereum Signing and Validation of Keccak256 Hashed Messages

Sample implementation of Ethereum message signing utilising keccak256 hashing for better efficiency and security.

For the full guide on Medium, please refer: https://medium.com/@kaishinaw/signing-and-verifying-ethereum-hashed-messages-fefa46a746f2

As Ethers.Js will be running in the browser, we will need to compile the `.ts` files in order to `browserify` it to be served on the browser:
```
tsc
browserify build/client/ethers/signer.js build/client/signing/sign.js  build/client/signing/validate.js -o public/javascripts/bundle.js
```

To run the application, user will have to run:
```
npm install
npm start
```

This repository utilises nodemon upon `npm start` to automatically refresh the application when any changes have been made.
