'use strict';
var express = require('express');
var router = express.Router();

var { filePath, sheetName } = require('../config/fileConfig');
var XLSX = require('xlsx');
var workbook = XLSX.readFile(filePath);
var students = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

router.get('/', function (req, res) {
    return res.json({ students: students });
});

module.exports = router;