import type { Entreprise, Seller } from '../model';

export const mockedEntreprise: Entreprise = {
  firstName: 'Maman',
  secondName: 'Solution',
  icone: `
  <svg viewBox="0 0 100 100">
    <path d="M26 66 L26 36 L41 58 L50 38 L59 58 L74 36 L74 66"
          stroke="#FF6B35" stroke-width="10" fill="none"
          stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="25" r="7" fill="#FF6B35"/>
  </svg>`,
};
export const mockedSeller: Seller = {
  name: 'Tesia M.',
  role: 'Vendeur · Zone Nord',
  dailySalesTotal: 5660,
  stringAvatar: 'TS',
  svgAvatar: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
    <circle cx="12" cy="8" r="4"/>
    <path d="M12 14c-4.42 0-8 3.13-8 7h16c0-3.87-3.58-7-8-7z"/>
  </svg>`,
};
