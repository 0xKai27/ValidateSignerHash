"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const validateSignatureButton = document.querySelector('#validateSignature');
const messageSignerSpan = document.querySelector('#messageSigner');
const decodeMessageButton = document.querySelector('#decodeMessage');
const decodedMessageSpan = document.querySelector('#decodedMessage');
validateSignatureButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('/api/validateSignature', {
        method: 'GET'
    }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield res.text();
        messageSignerSpan.innerHTML = JSON.parse(message).messageSigner;
    }));
}));
decodeMessageButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('/api/decodeMessage', {
        method: 'GET'
    }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield res.text();
        decodedMessageSpan.innerHTML = JSON.parse(message).decodedMessage;
    }));
}));
