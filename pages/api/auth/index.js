import dbConnect from '../../../libs/dbConnect';
import bcrypt from 'bcrypt';
import User from '../../../models/UserModel';
import { errorHandler } from '../../../libs/errorHandler';

const handler = async (req, res) => {
  await dbConnect();
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json(
            errorHandler('error', false, 'User is not existed in database!')
          );
      }
      const decryptedPass = await bcrypt.compare(password, user.password);
      if (!decryptedPass)
        return res
          .status(403)
          .json(errorHandler('error', false, 'Incorrect password'));

      return res
        .status(200)
        .json(errorHandler('success', true, 'Login success', user));
    }
  } catch (error) {
    res.status(400).json({ status: 'error', success: false });
  }
};

export default handler;
