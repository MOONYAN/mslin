'use strict';
var express = require('express');
var router = express.Router();

var XLSX = require('xlsx');
var workbook = XLSX.readFile('Windows Homework #1.xlsx');
var sheetNames = workbook.SheetNames;
var students = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

router.get('/', function (req, res) {
    return res.json({ students: students });
});

module.exports = router;