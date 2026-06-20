import type { Entreprise, Seller } from './model';
import { injectSvgToContainer, paintStamps } from './utils';

export class Header {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(entreprise: Entreprise, seller: Seller): void {
    this.el.innerHTML = `
      <header class="app-header">
        <div class="brand-row">
          <div class="stamp sm" id="header-stamp"></div>
          <div class="wordmark">${entreprise.firstName} <em>${entreprise.secondName}</em></div>
        </div>
        <div class="header-right">
          <div class="seller">
            <div class="avatar">${seller.stringAvatar}</div>
            <div class="seller-text">
            <div class="name">${seller.name}</div>
            <div class="role">${seller.role}</div>
            </div>
          </div>
          <div class="daily-badge">
            <span class="lab">VENTES DU JOUR</span>
            <span class="amt">${seller.dailySalesTotal} F</span>
          </div>
          <span class="logout-link" onclick="logout()">Déconnexion</span>
        </div>
      </header>
      `;
    const avatarDiv: HTMLElement | null = document.querySelector('.avatar');
    if (seller.svgAvatar && avatarDiv)
      injectSvgToContainer(seller.svgAvatar, avatarDiv);

    paintStamps();
  }
}
