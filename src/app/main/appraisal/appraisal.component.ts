import { Component, OnInit } from '@angular/core';

//import { Photo } from '../../models/photo';

import { Photo } from './../../models/Photo';

@Component({
  selector: 'appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {
  
  panelOpenState = false;
  step = 0;
  flag = false;
  photosArray: Photo[]= [
    {id: 1, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 2, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 3, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 4, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
  ];
  selectedPhoto: Photo = new Photo();

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

  
  activeCamera(camera) {
    camera.click();
  }

  onChange(evt, photo) {
    this.flag = true;
    // Create url object and show Photo from BLOB Object.
    photo.src = URL.createObjectURL(evt.target.files[0]);
    // Create Http Request Instance.
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) console.log(xhttp.responseText);
    };
    // Create Data Form Instance.
    const formData = new FormData();
    // Add blob object into instance.
    formData.append("photo", evt.target.files[0]);
    // Open and send data to endpoint /upload
    /*xhttp.open('POST', window.location.href + 'upload', true);
    xhttp.send(formData)*/
    
  }

  addPhoto(photo) {
    this.selectedPhoto.url = photo.src;
    if(this.selectedPhoto.id === 0) {
      this.selectedPhoto.id = this.photosArray.length + 1;
      this.photosArray.push(this.selectedPhoto);
    }
    this.selectedPhoto = new Photo();
  }

}
