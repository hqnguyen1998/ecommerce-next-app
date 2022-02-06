import { errorHandler } from '../../../libs/errorHandler';
import Product from '../../../models/ProductModel';

const handler = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const products = await Product.find({});

      res.status(200).json(errorHandler('success', true, '', products));
    } catch (error) {
      res.status(400).json(errorHandler('error', false, 'Error'));
    }
  }

  if (method === 'POST') {
    try {
      // const {product_title, product_image, product_prices, product_description, product_stocks} = req.body;

      const product = await Product.create(req.body);

      res
        .status(200)
        .json(
          errorHandler('success', true, 'New product has been created', product)
        );
    } catch (error) {
      res.status(400).json(errorHandler('error', false, 'Error'));
    }
  }
};

export default handler;
