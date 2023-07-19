import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit {
  selection: any = []
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  public selChange(e: MatSelectionListChange, value: any) {

    this.selection= [];
    value.forEach((item: any) => {

      this.selection.push(item._text.nativeElement.innerText)
    })
    console.log(this.selection)
}

}
