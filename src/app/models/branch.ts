import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

export class Branchform {
    constructor(
        private formBuilder: FormBuilder
    ) {

    }

    form() {
        return this.formBuilder.group({  
            Id: ['00000000-0000-0000-0000-000000000000', Validators.required],
            Name: ['', Validators.required],
            Status: [1,Validators.required],
            CreatedBy: ['00000000-0000-0000-0000-000000000000', Validators.required],
            CreatedDate: ['2023-07-20T13:56:00.062Z', Validators.required],
            UpdatedDate: [''],
            UpdatedBy: [''],
        });
    }
}