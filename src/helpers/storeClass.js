export class StoreClass {
  data;
  name;

  constructor (name) {
    this.name = name || 'phaser-js-game';
    this.data = {};
  }

  read () {
    const json = localStorage.getItem(this.name);
    if (!json) {
      return;
    }
    try {
      this.data = JSON.parse(json);
    } catch (e) {
      console.log(e);
    }
  }

  save () {
    const json = JSON.stringify(this.data);
    localStorage.setItem(this.name, json);
  }

  getAll () {
    return this.data;
  }

  get (key, def = undefined) {
    return this.data[key] || def;
  }

  setAll (data) {
    this.data = data;
    this.save();
  }

  set (key, value) {
    this.data[key] = value;
    this.save();
  }
}
