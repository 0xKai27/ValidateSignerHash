import express from 'express';

import { 
    setPayload,
    setPayloadHash,
    setFullyExpandedSig,
    validateSignature,
    decodeMessage
} from '../server/validate';

const router: express.Router = express.Router();

/* POST client payload and extended signature to be saved on server */
router.post('/signedMessage', async (req, res) => {
    await setPayload(req.body.payload);
    await setPayloadHash(req.body.payloadHash);
    await setFullyExpandedSig(req.body.fullyExpandedSig);

    res.status(200).json({
        message: "Successfully saved on server!"
    });
});

/* GET the message validation */
router.get('/validateSignature', async (req, res) => {
    let messageSigner: string = await validateSignature();

    res.status(200).json({
        messageSigner
    });
})

/* GET the decoded message */
router.get('/decodeMessage', async (req, res) => {
    let decodedMessage: string = await decodeMessage();

    res.status(200).json({
        decodedMessage
    });
})

export { router as apiRouter };