import $ from "jquery";
import EventBus from './eventBus'
class View extends EventBus{
  constructor(options) {
    super()
    Object.assign(this, options);
    this.el = $(this.el);
    this.render(this.data);
    this.autoBindEvents();
    this.on("m:updatad", () => {
      this.render(this.data);
    });
  }
  autoBindEvents() {
    for (let key in this.events) {
      const spaceIndex = key.indexOf(" ");
      const part1 = key.slice(0, spaceIndex);
      const part2 = key.slice(spaceIndex + 1);
      const value = this[this.events[key]];
      this.el.on(part1, part2, value);
    }
  }
}
export default View;
