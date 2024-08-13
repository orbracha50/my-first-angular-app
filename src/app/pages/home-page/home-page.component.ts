import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  
  
  private userService = inject(UserService)
  
  user$: Observable<User[]> = this.userService.user$
  ngOnInit(): void {
    console.log(this.user$)
    this.userService.query()
    .subscribe()
   
  }

}

