import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial, Pizza } from 'src/app/models/tutorial.model';
import { JsonPipe } from '@angular/common';
import { devOnlyGuardedExpression } from '@angular/compiler';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    pizzas: [],
    published: false
  };
  
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          if(data.pizzas) {
            var t: Array<Pizza> = JSON.parse(data.pizzas?.toString());
            data.pizzas = t;
          }
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'Order updated!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(p? : Pizza): void {
    this.message = '';

    var t: Array<Pizza> = [];
    if (this.currentTutorial.pizzas && p) {
      t = this.currentTutorial.pizzas;
      var index: number = t.indexOf(p, 0);
      if (index > -1) {
        t.splice(index, 1);
      }
      this.currentTutorial.pizzas = t;
    }

    var updateObject = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      pizzas: JSON.stringify(this.currentTutorial.pizzas),
      published: this.currentTutorial.published
    }

    this.tutorialService.update(this.currentTutorial.id, updateObject)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Pizza removed from order successfully';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}