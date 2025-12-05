const BACKEND_URL = process.env.BACKEND_URL || "";
export async function POST(req: Request) {
  const { message } = await req.json();
  const chatBackendResponse = await fetch(`${BACKEND_URL}/chats?stream=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userQuery: message }),
  });
  if (!chatBackendResponse.ok) {
    return new Response("Error from chat backend", { status: 500 });
  }
  const stream = new ReadableStream({
    async start(controller) {
      const reader = chatBackendResponse.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) {
        controller.close();
        return;
      }
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        // const chunk = decoder.decode(value);
        controller.enqueue(value);
      }
      controller.close();
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
// export async function POST(req: Request) {
//   const { message } = await req.json();
//   const chatBackendResponse = await fetch("http://localhost:3100/chats", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ userQuery: message }),
//   });
//   const messageResponse = await chatBackendResponse.json();

//   return Response.json(messageResponse);
// }
