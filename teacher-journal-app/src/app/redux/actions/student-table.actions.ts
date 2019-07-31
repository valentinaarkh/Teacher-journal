export class AddStudent {
  static readonly type = '[StudentTable] Add Student';
  constructor(public payload: string) {}
}
