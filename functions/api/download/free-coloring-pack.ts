const PDF_URL =
  "https://downloads.tinyanimalworlds.com/tiny-animal-worlds-100-free-coloring-pages.pdf";
const PDF_FILENAME = "tiny-animal-worlds-100-free-coloring-pages.pdf";

interface PagesContext {
  request: Request;
}

function buildResponseHeaders(upstream: Response): Headers {
  const headers = new Headers();

  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${PDF_FILENAME}"`,
  );
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set(
    "Cache-Control",
    upstream.headers.get("Cache-Control") ?? "public, max-age=3600",
  );

  for (const header of [
    "Content-Length",
    "Content-Range",
    "Accept-Ranges",
    "ETag",
    "Last-Modified",
  ]) {
    const value = upstream.headers.get(header);
    if (value) headers.set(header, value);
  }

  return headers;
}

async function handleDownload(request: Request): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  }

  const upstreamHeaders = new Headers();
  const range = request.headers.get("Range");
  if (range) upstreamHeaders.set("Range", range);

  let upstream: Response;

  try {
    upstream = await fetch(PDF_URL, {
      method: request.method,
      headers: upstreamHeaders,
      redirect: "follow",
    });
  } catch {
    return new Response("Unable to download the coloring pack.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const headers = buildResponseHeaders(upstream);

  if (!upstream.ok) {
    return new Response("Unable to download the coloring pack.", {
      status: upstream.status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    headers,
  });
}

export function onRequestGet({ request }: PagesContext): Promise<Response> {
  return handleDownload(request);
}

export function onRequestHead({ request }: PagesContext): Promise<Response> {
  return handleDownload(request);
}

export function onRequest({ request }: PagesContext): Promise<Response> {
  return handleDownload(request);
}
