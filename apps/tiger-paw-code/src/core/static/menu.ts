import { MenuItem } from '@core/interfaces/sidebar-menu-item';

export const MenuItems: MenuItem[] = [
  {
    display: 'Home',
    routerLink: 'home',
    index: 0,
    icon: 'home',
    protected: false,
    sidenav: true
  },
  {
    display: 'Protected',
    routerLink: 'protected',
    index: 1,
    icon: 'lock',
    protected: true,
    sidenav: true
  },
];
