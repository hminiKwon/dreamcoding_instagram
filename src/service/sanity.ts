import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATABSET,
    useCdn: false,
    apiVersion: "2024-01-31",
    token: process.env.SANITY_SECRET_TOKEN,
});
