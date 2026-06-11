import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './components/pages/HomePage';
import { AchatsPage } from './components/pages/AchatsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ZonesPage } from './components/pages/ZonesPage';
import { ContactPage } from './components/pages/ContactPage';
import { EnlevementEpavePage } from './components/pages/services/EnlevementEpavePage';
import { DemolitionPage } from './components/pages/services/DemolitionPage';
import { BennesPage } from './components/pages/services/BennesPage';
import { DebarrasPage } from './components/pages/services/DebarrasPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'achats', Component: AchatsPage },
      { path: 'services', Component: ServicesPage },
      { path: 'services/enlevement-epave', Component: EnlevementEpavePage },
      { path: 'services/demolition-decoupe', Component: DemolitionPage },
      { path: 'services/location-bennes', Component: BennesPage },
      { path: 'services/debarras-usine', Component: DebarrasPage },
      { path: 'zones', Component: ZonesPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
