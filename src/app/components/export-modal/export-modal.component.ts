import {MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'export-modal',
    templateUrl: 'export-modal.component.html',
  })
  export class ExportModalComponent {
      constructor(public dialog: MatDialog){}
  }
