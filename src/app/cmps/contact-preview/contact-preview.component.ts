import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent implements OnInit {
  
@Input() contact!: Contact 
@Output() remove = new EventEmitter<string>()
ngOnInit(): void {
 
}
onRemoveContact(){
  
  this.remove.emit(this.contact._id)
}
}
