import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  msgs1: Message[];

  constructor() {
    this.items = [];
    this.msgs1 = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        routerLink: '/users',
        // items: [
        //   {
        //     label: 'New',
        //     icon: 'pi pi-fw pi-user-plus',

        //   },
        //   {
        //     label: 'Delete',
        //     icon: 'pi pi-fw pi-user-minus',

        //   },
        //   {
        //     label: 'Search',
        //     icon: 'pi pi-fw pi-users',
        //     items: [
        //       {
        //         label: 'Filter',
        //         icon: 'pi pi-fw pi-filter',
        //         items: [
        //           {
        //             label: 'Print',
        //             icon: 'pi pi-fw pi-print'
        //           }
        //         ]
        //       },
        //       {
        //         icon: 'pi pi-fw pi-bars',
        //         label: 'List'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-user-edit',
        routerLink: '/registration',
      }
    ];
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
  ];
  }

}
