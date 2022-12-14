import { ethers } from 'ethers';
import { signer as ethersSigner } from '../ethers/signer'

let unsignedMessage: string; 
let signedMessage: string; // Raw signature of the user signed message

const messageInput = document.querySelector('#message') as HTMLFormElement;
const signForm = document.querySelector('#signMessage') as HTMLFormElement;

signForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    unsignedMessage = messageInput.value;

    await signMessage();
});

async function signMessage() {
    // Encode the payload
    let payload: string = ethers.utils.defaultAbiCoder.encode(["string"], [unsignedMessage]);
    console.log(`Payload:`);
    console.debug(payload);

    // Hash the payload
    let payloadHash: string = ethers.utils.keccak256(payload);
    console.log(`Payload Hash:`);
    console.debug(payloadHash);

    // Get the user to sign the message with their private keys on the browser
    signedMessage = await ethersSigner.signMessage(ethers.utils.arrayify(payloadHash));
    console.log(`Raw Signed Message:`);
    console.debug(signedMessage);

    // Get the fully expanded signature
    let fullyExpandedSig: ethers.Signature = ethers.utils.splitSignature(signedMessage);
    console.log(`Fully Expanded Signature:`);
    console.debug(fullyExpandedSig);

    await fetch('/api/signedMessage', {
        method: 'POST',
        body: JSON.stringify({payload, payloadHash, fullyExpandedSig}),
        headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
        const message = await res.text();
        console.log(JSON.parse(message).message);
    });
};