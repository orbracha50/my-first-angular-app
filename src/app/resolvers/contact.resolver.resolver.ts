import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

export const contactResolver: ResolveFn<Contact> = (route, state) => {
  const id = route.params['id']
  const contactService = inject(ContactService)
  return contactService.getContactById(id)
  .pipe()
};
