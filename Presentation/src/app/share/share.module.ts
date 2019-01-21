import { MessageDialogComponent } from './../main/message-dialog/message-dialog.component';
import { ProductService } from 'src/services/product.service';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule,
  MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from '../main/confirmation-dialog/confirmation-dialog.component';
import { DialogHelperService } from 'src/services/dialog-helper.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    // Animation Module
    BrowserAnimationsModule,
    // Component Modules
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    // Animation Module
    BrowserAnimationsModule,
    // Component Modules
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    ProductService,
    DialogHelperService
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    MessageDialogComponent
  ]
})
export class ShareModule { }
