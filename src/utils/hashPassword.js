import bcrypt from "bcryptjs";

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export default hashPassword;
