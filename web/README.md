CMS
https://maqilm-portofolio-v2.sanity.studio/

## MCP Server

This project exposes a public, read-only [Model Context Protocol](https://modelcontextprotocol.io) server at `/api/mcp` (see [src/app/api/mcp/route.ts](src/app/api/mcp/route.ts)). It lets AI clients (Claude, Cursor, etc.) query the portfolio's projects, profile, and tech stack directly.

**Endpoint:** `https://maqilm-portofolio.vercel.app/api/mcp`

**Client config:**

```json
{
  "mcpServers": {
    "aqil-portfolio": {
      "url": "https://maqilm-portofolio.vercel.app/api/mcp"
    }
  }
}
```

**Tools:** `list_projects`, `get_project`, `list_project_categories`, `get_profile`, `get_about`, `list_tech_stack` — all read-only, sourced from the same data used to render the public site and the downloadable CV.

**Rate limiting:** requests are limited per IP via Upstash Redis. Requires `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` env vars in production; without them the limiter is disabled (fail-open), which is fine for local dev.
