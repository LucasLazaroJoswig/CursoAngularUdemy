import { Component, Input, input, computed,Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Output() select = new EventEmitter();

  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>()



  imagePath = computed(() =>{
    return 'assets/users/'+this.avatar();
  })
  // get imagePath(){
  //   return 'assets/users/'+this.avatar;
  // }

  onSelectedUser() {
    this.select.emit(this.id());
  }

}
