import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  catalogueId: String,
  brand: String,
  casNumber: String,
  purity: String,
  grade: String,
  storage: String,
  features: [String],
  variants: [{
    size: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    sku: {
      type: String,
      required: true
    }
  }],
  indianSuppliers: [String],
  certifications: [String],
  applications: [String]
}, {
  timestamps: true
});

// Add text index for search functionality
productSchema.index({
  name: 'text',
  description: 'text',
  catalogueId: 'text',
  brand: 'text',
  casNumber: 'text'
});

const Product = mongoose.model('Product', productSchema);

export default Product;
