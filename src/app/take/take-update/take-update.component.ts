import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/login-basic/user';
import { Take } from '../take-model';
import { TakeService } from '../take.service';

@Component({
  selector: 'app-take-update',
  templateUrl: './take-update.component.html',
  styleUrls: ['./take-update.component.css']
})
export class TakeUpdateComponent implements OnInit {
  public user: User = new User();
  public take: Take =  new Take();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private takeService: TakeService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.takeService.getResource(id).subscribe(
      (take: Take) => this.take = take );
  }

  onSubmit(): void {
    this.takeService.patchResource(this.take).subscribe(
      (patchedTake: Take) => {
        console.log(patchedTake);
        this.router.navigate(['take', patchedTake.id]);
        });
  }
}
