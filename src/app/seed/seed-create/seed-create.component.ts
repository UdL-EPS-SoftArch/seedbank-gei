import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { Router } from '@angular/router';
import { SeedService } from '../seed.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-seed-create',
  templateUrl: './seed-create.component.html',
  styleUrls: ['./seed-create.component.css'],
})
export class SeedCreateComponent implements OnInit {
  public seed: Seed;
  public commonNameInput: string = '';
  public commonNamesList: any = [];
  public seedForm: FormGroup;
  constructor(private router: Router, private seedService: SeedService) {}

  ngOnInit(): void {
    this.seed = new Seed();
    this.seedForm = new FormGroup({
      scientificName: new FormControl(this.seed.scientificName, [
        Validators.required,
        this.scientificNameValidator(),
      ]),
      commonName: new FormControl(this.commonNameInput),
    });
  }

  scientificNameValidator(): ValidatorFn {
    const nameRe: RegExp = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = !nameRe.test(control.value);
      return invalid ? { invalidName: { value: control.value } } : null;
    };
  }

  get scientificName() {
    return this.seedForm.get('scientificName');
  }

  get commonName() {
    return this.seedForm.get('commonName');
  }

  addCommonName() {
    this.commonNamesList.push(this.commonName.value);
    this.commonNameInput = '';
    console.log(this.commonNamesList);
  }

  onSubmit(): void {
    /* this.seed.commonName = this.commonNames.split(','); */
    this.seed.commonName = this.commonNamesList;
    this.seed.beneficialFor = [];
    this.seedService
      .createResource({ body: this.seed })
      .subscribe((seed: Seed) => {
        const uri = (seed as any).uri;
        this.router.navigate([uri]).then();
      });
  }
}
