import type { Entreprise, Profil } from '../model';
import { injectSvgToContainer, paintStamps } from '../utils';

export class Header {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(entreprise: Entreprise, seller: Profil): void {
    this.el.innerHTML = `
      <header class="app-header">
        <div class="brand-row">
          <div class="stamp sm" id="header-stamp"></div>
          <div class="wordmark">${entreprise.firstName} <em>${entreprise.secondName}</em></div>
        </div>
        <div class="header-right">
          <div class="seller">
            <div class="avatar">${seller.tag}</div>
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
          <button class="icon-btn section-menu-btn" id="section-menu-btn" onclick="openSectionMenu()" aria-label="Menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
          </button>
        </div>
      </header>
      `;
    const avatarDiv: HTMLElement | null = document.querySelector('.avatar');
    if (seller.svgAvatar && avatarDiv)
      injectSvgToContainer(seller.svgAvatar, avatarDiv);

    paintStamps();
  }
}
