export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/test") {
      const { results } = await env.DB.prepare("SELECT * FROM test").all();
      return Response.json(results);
    }
    return env.ASSETS.fetch(request);
  }
};
