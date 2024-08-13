import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrl: './contacts-details.component.scss'
})
export class ContactsDetailsComponent {
  /* @Input() contactId!: string */
  @Output() back = new EventEmitter()
  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  contact$ : Observable<Contact> = this.route.data.pipe(map(data => data['contact']))
  onBack() {
    this.router.navigateByUrl('/contacts')
    // this.router.navigate(['/pet'], {queryParams: {name:'baba', age:123}})
}

}
