
import {MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'storage-modal',
    templateUrl: 'storage-modal.component.html',
  })
  export class StorageModalComponent {
      constructor(public dialog: MatDialog){}
  }