import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Observable, take } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent implements OnInit {
  private contactService = inject(ContactService)
  contacts$: Observable<Contact[]> = this.contactService.contacts$
  ngOnInit(): void {
    this.contactService.loadContacts()
    .subscribe()
  }
  onRemovePet(contactId: string) {
    console.log(contactId)
    /*  this.loaderService.setIsLoading(true) */
     this.contactService.deleteContact(contactId)
         .pipe(take(1))
         .subscribe({
           error: err => console.log('err:', err),
         })
   }
}
