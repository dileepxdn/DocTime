import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      id:['', Validators.required],
      area: ['', Validators.required,],
      image_url:['', Validators.required],
      experience:['', Validators.required],
      description:['',Validators.required],
      onLeave:[false],
      phones: this.fb.array([]),
      specialization: this.fb.array([]),
      degrees: this.fb.array([]),
    });
  }

  //phones
  get phoneForms(){
    return this.myForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone = this.fb.group({
      number: ['',Validators.required],
    });
    this.phoneForms.push(phone);
  }
  
  deletePhone(i){
    this.phoneForms.removeAt(i);
  }



  // specialist
  get specializationForms(){
    return this.myForm.get('specialization') as FormArray;
  }

  addSpecialization(){
    const specialization = this.fb.group({
      specialist: ['',Validators.required],
    });
    this.specializationForms.push(specialization);
  }
  
  deleteSpecialization(i){
    this.specializationForms.removeAt(i);
  }


   // degree
   get degreeForms(){
    return this.myForm.get('degrees') as FormArray;
  }

  addDegree(){
    const degree= this.fb.group({
      degree: ['',Validators.required],
    });
    this.degreeForms.push(degree);
  }
  
  deleteDegree(i){
    this.degreeForms.removeAt(i);
  }





  async submit() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('doctors').add(formValue).then(()=>{
        this.success = true;
        console.log("in sucess"+this.success);
      });
     this.success= true;
     console.log("out sucess");


    } catch(err) {
      console.error(err);
    }

    this.loading = false;
  }



  reload(){
    this.success=false;
    this.loading=false;
    this.myForm.reset();
    this.myForm.markAsUntouched;

  }




  
  


}
