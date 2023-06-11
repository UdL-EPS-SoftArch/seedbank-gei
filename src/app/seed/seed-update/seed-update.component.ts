import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seed-update',
  templateUrl: './seed-update.component.html',
  styleUrls: ['./seed-update.component.css'],
})
export class SeedUpdateComponent {
  closeResult = '';
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
    const id = this.route.snapshot.paramMap.get('id');
    this.seedService.getResource(id).subscribe((seed: Seed) => {
      this.seed = seed;
      this.commonNamesList = this.seed.commonName;
      this.loadSeedList();
      this.loadBeneficialSeeds(id);
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
    this.commonNamesList.push(commonNameInput);
    this.commonNameInput = '';
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
