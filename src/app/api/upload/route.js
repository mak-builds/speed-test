export async function POST(request) {
  await request.arrayBuffer(); // consume upload body
  return new Response("ok", {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
