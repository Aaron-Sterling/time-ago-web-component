import { Component, Prop, State } from '@stencil/core';

import differenceInMinutes from 'date-fns/difference_in_minutes';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

@Component({
  tag: 'time-ago',
  styleUrl: 'time-ago.css',
  shadow: true
})
export class TimeAgo {

  @Prop() time: Date | string  | number = '';
  @Prop() seconds: boolean = false;
  //
  @State() refreshToggle: boolean = true;
  //
  private agoExpression: string;

  componentWillLoad() {
    this.setAgoExpression();
    this.setRefreshTimer();
  } 

  componentDidUpdate() {
    this.setRefreshTimer();
  }

  private setRefreshTimer() {
    setTimeout(_ => this.refresh(), this.backoff(this.time));
  }

  // It is not enough to tie the refresh to a change in agoExpression
  // agoExpression may not change after a single check
  // but we want to recalculate a new backoff amount anyway
  // so we use refreshToggle to force a refresh every time the backoff timer expires
  private refresh() {
    this.setAgoExpression();
    this.refreshToggle = !this.refreshToggle;
  }

  // modify this if you want different prefix, suffix, etc., in the Time Ago Expression
  private setAgoExpression() {
    let expression: string;
    if (this.seconds) {
      expression = distanceInWordsToNow(this.time, {includeSeconds: true}) + ' ago';
    } else {
      expression = distanceInWordsToNow(this.time, {includeSeconds: false}) + ' ago';
    }
    this.agoExpression = expression;
  }

  // calculates the amount of time to wait before the next refresh
  private backoff(time: Date | string | number): number {
    let minutesElapsed = differenceInMinutes(new Date(), time);
		let backoffAmountInSeconds: number;
		if (minutesElapsed < 2) {
			backoffAmountInSeconds = 5;
		}
		else if (minutesElapsed >= 2 && minutesElapsed < 5) {
			backoffAmountInSeconds = 15;
		}
		else if (minutesElapsed >= 5 && minutesElapsed < 60) {
			backoffAmountInSeconds = 30;
		}
		else if (minutesElapsed >= 60) {
			backoffAmountInSeconds = 300; // 5 minutes
		}
		return backoffAmountInSeconds * 1000;
  }
  
  // render the output

  render() {
    return (
      <span>{this.agoExpression}</span>
    );
  }
}
