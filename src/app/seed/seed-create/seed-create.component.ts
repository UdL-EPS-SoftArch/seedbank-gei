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
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-seed-create',
  templateUrl: './seed-create.component.html',
  styleUrls: ['./seed-create.component.css'],
})
export class SeedCreateComponent implements OnInit {
  closeResult = '';
  public isModalSaved: boolean = false;
  public seeds: Seed[] = [];
  public seed: Seed;
  public commonNameInput: string = '';
  public commonNamesList: any = [];
  public benefitialForList: any = [];
  public selectedSeed: String | undefined = undefined;
  public showModal: boolean = false;
  public seedForm: FormGroup;
  constructor(
    private router: Router,
    private seedService: SeedService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.seed = new Seed();
    this.seedForm = new FormGroup({
      scientificName: new FormControl(this.seed.scientificName, [
        Validators.required,
        this.scientificNameValidator(),
      ]),
      commonName: new FormControl(this.commonNameInput),
    });
    this.loadSeedList();
  }

  loadSeedList() {
    this.seedService
      .getPage({
        sort: { scientificName: 'ASC' },
      })
      .subscribe((seeds: PagedResourceCollection<Seed>) => {
        this.seeds = seeds.resources;
      });
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

  onChangeBenefitialFor(seed) {
    if (this.benefitialForList.includes(seed)) {
      this.benefitialForList = this.benefitialForList.filter(
        (item) => item !== seed
      );
    } else {
      this.benefitialForList.push(seed);
    }
  }

  saveAndClose(modal: any) {
    this.isModalSaved = true;
    modal.close('Save click');
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
    this.commonNamesList.sort();
    this.commonNameInput = '';
  }

  removeCommonName(index: number) {
    this.commonNamesList.splice(index, 1);
  }

  removeBenefitialFor(index: number) {
    this.benefitialForList.splice(index, 1);
  }

  onSubmit(): void {
    this.seed.commonName = this.commonNamesList;
    this.seed.beneficialFor = this.benefitialForList.sort((a, b) =>
      a.scientificName.localeCompare(b.scientificName)
    );
    this.seedService
      .createResource({ body: this.seed })
      .subscribe((seed: Seed) => {
        const uri = (seed as any).uri;
        this.router.navigate([uri]).then();
      });
  }
}
