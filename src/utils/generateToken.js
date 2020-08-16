import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "secretKey");
};

export default generateToken;
