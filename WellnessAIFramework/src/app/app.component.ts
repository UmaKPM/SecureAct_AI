import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CleanupModalComponent } from './components/cleanup-modal/cleanup-modal.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AddBenchMarkComponent } from './components/add-benchmark/add-benchmark.component';
import { RemoveBenchMarkComponent } from './components/remove-benchmark/remove-benchmark.component';
import { config } from 'rxjs';
import { LoadDataModalComponent } from './components/load-data-modal/load-data-modal.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import * as XLSX from 'ts-xlsx';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { StorageModalComponent } from './components/storage-modal/storage-modal.component'
import * as ContribModel from './Contributionbenchmark_Model.json';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ExportModalComponent } from './components/export-modal/export-modal.component';
import { TrainModalComponent } from './components/train-modal/train-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'Secure Act 2.0';
  panelOpenState = false;
  public records: any[] = []; 
  arrayBuffer:any;
  file:File;
  sheetData: any;
  selectedRows: any[] = [];
  canShowRadio: boolean = false;  
  showUpload: boolean = false;
  showSpinner: boolean = false;
  showMessage: boolean = false;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.config.forEach((item) => {
      item.selected = false;
    })

    this.groups.forEach((item) => {
      item.selected = false;
    })

    this.marks.forEach((item) => {
      item.selected = false;
    })
  }
  config: any[] = [
    {name: 'Age Group'},
    {name: 'Contribution'},
    {name: 'Geolocation'},
    {name: 'Others'},
  ];
  selectedConfig: any[] = [];
  
  public configSelected (item: any) {
    this.config.forEach((config) => {
      if(item.name == config.name) {
        config.selected = true;
      }
    })
    const isSelected = this.selectedConfig.filter((config) => {
      return config.name == item.name
    })
     
    if(!isSelected || !isSelected.length){
      this.selectedConfig.push(item);
    }
  }

  groups: any[] = [
    {name: 'Age Group'},
    {name: 'Contribution'},
    {name: 'Geolocation'},
    {name: 'Others'},
  ];
  selectedGroups: any[] = [];
  
  public groupSelected (item: any) {
    this.groups.forEach((config) => {
      if(item.name == config.name) {
        config.selected = true;
      }
    })
    const isSelected = this.selectedGroups.filter((config) => {
      return config.name == item.name
    })
     
    if(!isSelected || !isSelected.length){
      this.selectedGroups.push(item);
    }
  }

  marks: any[] = [
    {name: 'Enhancement of 403(b) plans'},
    {name: 'Roll over by non-spousal beneficiaries'},
    {name: 'RMD Exemption of small balances '},
    {name: 'New RMD rule increased from 70.5 to 72'},
  ];
  selectedMark: any[] = [];
  
  public markSelected (item: any) {
    this.marks.forEach((config) => {
      if(item.name == config.name) {
        config.selected = true;
      }
    })
    const isSelected = this.selectedMark.filter((config) => {
      return config.name == item.name
    })
     
    if(!isSelected || !isSelected.length){
      this.selectedMark.push(item);
    }
  }

  openDialog() {
    this.dialog.open(CleanupModalComponent);
  }

  openStorage() {
    this.dialog.open(StorageModalComponent);
  }

  openExport() {
    this.dialog.open(ExportModalComponent);
  }
  openTrain() {
    this.dialog.open(TrainModalComponent);
  }


  openLoadDialog(){
    this.dialog.open(LoadDataModalComponent);
  }

  openSource(){
    const dialogRef = this.dialog.open(SourceListComponent, {data: this.records});
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result)
      this.selectedRows = result;
    });
  }

  viewData() {
    this.dialog.open(ViewDataComponent, {data: {data: this.sheetData, header: this.selectedRows},  maxWidth: '100vw',
    maxHeight: '100vh',
    height: '100%',
    width: '100%'});
  }

  fileName: string;
    fileSize: number;
    progress: number = 25;
    fileUpload(event: any) {
      let {files} = event.target
      console.log(files)
      if(files && files[0]){
        this.fileName = files[0].name;
        this.fileSize = files[0].size;
        this.progress = 30;
        setTimeout(() => {
          this.progress = 50;
        },250)
        setTimeout(() => {
          this.progress = 70;
        },500)
        setTimeout(() => {
          this.progress = 90;
        },750);
        setTimeout(() => {
          this.progress = 100;
          // if (this.isValidCSVFile(files[0])) {  
            let input = event.target;  
            let fileReader = new FileReader();  
            fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              this.sheetData = XLSX.utils.sheet_to_json(worksheet,{raw:true})
              if(this.sheetData && this.sheetData.length){
                this.records = Object.keys(this.sheetData[0]);              
                this.openSource();
              }
              console.log(this.sheetData);
          }
          fileReader.readAsArrayBuffer(input.files[0]);
            // reader.readAsArrayBuffer(input.files[0]);  
            // console.log(reader.)
        
            // reader.onload = () => {  
            //   let csvData = reader.result;  
            //   console.log(csvData)
              // let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
        
              // this.records = this.getHeaderArray(csvRecordsArray);  
            // };  
          // }
        },1000)
        
      
      }
    }
    public niceBytes(x: any){
      const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      let l = 0, n = parseInt(x, 10) || 0;

      while(n >= 1024 && ++l){
          n = n/1024;
      }
      
      return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }
    benchMarks: any[] = [
      {
        value: "Plan Sponsor",
        name: "Plan Sponsor"
      },
      {
        value: "Participant",
        name: "Participant"
      },
      {
        value: "Plan Provider",
        name: "Plan Provider"
      }/*,
      {
        value: "New RMD rule increased from 70.5 to 72",
        name: "New RMD rule increased from 70.5 to 72"
      },*/
      /*{
        value: "Diversifications",
        name: "Diversifications"
      },
      {
        value: "Integrated",
        name: "Integrated"
      }*/
    ]


    reports: any[] = [
      {
        value: "Contribution",
        name: "Contribution"
      },
      {
        value: "Investments",
        name: "Investments"
      },
      {
        value: "Loans",
        name: "Loans"
      },
      {
        value: "Withdrawals",
        name: "Withdrawals"
      },
      {
        value: "Diversifications",
        name: "Diversifications"
      },
      {
        value: "Integrated",
        name: "Integrated"
      },
    ]

    source: any[] = [
      {
        value: "S3",
        name: "S3"
      },
      {
        value: "On Premises Cloud",
        name: "On Premises Cloud"
      },
      {
        value: "Other Sources",
        name: "Other Sources"
      },
    ]

    openAddBenchMark(): void {
      const dialogRef = this.dialog.open(AddBenchMarkComponent, {
        width: '250px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        this.benchMarks.push({
          value: result,
          name: result
        });
        // console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    openRemoveBenchMark(): void {
      const dialogRef = this.dialog.open(RemoveBenchMarkComponent, {
        // width: '250px'
        data: this.benchMarks,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result && result.length){
          this.benchMarks = result;
        }
      });
    }

    removeConfig(item: any) {
      this.selectedConfig = this.selectedConfig.filter((obj) => {
        return item.name != obj.name
      })
      this.config.forEach((obj) => {
        if(item.name == obj.name){
          obj.selected = false
        }
      })
    }

    removeGroup(item: any) {
      this.selectedGroups = this.selectedGroups.filter((obj) => {
        return item.name != obj.name
      })
      this.groups.forEach((obj) => {
        if(item.name == obj.name){
          obj.selected = false
        }
      })
    }

    removeBenchMark(item: any) {
      this.selectedMark = this.selectedMark.filter((obj) => {
        return item.name != obj.name
      })
      this.benchMarks.forEach((obj) => {
        if(item.name == obj.name){
          obj.selected = false
        }
      })
    }

    multipleResouceList:any=[
      {id: 101, lang: 'Java'},
      {id: 102, lang: 'Angular'},
      {id: 103, lang: 'Hibernate'}
    ];

    downloadFile(model: any){
      console.log(model.value)
      let fileList: any = {
        Contribution: 'Contributionbenchmark',
        Investments: 'Investmentbenchmark',
        Loans: 'loanbenchmark',
        Withdrawals: 'withdrawalsbenchmark',
        Diversifications: 'diversificationsbenchmark'
      };
      let fileName = fileList[model.value];
      if(fileName && fileName.length){
        window.open(`/assets/Reports/${fileList[model.value]}.pdf`, '_blank');
      }

    }
    dataSelected (value: any) {
      this.canShowRadio = value == 'three';
      if(!this.canShowRadio) {
        this.updateData()
        this.openSource()
        this.showUpload = true;
      }
    }

    updateData() {     
      this.sheetData = Object.values(ContribModel);
      this.records = ["EmployeeId",	"first_name",	"last_name",	"email",	"gender",	"Income",	"Deductions",	"State",	"Pretax",	"Roth",	"Contrib_source_total",	"enrolled", "plan",	"Age",	"County",	"SSN",	"Ontrack",	"Offtrack",	"contriblimit"]
    }

    radioChange(value: any) {
      console.log(value)
      this.updateData()
      this.openSource()
      this.showUpload = true;
    }
    
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    openSnackBar (msg: string,className: string, type?:string) {
      
     this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        // this._snackBar.open(msg, 'Close', {
        //   duration: 2 * 1000,
        //   panelClass: [className],
        //   verticalPosition: this.verticalPosition
        // });
        this.showMessage = true;
        if(type && type == 'export') {
          this.exportFile();
        }
      }, 5000)
      
    }

    onStepChange(event: any){
      this.showMessage = false;
    }

    exportFile() {
      let url="/assets/Reports/Contributionbenchmark.pdf";
      var element = document.createElement('a');
      element.href = url;
      element.download = url; 
      document.body.appendChild(element);
      element.click();
    }
}

