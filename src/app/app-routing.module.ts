import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsEditComponent } from './pages/contacts-edit/contacts-edit.component';
import { contactResolver } from './resolvers/contact.resolver.resolver';
import { ContactsDetailsComponent } from './pages/contacts-details/contacts-details.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'contacts', component: ContactsPageComponent, children: [
      { path: 'edit', component: ContactsEditComponent },
      { path: 'edit/:id', component: ContactsEditComponent, resolve: { contact: contactResolver } }
    ]
  },
  { path: 'contacts/:id', component: ContactsDetailsComponent,
    resolve : {contact: contactResolver}
   },
  { path: 'about', component: AboutComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
