export async function POST(req: Request) {
  const { message } = await req.json();
  const chatBackendResponse = await fetch("http://localhost:3100/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userQuery: message }),
  });
  const messageResponse = await chatBackendResponse.json();

  return Response.json(messageResponse);
}
