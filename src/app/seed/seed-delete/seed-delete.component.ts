import { Component, OnInit } from '@angular/core';
import { SeedService } from '../seed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seed-delete',
  templateUrl: './seed-delete.component.html',
  styleUrls: ['./seed-delete.component.css'],
})
export class SeedDeleteComponent implements OnInit {
  idSeed: string;
  constructor(
    private router: Router,
    private seedService: SeedService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.idSeed = this.route.snapshot.paramMap.get('id');
  }
  delete() {
    this.seedService.deleteResourceById(this.idSeed).subscribe({
      next: (e) => {
        console.log(e);
        this.router.navigateByUrl('/seed');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
