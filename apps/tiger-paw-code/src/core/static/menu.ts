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
  {
    display: 'Admin',
    routerLink: 'admin',
    index: 2,
    icon: 'perm_data_setting',
    protected: true,
    sidenav: true
  },
  {
    display: 'Blog',
    routerLink: 'blog',
    index: 3,
    icon: 'note',
    protected: false,
    sidenav: true
  },
];
