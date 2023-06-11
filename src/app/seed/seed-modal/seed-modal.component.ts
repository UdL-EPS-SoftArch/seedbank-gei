import { Component, OnInit } from '@angular/core';
import { SeedService } from '../seed.service';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Seed } from '../seed';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.css'],
})
export class SeedModalComponent implements OnInit {
  closeResult = '';

  public seeds: Seed[] = [];
  constructor(
    private seedService: SeedService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
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
}
