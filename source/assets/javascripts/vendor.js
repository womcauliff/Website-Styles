// -------------------------------------
//  Background Video
// -------------------------------------

/**
 * @file vidbg is a 0.3kb micro-library for embedding video backgrounds into web pages.
 * Scaffolded with generator-microjs v0.0.12
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */

function vidbg(element, sources) {
  var container, item, html = [], index = sources.length;
  if (!document.createElement('video').canPlayType) {
    return;
  }
  html.push('<video autoplay="true" loop="loop" muted="muted" volume="0">');
  sources.reverse();
  while (index--) {
    item = sources[index];
    html.push('<source src="', item.src, '" type="video/', item.type, '" />');
  }
  html.push('</video>');
  container = document.createElement('div');
  container.setAttribute('class', 'vidbg');
  container.innerHTML = html.join('');
  element.appendChild(container);
}