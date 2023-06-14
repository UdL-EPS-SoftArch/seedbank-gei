import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seed-update',
  templateUrl: './seed-update.component.html',
  styleUrls: ['./seed-update.component.css'],
})
export class SeedUpdateComponent implements OnInit {
  closeResult = '';
  public id: string = '';
  public isModalSaved: boolean = false;
  public seed: Seed = new Seed();
  public seeds: Seed[] = [];
  public commonNameInput: string = '';
  public commonNamesList: any = [];
  public beneficialForList: any = [];
  public selectedSeed: String | undefined = undefined;
  public showModal: boolean = false;
  public seedForm: FormGroup;
  public beneficialSeeds: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seedService: SeedService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.seedService.getResource(this.id).subscribe((seed: Seed) => {
      this.seed = seed;
      this.commonNamesList = this.seed.commonName;
      this.loadSeedList();
      this.loadBeneficialSeeds(this.id);
    });
    this.seedForm = new FormGroup({
      id: new FormControl(this.id),
      scientificName: new FormControl(this.seed.scientificName, [
        Validators.required,
        this.scientificNameValidator(),
      ]),
      commonName: new FormControl(this.commonNameInput, [
        this.commonNameValidator(),
      ]),
    });
  }

  loadSeedList() {
    this.seedService
      .getPage({
        sort: { scientificName: 'ASC' },
      })
      .subscribe((seeds: PagedResourceCollection<Seed>) => {
        this.seeds = seeds.resources.sort((a, b) =>
          a.scientificName.localeCompare(b.scientificName)
        );
        this.beneficialSeeds = this.seeds.map((obj) => ({
          ...obj,
          isChecked: false,
        }));
      });
  }

  loadBeneficialSeeds(id: string) {
    this.seedService.getBeneficialFor(id).subscribe((response) => {
      this.seed.beneficialFor = response._embedded.seeds;
      this.beneficialSeeds.forEach((seed1) => {
        const matchingObj = this.seed.beneficialFor.find(
          (seed2) => seed2.uri === seed1.uri
        );
        if (matchingObj) {
          seed1.isChecked = true;
        }
      });
    });
  }

  scientificNameValidator(): ValidatorFn {
    const nameRe: RegExp = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = !nameRe.test(control.value);
      return invalid ? { invalidName: { value: control.value } } : null;
    };
  }

  commonNameValidator(): ValidatorFn {
    const nameRe: RegExp = /^$|^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
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
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onChangeBeneficialFor(seed) {
    if (this.beneficialForList.includes(seed)) {
      this.beneficialForList = this.beneficialForList.filter(
        (item) => item !== seed
      );
    } else {
      this.beneficialForList.push(seed);
    }
  }

  saveAndClose(modal: any) {
    this.isModalSaved = true;
    modal.close('Save click');
  }

  addCommonName(commonNameInput: string) {
    if (commonNameInput !== '' && this.seedForm.controls['commonName'].valid) {
      this.commonNamesList.push(commonNameInput);
      this.commonNameInput = '';
    }
  }

  removeCommonName(index: number) {
    this.commonNamesList.splice(index, 1);
  }

  onSubmit(): void {
    this.seed.commonName = this.commonNamesList;
    this.seed.beneficialFor = this.beneficialForList.sort((a, b) =>
      a.scientificName.localeCompare(b.scientificName)
    );
    this.seedService.patchResource(this.seed).subscribe((patchedSeed: Seed) => {
      this.router.navigate(['seeds', patchedSeed.id]);
    });
  }
}
