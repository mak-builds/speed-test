// export async function GET() {
//   const size = 5 * 1024 * 1024; // 5 MB
//   const buffer = new Uint8Array(size);
//   const chunkSize = 65536; // 64 KB

//   for (let i = 0; i < size; i += chunkSize) {
//     const end = Math.min(i + chunkSize, size);
//     crypto.getRandomValues(buffer.subarray(i, end));
//   }

//   return new Response(buffer, {
//     headers: {
//       "Content-Type": "application/octet-stream",
//       "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
//       Pragma: "no-cache",
//       Expires: "0",
//     },
//   });
// }

export const dynamic = "force-dynamic"; // 👈 important: disable ISR

export async function GET() {
  const size = 25 * 1024 * 1024; // 25 MB
  const buffer = new Uint8Array(size);
  const chunkSize = 65536; // 64 KB limit per getRandomValues

  for (let i = 0; i < size; i += chunkSize) {
    const end = Math.min(i + chunkSize, size);
    crypto.getRandomValues(buffer.subarray(i, end));
  }

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
