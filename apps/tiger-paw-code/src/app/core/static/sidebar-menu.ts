import { ISidebarMenuItem } from '../interfaces/sidebar-menu-item';

export const SideBarMenuItems: ISidebarMenuItem[] = [
  {
    display: 'Home',
    icon: 'home',
    index: 0,
    routerLink: 'home'
  },
  {
    display: 'Protected',
    icon: 'lock',
    index: 0,
    routerLink: 'protected'
  }
];
