export enum VictoryTypes {
  Alliance = 'Alliance Victory',
  Betrayed = 'Betrayed Defeat',
  Betrayal = 'Betrayal Victory',
  Defeat = 'Defeat',
  MultiAlliance = 'Multi Alliance Victory',
  PredictedDefeat = 'Predicted Defeat',
  SandTroutDefeat = 'Sand Trout Defeat',
  SandTroutSolo = 'Sand Trout Solo',
  SpecialBeneGesserit = 'Bene Gesserit Prediction',
  SpecialFremen = 'Fremen Special',
  SpecialSpacingGuild = 'Spacing Guild Special',
  TrueSolo = 'True Solo',
}

export const VictoryTypeList: VictoryTypes[] = [
  VictoryTypes.Alliance,
  VictoryTypes.Betrayal,
  VictoryTypes.MultiAlliance,
  VictoryTypes.SandTroutSolo,
  VictoryTypes.SpecialBeneGesserit,
  VictoryTypes.SpecialFremen,
  VictoryTypes.SpecialSpacingGuild,
  VictoryTypes.TrueSolo,
];
