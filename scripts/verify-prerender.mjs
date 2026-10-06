import assert from 'node:assert/strict'

// Inspect the body rather than script/metadata text: the page must be useful
// before any JavaScript executes. Run this during every production/staging build.
export function verifyPrerenderedHtml(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]
  assert.ok(body, 'Missing HTML body')
  const content = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  assert.ok(/<h1\b[^>]*>\s*Nick Hand/.test(content), 'Name must be visible HTML')
  assert.equal((content.match(/<h1\b/g) || []).length, 1, 'Expected one page heading')
  assert.match(content, /Data analysis and custom software/, 'Missing consulting content')
  assert.match(content, /Philadelphia Gun Violence Dashboard/, 'Missing project evidence')
  assert.match(content, /University of Pennsylvania/, 'Missing teaching experience')
  assert.match(content, /href="mailto:nick@wissahickonanalytics\.com\?subject=Project%20inquiry"/, 'Project contact must work without JavaScript')
  const sections = [...content.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map(match => match[1])
  assert.deepEqual(sections, ['about', 'consulting', 'work', 'writing', 'contact'], 'Missing or reordered sections')
  for (const target of content.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(content.includes(`id="${target[1]}"`), `Broken fragment link: ${target[1]}`)
  }
  assert.doesNotMatch(content, /<div id="main"><\/div>|<!--ssr-outlet-->/, 'Unrendered app outlet')
  // Visible copy uses typographic quotes (’ “ ”). Attributes and code may use straight ones.
  const text = content.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, ' ')
  const straight = text.match(/[^\s]{0,30}(?:['"]|&#39;|&#x27;|&quot;|&#34;)[^\s]{0,30}/)
  assert.ok(!straight, `Straight quote in visible text, use ’ or “ ”: ${straight?.[0]}`)
}
