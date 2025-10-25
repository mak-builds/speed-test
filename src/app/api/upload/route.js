// export async function POST(request) {
//   await request.arrayBuffer(); // consume upload body
//   return new Response("ok", {
//     headers: {
//       "Cache-Control": "no-store",
//     },
//   });
// }

export const dynamic = "force-dynamic";

export async function POST(request) {
  // Just consume the upload (we don't store it)
  await request.arrayBuffer();
  return new Response("ok", {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
