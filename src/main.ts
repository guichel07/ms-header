import 'tek-ms-ds/dist/style.css';
import { mockedEntreprise, mockedSeller } from './constantes';
import { Header } from './Header';

const app = document.querySelector<HTMLDivElement>('#app')!;

const header = new Header(app);

header.render(mockedEntreprise, mockedSeller);
