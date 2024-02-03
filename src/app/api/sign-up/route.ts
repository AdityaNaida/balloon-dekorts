import { encryptPassword } from "@/config/passwordEncrypt";
import db from "@/db/database";
import { users } from "@/schema/user";


export const POST = async (req:Request,res:Response)=> {
    const { email, password } = await req.json();
    if (!email || !password) {
      return Response.json({
        statusCode: 400,
        message: "Please fill all the fields !",
        status: false,
      });
    };
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    if (user)
      return  Response.json({message:"User is Already Present"},{status:401});

    const encryptedPassword = await encryptPassword(password);

    const newUser = await db.insert(users).values({email,password: encryptedPassword,}).returning({ insertedId: users.id });
    if (newUser) {
      return Response.json({
        statusCode: 200,
        message: "User Created Successfully !",
        status: true,
      });
    }
  } 