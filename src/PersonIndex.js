import { Person } from './model/Person';

export class PersonIndex {
  constructor() {
    this.props = {};
    let person = new Person( 'Stefan', 'Walther' );
    this.props.person = person;
    this.props.fullName = person.fullName;
  }

  get person() {
    return this.props.person;
  }
}

