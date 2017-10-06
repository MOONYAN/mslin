'use strict';
var express = require('express');
var router = express.Router();
var uploadConfig = require('../config/uploadConfig');

var { filePath, sheetName } = require('../config/fileConfig');
var XLSX = require('xlsx');
var workbook = XLSX.readFile(filePath);
var students = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

router.get('/', function (req, res) {
    res.render('submit', {
        students: students,
        uploadConfig: uploadConfig,
        getNumName: function (student) {
            return `num[${student[uploadConfig.TrickyAttribute]}]`;
        },
        getScoreName: function (student) {
            return `score[${student[uploadConfig.TrickyAttribute]}]`;
        }
    });
});

module.exports = router;