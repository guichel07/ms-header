export function injectSvgToContainer(
  avatar: string,
  element: HTMLElement
): void {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(avatar, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;

  element.innerHTML = '';
  element.appendChild(svgElement);
}

export function stampSVG(size: number, ring: string, glyphColor: string) {
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}">
    ${
      ring
        ? `<circle cx="50" cy="50" r="47" fill="none" stroke="${ring}" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="${ring}" stroke-width="1" stroke-dasharray="2 3"/>`
        : ''
    }
    <path d="M27 64 L27 37 L41 57 L50 39 L59 57 L73 37 L73 64"
          stroke="${glyphColor}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="26" r="5" fill="${glyphColor}"/>
  </svg>`;
}
export function paintStamps(): void {
  const headerStamp = document.getElementById('header-stamp');
  if (headerStamp) headerStamp.innerHTML = stampSVG(30, '', '#C95B2C');
}
