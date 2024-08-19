const slugify = require('slugify');
const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subCategoryModel');

exports.createProductValidator = [
  check('title')
    .isLength({ min: 3 })
    .withMessage('must be at least 3 chars')
    .notEmpty()
    .withMessage('Product required')
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check('introduction')
    .notEmpty()
    .withMessage('Product description is required')
    .isLength({ max: 2500 })
    .withMessage('Too long description'),
  check('subheading1')
    .notEmpty()
    .withMessage(' subheading1 is required'),
  check('subheading2')
    .notEmpty()
    .withMessage(' subheading1 is required'),
  check('subheading3')
    .notEmpty()
    .withMessage(' subheading1 is required'),
  check('subheading4')
    .notEmpty()
    .withMessage(' subheading1 is required'),
  check('subheading5')
    .notEmpty()
    .withMessage(' subheading1 is required'),
    check('detailsSubheading1')
    .notEmpty()
    .withMessage(' detailsSubheading1 is required'),
  check('detailsSubheading2')
    .notEmpty()
    .withMessage(' detailsSubheading1 is required'),
  check('detailsSubheading3')
    .notEmpty()
    .withMessage(' detailsSubheading1 is required'),
  check('detailsSubheading4')
    .notEmpty()
    .withMessage(' detailsSubheading1 is required'),
  check('detailsSubheading5')
    .notEmpty()
    .withMessage(' detailsSubheading5 is required'),


  validatorMiddleware,
];

exports.getProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  validatorMiddleware,
];

exports.updateProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  body('title')
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];

exports.deleteProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  validatorMiddleware,
];
