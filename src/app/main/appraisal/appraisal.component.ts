import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

//import { Photo } from '../../models/photo';
import { fuseAnimations } from '@fuse/animations';
import { Photo } from './../../models/Photo';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



export interface DialogData {
  flagDelete: boolean;
  photo: Photo;
}

@Component({
  selector: 'appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AppraisalComponent implements OnInit {
  
  panelOpenState = false;
  step = 0;
  flag = false;
  flagDelete: boolean;
  photosArray: Photo[]= [/*
    {id: 1, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 2, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 3, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {id: 4, url: "https://material.angular.io/assets/img/examples/shiba2.jpg"}*/
  ];
  selectedPhoto: Photo = new Photo();
  imagePath: string;
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

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
    //this._DomSanitizationService.bypassSecurityTrustUrl(photo.src);
    // Create Http Request Instance.
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) console.log(xhttp.responseText);
    };
    // Create Data Form Instance.
    const formData = new FormData();
    // Add blob object into instance.
    //formData.append("photo", evt.target.files[0]);
    // Open and send data to endpoint /upload
    /*xhttp.open('POST', window.location.href + 'upload', true);
    xhttp.send(formData)*/
    this.addPhoto(photo);
    
  }

  openDialog(photo: Photo) {

    this.openForEdit(photo);
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {photo: this.selectedPhoto, flagDelete: this.flagDelete}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.flagDelete = result;
      console.log(`Dialog result: ${result}`);
      if(this.flagDelete)
        this.delete();
    });
    this.flagDelete = false;
  }

  openForEdit(photo: Photo) {
    this.selectedPhoto = photo;
  }

  addPhoto(photo) {
    //this._DomSanitizationService.bypassSecurityTrustUrl(photo.src);
    //this._DomSanitizationService.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //           + photo.src.base64string);

    this.selectedPhoto.url = photo.src;
    console.log(photo.src);
    if(this.selectedPhoto.id === 0) {
      this.selectedPhoto.id = this.photosArray.length + 1;
      this.photosArray.push(this.selectedPhoto);
    }
    this.selectedPhoto = new Photo();
  }

  delete() {
    this.photosArray = this.photosArray.filter(x => x != this.selectedPhoto);
    this.selectedPhoto = new Photo();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, 
    });
    this._snackBar._openedSnackBarRef.afterDismissed().subscribe(() => {
      this.goToHome();
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<AppraisalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
