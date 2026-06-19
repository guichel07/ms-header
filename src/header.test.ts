// @vitest-environment jsdom
import { describe, test, expect, beforeEach } from 'vitest';
import { Header } from './header';

describe('Header', () => {
  let headerDiv: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    headerDiv = document.createElement('div');
    document.body.appendChild(headerDiv);
  });

  test('should render correctly', () => {
    const myHeader = new Header(headerDiv);

    myHeader.render();

    const headerElement = headerDiv.querySelector('header');

    expect(headerElement).not.toBeNull();
    expect(headerElement!.innerHTML).toContain('Mon Header');
  });
});
