import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.output = `Hello, ${this.name}!`
  }

  get name() {
    return this.nameTarget.value
  }

  set output(content) {
    this.outputTarget.textContent = content
  }
}