import dbConnect from '../../../libs/dbConnect';
import bcrypt from 'bcrypt';
import gravatar from 'gravatar';
import User from '../../../models/UserModel';

const handler = async (req, res) => {
  await dbConnect();
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const encryptedPass = await bcrypt.hash(password, 12);
      const data = {
        ...req.body,
        password: encryptedPass,
        avatar: gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true),
      };

      const user = await User.create(data);

      return res
        .status(200)
        .json({ status: 'success', success: true, data: user });
    }
  } catch (error) {
    res.status(400).json({ status: 'error', success: false });
  }
};

export default handler;
