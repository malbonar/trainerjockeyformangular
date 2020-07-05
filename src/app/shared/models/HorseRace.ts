import { RaceResultHorse } from './RaceResultHorse';
import { RaceCardHorse } from './RaceCardHorse';

export class HorseRace {
    raceId: number;
    raceCardId: number;
    raceDate: Date;
    course: string;
    going: string;
    raceTime: string;
    raceName: string;
    raceClass: number;
    raceType: string;
    distance: string;
    prizeMoney: number;
    maiden: boolean;
    handicap: boolean;
    allWeather: boolean;
    irish: boolean;
    grade: string;
    horses: (RaceResultHorse | RaceCardHorse)[];
}
