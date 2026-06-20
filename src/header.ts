import type { Entreprise, Seller } from './model';
import { injectSvgToContainer } from './utils';

export class Header {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(entreprise: Entreprise, seller: Seller): void {
    this.el.innerHTML = `
      <header class="app-header">
        <div class="brand-row">
          <svg viewBox="0 0 100 100">
            <path d="M26 66 L26 36 L41 58 L50 38 L59 58 L74 36 L74 66"
                  stroke="#FF6B35" stroke-width="10" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="25" r="7" fill="#FF6B35"/>
          </svg>
          <div class="wordmark">${entreprise.firstName} <span>${entreprise.secondName}</span></div>
        </div>

        <div class="header-main">
          <div class="seller">
            <div class="avatar">${seller.stringAvatar}</div>
            <div>
              <div class="name">${seller.name}</div>
              <div class="role">${seller.role}</div>
            </div>
          </div>
          <div class="daily-badge">
            <span class="lab">VENTES DU JOUR</span>
            <span class="amt">${seller.dailySalesTotal} F</span>
          </div>
          <span class="logout-link">Déconnexion</span>
        </div>
      </header>
      `;
    const avatarDiv: HTMLElement | null = document.querySelector('.avatar');
    if (seller.svgAvatar && avatarDiv)
      injectSvgToContainer(seller.svgAvatar, avatarDiv);
  }
}
