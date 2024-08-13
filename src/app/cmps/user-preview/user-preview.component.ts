import { Component, inject, input, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrl: './user-preview.component.scss'
})
export class UserPreviewComponent implements OnInit {
  private userService = inject(UserService)
  @Input() user!: User[] 
  ngOnInit(): void {
      console.log(this.user)
   
  }
}
