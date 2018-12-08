import { Lesson } from './lesson';
import { Absence } from './absence';

enum Role { STUDENT, TEACHER, ADMIN }

export class User {
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    id: number;
    username: string;
    password: string;
    enabled: boolean;
    role: Role;
    activeLessons: Lesson[];
    taughtLessons: Lesson[];
    absences: Absence[];
}
