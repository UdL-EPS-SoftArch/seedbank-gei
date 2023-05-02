import {Component, OnInit} from '@angular/core';
import { TakeService } from '../take.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-take-delete',
  templateUrl: './take-delete.component.html',
  styleUrls: ['./take-delete.component.css']
})
export class TakeDeleteComponent implements OnInit {
  idTake:string;
  constructor (private router: Router,private takeService: TakeService,private route: ActivatedRoute,){

  }
  ngOnInit(): void {
    this.idTake = this.route.snapshot.paramMap.get('id');
  }
  delete(){
    this.takeService.deleteResourceById(this.idTake).subscribe({next:e=>{
      console.log(e);
      this.router.navigateByUrl('/take')

    },
  error:err=>{
    console.log(err);

  }})
  }

}
