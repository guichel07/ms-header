export class Header {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(): void {
    this.el.innerHTML = `
      <header class="app-header">
        <div class="brand-row">
          <svg viewBox="0 0 100 100">
            <path d="M26 66 L26 36 L41 58 L50 38 L59 58 L74 36 L74 66"
                  stroke="#FF6B35" stroke-width="10" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="25" r="7" fill="#FF6B35"/>
          </svg>
          <div class="wordmark">Maman <span>Solution</span></div>
        </div>

        <div class="header-main">
          <div class="seller">
            <div class="avatar">AM</div>
            <div>
              <div class="name">Amina M.</div>
              <div class="role">Vendeur · Zone Nord</div>
            </div>
          </div>
          <div class="daily-badge">
            <span class="lab">VENTES DU JOUR</span>
            <span class="amt">47 500 F</span>
          </div>
          <span class="logout-link">Déconnexion</span>
        </div>
      </header>
      `;
  }
}
