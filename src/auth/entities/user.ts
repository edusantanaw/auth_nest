import { randomUUID } from 'node:crypto';

type data = {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export class Userenti {
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
  }

  public getUser() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };
  }
}
