import bcrypt from "bcryptjs";
import hashPassword from "./../utils/hashPassword";
import generateToken from "../utils/generateToken";

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const { name, email, photo } = args.data;
    const password = await hashPassword(args.data.password);
    const user = await prisma.mutation.createUser({
      data: {
        name,
        email,
        photo,
        password,
      },
    });
    return user;
  },
  async updateUser(parent, args, { prisma }, info) {
    if (typeof args.data.password === "string") {
      args.data.password = await hashPassword(args.data.password);
    } else {
      delete args.data.password;
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      },
      info
    );
  },
  deleteUser(parent, args, { prisma }, info) {
    return prisma.mutation.deleteUser(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async loginUser(parent, args, { prisma }, info) {
    const { email, password } = args.data;

    const user = await prisma.query.user(
      {
        where: {
          email,
        },
      },
      null
    );

    if (!user) {
      throw new Error("Kullanıcı adı veya şifre hatalı");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Kullanıcı adı veya şifre hatalı");
    }

    const token = generateToken(user.id);

    return {
      user,
      token,
    };
  },
};

export default Mutation;
