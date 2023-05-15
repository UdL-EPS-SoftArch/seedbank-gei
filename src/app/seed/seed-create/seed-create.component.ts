import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-seed-create',
  templateUrl: './seed-create.component.html',
  styleUrls: ['./seed-create.component.css'],
})
export class SeedCreateComponent implements OnInit {
  public seed: Seed;
  public commonNames: string = '';

  constructor(private router: Router, private seedService: SeedService) {}

  ngOnInit(): void {
    this.seed = new Seed();
  }

  onSubmit(): void {
    this.seed.commonName = this.commonNames.split(',');
    this.seed.beneficialFor = [];
    this.seedService
      .createResource({ body: this.seed })
      .subscribe((seed: Seed) => {
        const uri = (seed as any).uri;
        this.router.navigate([uri]).then();
      });
  }
}
