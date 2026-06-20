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
