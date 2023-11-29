import { Request, Response } from "express"
import prisma from "../../utils/prisma"
import extension from "prisma-paginate";
const xprisma = prisma.$extends(extension);

export const get = async (req: Request, res: Response) => {
  const {
    page = 1, limit = 10, status, type
  } = req.query
  try {
    const data = await xprisma.message.paginate({
      limit: Number(limit),
      page: Number(page),
      skip: (Number(page) - 1) * Number(limit),
      where: {
        // status: isInclude(status, ["pending", "sent", "delivered"]),
        // @ts-ignore
        status, type
      }
    })
    return res.json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error, result: [] })
  }
}
// function isInclude (data: any, from: any[]) {
//   return from.includes(data) ? data : undefined
// }

export const post = async (req: Request, res: Response) => {
  try {
    const result = await prisma.message.create({
      /**
        {
          "type": "text" | "image",
          "from": Phone Number,
          "status": "pending" | "sent" | "delivered",
          "text": Chat Messange,
          "attacement": Image URL,
          "meta": {"header":{"text":"Lorem Ipsum"},"body":[{"index":1,"type":"text","text":"oke"},{"index":2,"type":"image","attachmentUrl":"oke"},{"index":3,"type":"text","text":"asdf"}]},
          "date": Date
        }
      */
      data: req.body
    })
    return res.json({ result })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error, result: null })
  }
}