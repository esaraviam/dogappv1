import Uid from "../interfaces/uid";


export class Entity implements Uid {
  id: number;
  constructor() {
    this.id = this.generateId();
  }
  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
