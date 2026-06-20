// @vitest-environment jsdom
import { describe, test, expect, beforeEach } from 'vitest';
import { injectSvgToContainer } from '.';

describe('injectSvgToContainer', () => {
  let containerDiv = document.createElement('div');
  const avatar: string = `
  <svg viewBox="0 0 100 100">
    <path d="M26 66 L26 36 L41 58 L50 38 L59 58 L74 36 L74 66"
          stroke="#FF6B35" stroke-width="10" fill="none"
          stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="25" r="7" fill="#FF6B35"/>
  </svg>`;

  beforeEach(() => {
    window.document.body.innerHTML = '';
    document.body.appendChild(containerDiv);
  });

  test('SVG should be in the dom and container target', () => {
    injectSvgToContainer(avatar, containerDiv);

    expect(document.body.querySelector('div svg')).not.toBeNull();
  });
});
