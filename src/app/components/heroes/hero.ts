export class Hero {
  description?: string;
  name: string;
  thumbnail: string;
  isActive: boolean;
  id: number;

  constructor ({name, description, thumbnail, id}) {
    this.name = name;
    this.description = description;
    this.isActive = false;
    this.thumbnail = thumbnail;
    this.id = id;
  }
}