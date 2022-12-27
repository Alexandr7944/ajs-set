class Character {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (this.members.has(name)) {
      throw new Error('Персоонаж не может быть выбран');
    } else {
      this.members.add(name);
    }
  }

  addAll(names = []) {
    names.forEach((name) => this.members.add(name));
  }

  toArray() {
    return [...this.members];
  }
}

export default Character;
