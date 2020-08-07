  const mysql = require("mysql");
  const connection = require('../models/db');
  const sha1 = require('sha1');

  module.exports = {

    getAllRecord: function () {
      return new Promise((resolve) => {
        const sql = 'select * from account';
        connection.query(sql, (error, data) => {
          
          resolve((error) ? [] : (data == null) ? [] : data);
        })
      })
    },

    getRecordById: function (id) {
      return new Promise((resolve) => {
        const sql = 'select * from account where account_id = ?';
        connection.query(sql,[id], (error, data) => {
          resolve((error) ? [] : (data == null) ? [] : data);
        })
      })
    },

    findByEmail: function (email) {
      return new Promise((resolve) => {
        const sql = 'select * from account where email = ?';
        connection.query(sql, [email], (error, data) => {
          resolve((error) ? false : data)
        })
      })
    },


    insert_data: function (data) {
      data['password'] = sha1(data['password']);
      return new Promise((resolve) => {
        const sql = `INSERT INTO account(firstname, lastname, email, password,verificationCode, is_verify) VALUES (?,?,?,?,?,?)`;
        connection.query(sql, [data.firstname, data.lastname, data.email, data.password, data.verificationCode, data.is_verify], (err, data) => {
          resolve((err) ? [] : (data == null) ? [] : data);
        })
      })
    },

    findByCredential: function (email, password) {
      return new Promise((resolve) => {
        let sql = `SELECT * FROM account WHERE (email = ? AND password = ?)`;
        connection.query(sql, [email, sha1(password)], (error, data) => {
          resolve((error) ? {} : (data.length == 0) ? {} : data[0]);
        })
      })
    },

    findByverificationCode: function (verification) {
      return new Promise((resolve ) => {
        const sql = 'select * from account where verificationCode = ?';
        connection.query(sql,[verification], (error, data) => {
          resolve((error) ? {} : (data == null) ? {} : data[0]);

        })
        
      })
    },

    updateAccountVerify: function (is_verify,verification) {
      return new Promise((resolve ) => {
        const sql = 'UPDATE account SET is_verify = ? WHERE verificationCode = ?';
        connection.query(sql,[is_verify, verification], (error, data) => {
          resolve((error) ? {} : (data == null) ? {} : data);
        })
      })
    },

    update: function (id, data) {
      return new Promise((resolve) => {
        connection.query('UPDATE account SET firstname = ? , lastname = ?, email = ?, password = ?  WHERE account_id = ?',
          [data.firstname, data.lastname,data.email, sha1(data.password), id], (error, data) => {
            resolve((error) ? false : data);
          })
      });
    },

    findById: function (id) {
      return new Promise((resolve) => {
        let sql = `SELECT * FROM  account WHERE account_id = ?`;
        connection.query(sql, [id], (error, data) => {
          resolve((error) ? {} : (data.length == 0) ? {} : data[0]);
        })
      })
    },

    updatePasswordById: function (id, password) {
      return new Promise((resolve) => {
        connection.query(`UPDATE account SET password =? WHERE account_id = ?`,
          [sha1(password), id], (error, data) => {
            resolve((error) ? false : data);
          })
      })
    },

    findByemail: function (email) {
      return new Promise((resolve) => {
        let sql = `SELECT * FROM  account WHERE email = ?`;
        connection.query(sql, [email], (error, data) => {
          resolve((error) ? {} : (data == null) ? {} : data[0]);

        })
      })
    },

    updateverificationCodebyEmail: function (code,email) {
      return new Promise((resolve) => {
        let sql = `UPDATE account SET verificationCode = ? WHERE email = ?`;
        connection.query(sql, [code, email], (error, data) => {
          resolve((error) ? {} : (data == null) ? {} : data);
        })
      })
    },

    updateNewPasswordByVerificationCode: function (id,newPassword) {
      return new Promise((resolve) => {
        let sql = `UPDATE account SET password = ?, verificationCode='' WHERE account_id = ?`;
        connection.query(sql, [sha1(newPassword), id], (error, data) => {
          resolve((error) ? {} : (data == null) ? {} : data);
        })
      })
    },

  }
