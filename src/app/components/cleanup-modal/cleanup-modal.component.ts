
import {MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'cleanup-modal',
    templateUrl: 'cleanup-modal.component.html',
  })
  export class CleanupModalComponent {
      constructor(public dialog: MatDialog){}
  }