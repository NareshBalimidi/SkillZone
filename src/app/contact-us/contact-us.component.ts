import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // uploadedFiles: any[] = [];

  //   constructor(private messageService: MessageService) {}

  //   onUpload(event: { files: any; }) {
  //       for(let file of event.files) {
  //           this.uploadedFiles.push(file);
  //       }

  //       this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  //   }

  ngOnInit(): void {
  }



}
