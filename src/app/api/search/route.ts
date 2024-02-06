import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

export const GET = async () => {
    return searchUsers().then((data) => NextResponse.json(data));
};
