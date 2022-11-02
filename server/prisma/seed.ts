import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      avatarUrl: "https://github.com/rafaasimi",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "BOL132",
      ownerId: user.id,

      //   Forma de criar o participant de forma encadeada
      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  //   const participant = await prisma.participant.create({
  //     data: {
  //         poolId: pool.id,
  //         userId: user.id,
  //     }
  //   })

  await prisma.game.create({
    data: {
      date: "2022-11-02T12:00:00.858Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-05T16:00:00.858Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 3,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
