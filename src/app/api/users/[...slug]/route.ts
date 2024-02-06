import { getLikedPostOf, getPostsOf, getSavedPostOf } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        slug: string[];
    };
};

export const GET = async (_: NextRequest, context: Context) => {
    const { slug } = context.params;

    if (!slug || !Array.isArray(slug) || slug.length < 2) {
        return new NextResponse("Bad Request", { status: 400 });
    }

    const [username, query] = slug;

    let req = getPostsOf;
    if (query === "saved") {
        req = getSavedPostOf;
    } else if (query === "liked") {
        req = getLikedPostOf;
    }

    return req(username).then((data) => NextResponse.json(data));
};
