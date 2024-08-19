const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short product title'],
      maxlength: [100, 'Too long product title'],
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    introduction: {
      type: String,
      required: [true, 'Product description is required'],
      minlength: [20, 'Too short product description'],
    },
    subheading1: {
      type: String,
      required: true,
    },
    subheading2: {
      type: String,
      required: true,
    },
    subheading3: {
      type: String,
      required: true,
    },
    subheading4: {
      type: String,
      required: true,
    },
    subheading5: {
      type: String,
      required: true,
    },
    detailsSubheading1: {
      type: String,
      required: true,
    },
    detailsSubheading2: {
      type: String,
      required: true,
    },
    detailsSubheading3: {
      type: String,
      required: true,
    },
    detailsSubheading4: {
      type: String,
      required: true,
    },
    detailsSubheading5: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);


module.exports = mongoose.model('Product', productSchema);
