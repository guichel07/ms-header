import { Header } from './header';

const app = document.querySelector<HTMLDivElement>('#app')!;

const header = new Header(app);

header.render();
