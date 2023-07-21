import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CleanupModalComponent } from './components/cleanup-modal/cleanup-modal.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AddBenchMarkComponent } from './components/add-benchmark/add-benchmark.component';
import { RemoveBenchMarkComponent } from './components/remove-benchmark/remove-benchmark.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoadDataModalComponent } from './components/load-data-modal/load-data-modal.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatTableModule } from "@angular/material/table";
import { RecommCataTableComponent } from './components/recomm-cata-table/recomm-cata-table.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import {MatRadioModule} from '@angular/material/radio';
import { StorageModalComponent } from './components/storage-modal/storage-modal.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ExportModalComponent} from './components/export-modal/export-modal.component';
import {TrainModalComponent} from './components/train-modal/train-modal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CleanupModalComponent,
    AddBenchMarkComponent,
    RemoveBenchMarkComponent,
    LoadDataModalComponent,
    MatTableComponent,
    RecommCataTableComponent,
    SourceListComponent,
    ViewDataComponent,
    StorageModalComponent,
    ExportModalComponent,
    TrainModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    MatDialogModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatTableModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
