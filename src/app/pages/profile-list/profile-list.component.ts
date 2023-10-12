import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.loading = true;
    const url = '/api/profiles?page=' + this.currentPage;
    this.http.get<any>(url).subscribe((response) => {
      this.loading = false;
      this.profiles = response.profiles;
      this.totalPages = response.totalPages;
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