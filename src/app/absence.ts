import { Lesson } from './lesson';
import { User } from './user';

export class Absence {
    id: number;
    user: User;
    lesson: Lesson;
    week: number;
}
