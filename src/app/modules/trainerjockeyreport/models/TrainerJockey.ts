import { TrainerJockeyHorse } from './TrainerJockeyHorse';

export class TrainerJockey {
  trainerJockeyComboFormId: number;
  trainer: string;
  jockey: string;
  runs: number;
  wins: number;
  placed: number;
  winPercent: number;
  placedPercent: number;
  winProfitLoss: number;
  placedProfitLoss: number;
  ae: number;
  iv: number;
  formType: string;
  trainerJockeyComboFormHorse: TrainerJockeyHorse[];
}
