import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrl: './contacts-edit.component.scss'
})
export class ContactsEditComponent implements OnInit {
  private contactService = inject(ContactService)
  private router = inject(Router)
  contact =  this.contactService.getEmptyContact()
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
   
    this.route.data.pipe(
        map(data => data['contact']),
        filter(contact => contact),
    ).subscribe(contact => {
        this.contact = contact
    })
    console.log(this.contact)
}

  onSaveContact(){
    this.contactService.saveContact(this.contact as Contact)
    .subscribe({
        next: () => this.router.navigateByUrl('/contacts'),
        error: err => console.log('err:', err)
    })
  }
}
