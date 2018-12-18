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
  {
    display: 'Profile',
    routerLink: 'profile',
    index: 4,
    icon: 'person',
    protected: true,
    sidenav: true
  },
  {
    display: 'Timeline',
    routerLink: 'timeline',
    index: 5,
    icon: 'timeline',
    protected: true,
    sidenav: true
  },
  {
    display: 'Messages',
    routerLink: 'messages',
    index: 6,
    icon: 'message',
    protected: true,
    sidenav: true
  },
];
