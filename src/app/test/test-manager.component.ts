import { Component } from '@angular/core';

@Component({
  selector: 'test-manager',
  templateUrl: `test-manager.component.html`,
  styles: [''],
})
export class TestManagerComponent {
  public questions = [
    {
      statement: 'AAA',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userOption: 0,
    },
    {
      statement: 'BBB',
      option1: 'B1',
      option2: 'B2',
      option3: 'B3',
      option4: 'B4',
      correctAnswer: 1,
      marks: 5,
      userOption: 0,
    },
    {
      statement: 'CCC',
      option1: 'C1',
      option2: 'C2',
      option3: 'C3',
      option4: 'C4',
      correctAnswer: 1,
      marks: 5,
      userOption: 0,
    },
  ];

  public isFinished = false;
  public totalMarks = 0;
  public userMarks = 0;
  public finish() {
    this.totalMarks = 0;
    this.userMarks = 0;
    for (let question of this.questions) {
      if (question.userOption === question.correctAnswer) {
        this.userMarks += question.marks;
      }

      this.totalMarks += question.marks;
      this.isFinished = true;
    }
  }
}
