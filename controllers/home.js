/**
 * GET /
 * Home page.
 */
const Book = require('../models/Book.js');

exports.index = (req, res) => {
  Book.find((err, docs) => {
    res.render('Home', { books: docs });
  });
};
// exports.index = (req, res) => {
// 	res.render('home', {
//     	title: 'Home'
//     });
// };
