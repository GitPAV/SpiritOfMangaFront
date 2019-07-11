import { Component, OnInit } from '@angular/core';
import { ArchiveOrderService } from '../../../services/archive-order.service'

@Component({
  selector: 'app-archive-users-list',
  templateUrl: './archive-users-list.component.html',
  styleUrls: ['./archive-users-list.component.scss']
})
export class ArchiveUsersListComponent implements OnInit {
listUsers; 
  constructor(private archiveOrderService: ArchiveOrderService) { }

  ngOnInit() {
    this.getListUser()
  }

  getListUser(){
    return this.archiveOrderService.getListUsersArchive().subscribe(
      item => {
        this.listUsers = item
        console.log(this.listUsers)
      }
    )
  }

}
