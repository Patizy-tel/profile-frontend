import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/tools/services';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  loading: boolean = true;
  profiles: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private profileService:ProfileService) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.loading = true;
    this.profileService.getPaginatedProfile(this.currentPage).subscribe((response:any) => {
      console.log(response)
      this.loading = false;
      this.profiles = response.content;
      this.totalPages = response.total;
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProfiles();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProfiles();
    }
  }
}