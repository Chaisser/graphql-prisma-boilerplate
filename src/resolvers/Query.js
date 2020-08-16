const Query = {
  users(parent, args, { prisma }, info) {
    return prisma.query.users({}, info);
  },
  user(parent, args, { prisma }, info) {
    return prisma.query.user(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default Query;
