"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/get', (req, res) => {
    res.send('"teste": "Teste GET"');
});
router.post('/post', (req, res) => {
    console.log(req.body);
    res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
router.put('/put', (req, res) => {
    res.send('"teste": "Teste ´PUT"');
});
router.delete('/delete', (req, res) => {
    res.send('"teste": "Teste DELETE"');
});
