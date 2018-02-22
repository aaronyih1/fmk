/**
 * GET /latests
 * List all books.
 */
const Latest = require('../models/Latest.js');

exports.getLatests = (req, res) => {
  Latest.find((err, docs) => {
    res.json(res);
  });
};