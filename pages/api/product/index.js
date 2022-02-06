import dbConnect from '../../../libs/dbConnect';
import { errorHandler } from '../../../libs/errorHandler';
import Product from '../../../models/ProductModel';

const handler = async (req, res) => {
  const { method } = req;

  try {
    await dbConnect();

    if (method === 'GET') {
      const products = await Product.find({});

      res.status(200).json(errorHandler('success', true, '', products));
    }

    if (method === 'POST') {
      const product = await Product.create(req.body);

      res
        .status(200)
        .json(
          errorHandler('success', true, 'New product has been created', product)
        );
    }
  } catch (error) {
    res.status(400).json(errorHandler('error', false, 'Error'));
  }
};

export default handler;
