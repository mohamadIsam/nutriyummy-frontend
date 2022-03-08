import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  complaintForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  buildComplaintForm() {
    this.complaintForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      describe: new FormControl(null, Validators.required)
    })
  }

}
