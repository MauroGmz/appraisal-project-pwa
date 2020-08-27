import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {
  
  panelOpenState = false;
  step = 0;

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.panelOpenState = true;
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
