const validateSignatureButton = document.querySelector('#validateSignature') as HTMLButtonElement;
const messageSignerSpan = document.querySelector('#messageSigner') as HTMLSpanElement;
const decodeMessageButton = document.querySelector('#decodeMessage') as HTMLButtonElement;
const decodedMessageSpan = document.querySelector('#decodedMessage') as HTMLSpanElement;

validateSignatureButton.addEventListener('click', async () => {

    await fetch('/api/validateSignature', {
        method: 'GET'
    }).then(async (res) => {
        const message = await res.text();
        messageSignerSpan.innerHTML = JSON.parse(message).messageSigner;
    });

});

decodeMessageButton.addEventListener('click', async () => {

    await fetch('/api/decodeMessage', {
        method: 'GET'
    }).then(async (res) => {
        const message = await res.text();
        decodedMessageSpan.innerHTML = JSON.parse(message).decodedMessage;
    })

})