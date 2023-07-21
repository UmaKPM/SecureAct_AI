import {MatDialog} from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'train-modal',
    templateUrl: 'train-modal.component.html',
  })
  export class TrainModalComponent {
      constructor(public dialog: MatDialog){}
  }
