
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'remove-benchmark',
    templateUrl: 'remove-benchmark.component.html',
  })
  export class RemoveBenchMarkComponent {
      constructor(
        public dialogRef: MatDialogRef<RemoveBenchMarkComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
      ) {}
    
      ngOnInit() {
      }
      onNoClick(): void {
        this.dialogRef.close();
      }

      remove(item: any) {
        const data = this.data.filter((obj: any) => {
          return item.name != obj.name;
        })
        this.data = data;
      }
  }