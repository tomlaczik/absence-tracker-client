import { Absence } from './absence';
import { User } from './user';
import { Subject } from './subject';

export class Lesson {
    id: number;
    absences: Absence[];
    teacher: User;
    subject: Subject;
    students: User[];
    time: string;
    weekday: number;

    get day(): string { console.log('BITCH'); return 'Teszt'; }
}
