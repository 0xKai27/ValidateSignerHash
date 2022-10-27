import { ethers } from 'ethers';

let serverPayload: string;
let serverPayloadHash: string;
let serverFullyExpandedSig: ethers.Signature;

async function setPayload(payload: string) {
    serverPayload = payload;
}

async function setPayloadHash(payloadHash: string) {
    serverPayloadHash = payloadHash;
}

async function setFullyExpandedSig(fullyExpandedSig: ethers.Signature) {
    serverFullyExpandedSig = fullyExpandedSig;
}

async function getPayload(): Promise<string> {
    return serverPayload;
}

async function getPayloadHash(): Promise<string> {
    return serverPayloadHash;
}

async function getFullyExpandedSig(): Promise<ethers.Signature> {
    return serverFullyExpandedSig;
}

async function validateSignature() : Promise<string> {

    console.log(`Server Payload Hash:`);
    console.debug(serverPayloadHash);
    console.log(`Server Fully Expanded Signature:`);
    console.debug(serverFullyExpandedSig);

    let signingAddress: string = ethers.utils.verifyMessage(ethers.utils.arrayify(serverPayloadHash), serverFullyExpandedSig);

    return signingAddress;
}

async function decodeMessage() : Promise<string> {

    let decodedPayload: ethers.utils.Result = ethers.utils.defaultAbiCoder.decode(["string"], serverPayload);
    let decodedMessage: string = decodedPayload[0];

    return decodedMessage;

}

export {
    setPayload,
    setPayloadHash,
    setFullyExpandedSig,
    getPayload,
    getPayloadHash,
    getFullyExpandedSig,
    validateSignature,
    decodeMessage
}