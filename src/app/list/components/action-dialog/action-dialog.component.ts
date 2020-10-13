import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { brandListConfig } from '../../configs/brand-list.config';
import { DialogData } from '../../interfaces/dialog-data.interface';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit {
  carDetailsForm: FormGroup;

  readonly action = this.data.action;
  readonly brandList = brandListConfig;
  readonly car = this.data.car;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<ActionDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  executeAction(): void {
    this.dialogRef.close(this.carDetailsForm.value);
  }

  private initForm(): void {
    this.carDetailsForm = this.formBuilder.group({
      brand: [this.car?.brand, [Validators.required]],
      model: [this.car?.model, [Validators.required]],
      date: [this.car?.date, [Validators.required]]
    });
  }
}
