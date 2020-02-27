import { User } from "./user";

export class UserPage {
    page: number;
    per_page: number;
    total: number;
    data: Array<User>;
}