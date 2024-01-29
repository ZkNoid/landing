import clientPromise from "@/app/lib/mongodb";

export async function POST(request: Request) {
    const data = await request.json();

    const { email, termsChecked } = data;

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await db.collection("subscribe_emails").updateOne(
        { email },
        {
          $set: {
            termsChecked
          },
        },
        { upsert: true },
      )

    return Response.json({
        status: "ok"
    })  
}
