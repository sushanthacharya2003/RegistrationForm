const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const FormDataModel = require('./FormData');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
