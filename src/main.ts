import 'tek-ms-ds/dist/style.css';
import { Header } from './header';
import { mockedEntreprise, mockedSeller } from './constantes';

const app = document.querySelector<HTMLDivElement>('#app')!;

const header = new Header(app);

header.render(mockedEntreprise, mockedSeller);
