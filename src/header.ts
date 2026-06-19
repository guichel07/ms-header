export class Header {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(): void {
    this.el.innerHTML = `
      <header>
        <span class="text-lg">Mon Header guich</span>
      </header>
    `;
  }
}
