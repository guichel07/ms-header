// // @vitest-environment jsdom
import { describe, test, expect, beforeEach } from 'vitest';
import { Header } from './header';
import { mockedEntreprise, mockedSeller } from './constantes';

describe('Header', () => {
  let bodyHeader: HTMLDivElement;
  let header: Header;

  beforeEach(() => {
    document.body.innerHTML = '';

    bodyHeader = document.createElement('div');
    document.body.appendChild(bodyHeader);

    header = new Header(bodyHeader);
  });

  test('Should have exact infos', () => {
    header.render(mockedEntreprise, mockedSeller);

    expect(bodyHeader.querySelector('.wordmark')?.innerHTML).toContain(
      `${mockedEntreprise.firstName} <span>${mockedEntreprise.secondName}</span>`
    );

    expect(bodyHeader.querySelector('.name')?.textContent).toBe(
      mockedSeller.name
    );

    expect(bodyHeader.querySelector('.role')?.textContent).toBe(
      mockedSeller.role
    );

    expect(bodyHeader.querySelector('.amt')?.textContent).toContain(
      `${mockedSeller.dailySalesTotal} F`
    );

    expect(bodyHeader.querySelector('.avatar svg')).not.toBeNull();
  });
});
