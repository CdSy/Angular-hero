export class Hero {
  description?: string;
  name: string;
  thumbnail: string;
  isActive: boolean;

  constructor (name, description, thumbnail) {
    this.name = name;
    this.description = description;
    this.isActive = false;
    this.thumbnail = thumbnail;
  }
}