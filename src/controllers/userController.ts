import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserType {
  id: number;
  email: string | null;
  name: string | null;
}

export async function indexUsers(req: any, res: any) {
  const users: UserType[] = await prisma.user.findMany();
  res.status(200).json(users);
}
export async function createUser(req: any, res: any) {
  try {
    const { name, email } = req.body;

    const newUser: UserType = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
