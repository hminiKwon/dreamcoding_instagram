import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getuserByUsername } from "@/service/user";
import { authOptions } from "@/util/authOption";

export async function GET() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        return new Response("Authentication Error", { status: 401 });
    }

    return getuserByUsername(user.username).then((data) =>
        NextResponse.json(data)
    );
}
