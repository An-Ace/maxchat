import { Request, Response } from "express"
import prisma from "../../utils/prisma"

export const get = async (req: Request, res: Response) => {
  try {
    const result = await prisma.message.findFirst({
      where: {
        id: Number(req.params.id)
      }
    })
    return res.json({ result })
  } catch (error) {
    return res.status(500).json({ error, result: null })
  }
}

export const put = async (req: Request, res: Response) => {
  try {
    const result = await prisma.message.update({
      where: {
        id: Number(req.params.id)
      },
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
    return res.status(500).json({ error, result: null })
  }
}

export const del = async (req: Request, res: Response) => {
  try {
    const result = await prisma.message.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    return res.json({ result })
  } catch (error) {
    return res.json({ error, result: null })
  }
}