import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const ProductSchema = new Schema({
  product_title: {
    type: String,
    required: [true, 'Product title required!'],
  },
  slug: {
    type: String,
    slug: 'product_title',
    unique: true,
  },
  product_image: {
    type: String,
    required: [true, 'Product image required!'],
  },
  product_prices: {
    type: String,
    default: '$10.00',
  },
  product_discount_price: {
    type: String,
  },
  product_description: {
    type: String,
  },
  product_stocks: {
    type: Number,
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
