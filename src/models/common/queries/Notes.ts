import { Alarms, Expansions } from '../../models';

export default class Notes {
  subject: string;
  expansion: Expansions;
  alarm_level: Alarms;
  body: string;

  constructor(
    subject: string,
    expansion: Expansions,
    alarmLevel: Alarms,
    body: string,
  ) {
    this.subject = subject;
    this.expansion = expansion;
    this.alarm_level = alarmLevel;
    this.body = body;
  }
}
