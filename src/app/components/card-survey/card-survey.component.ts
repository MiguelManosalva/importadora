import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-survey',
  templateUrl: './card-survey.component.html',
  styleUrls: ['./card-survey.component.scss']
})
export class CardSurveyComponent implements OnInit {

  @Input() public viewNewSurveyCard: boolean = false;
  
  public viewDetailSurvey: boolean = true;
  public viewOptionsSurvey: boolean = true;
  public viewRecentActivity: boolean = true;
  public viewIndicators: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
