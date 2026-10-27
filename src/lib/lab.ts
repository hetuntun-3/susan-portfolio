// A Lab entry gets its own page once it has written content (HTML comments don't count).
export function hasBody(entry: { body?: string }) {
  return (entry.body ?? '').replace(/<!--[\s\S]*?-->/g, '').trim().length > 0;
}
