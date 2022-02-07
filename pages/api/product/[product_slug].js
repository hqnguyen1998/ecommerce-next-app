import dbConnect from '../../../libs/dbConnect';
import { errorHandler } from '../../../libs/errorHandler';
import Product from '../../../models/ProductModel';

const handler = async (req, res) => {
  const { method, query } = req;

  try {
    dbConnect();
    if (method === 'GET') {
      const product = await Product.findOne({ slug: query.product_slug });

      res
        .status(200)
        .json(errorHandler('success', true, 'Fetching product data', product));
    }
  } catch (error) {
    res.status(500).json(errorHandler('error', false, 'Error'));
  }
};

export default handler;
