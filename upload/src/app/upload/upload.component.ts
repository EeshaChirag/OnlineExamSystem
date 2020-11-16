import {  Component,  OnInit,  ViewChild  } from '@angular/core';  
import {  saveAs as importedSaveAs  } from "file-saver";  
import {  Validators,  FormBuilder  } from '@angular/forms'; 
import {  FileService  } from '../Service/file.service';  

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild('questionInput', {  
static: true  
}) questionInput;  
@ViewChild('logoInput', {  
    static: true  
}) logoInput;  
selectedFile: File = null;  
imageUrl: string;  
fileToUpload: File = null;  
saveFileForm: any;  
lstFileDetails: any; 

  constructor(private service: FileService, private formBuilder: FormBuilder) { }

  ngOnInit():void {   
    this.saveFileForm = this.formBuilder.group({  
      LevelName: ['', [Validators.required]]  
    });  
    this.service.getFiles().subscribe(result => {  
        this.lstFileDetails = result;  
    })  
}  
onSelectFile(file: FileList) {  
    this.fileToUpload = file.item(0);  
    var reader = new FileReader();  
    reader.onload = (event: any) => {  
        this.imageUrl = event.target.result;  
    }  
    reader.readAsDataURL(this.fileToUpload);  
}  

onExpSubmit() {  
    debugger;  
    if (this.saveFileForm.invalid) {  
        return;  
    }  
    let formData = new FormData();    
    formData.append('FileUpload', this.questionInput.nativeElement.files[0]);  
    formData.append('LevelName', this.saveFileForm.value.UserName);  
    this.service.AddFileDetails(formData).subscribe(result => {});  
}  
}  