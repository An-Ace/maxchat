import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

const data = Array.from(Array(30).keys()).map(() => {
  return {
    type: faker.helpers.arrayElement(["text", "image"]),
    from: faker.phone.number('62###########'),
    status: faker.helpers.arrayElement(["pending", "sent", "delivered"]),
    text: faker.lorem.sentences({ min: 1, max: 2 }),
    attacement: faker.image.urlPlaceholder({ width: 600, height: 600 }),
    meta: faker.helpers.arrayElement([JSON.stringify({
      header: { text: "Lorem Ipsum" },
      body: [
        { index: 1, type: "text", text: "oke" },
        { index: 2, type: "image", attachmentUrl: "oke" },
        { index: 3, type: "text", text: "asdf" }
      ]
    }), null]),
    date: faker.date.past(5)
  }
})

async function main () {
  await prisma.message.createMany({
    data
  })
}

main()
.then(async () => {
  console.log('Seeding Success...');
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})