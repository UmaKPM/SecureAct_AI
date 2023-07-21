
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'add-benchmark',
    templateUrl: 'add-benchmark.component.html',
  })
  export class AddBenchMarkComponent {
      constructor(
        public dialogRef: MatDialogRef<AddBenchMarkComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
      ) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
  }