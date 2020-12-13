import "./app2.css";
import $ from "jquery";
import View from './base/view'
const eventBus = $(window);
const localKey = "bar-index";
const m = {
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0,
  },
  updata(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:updatad");
    localStorage.setItem(localKey, data.index);
  },
};

const init = (el)=>{
  new View({
    el: el,
    data:m.data,
    eventBus:eventBus,
    html(index) {
      return `<section id="app2">
        <ol class="tab-bar">
          <li class="${index === 0 ? "section" : ""}" data-index='0'>1</li>
          <li class="${index === 1 ? "section" : ""}" data-index='1'>2</li>
        </ol>
        <ol class="tab-content">
          <li class="${index === 0 ? "active" : ""}">内容1</li>
          <li class="${index === 1 ? "active" : ""}">内容2</li>
        </ol>
        </section>`;
    },
    render(data) {
      const index = data.index
      if (this.el.length !== 0) this.el.empty();
      $(this.html(index)).appendTo($(this.el));
    },
    events: {
      "click .tab-bar li": "x",
    },
    x(e) {
      const index = parseInt(e.currentTarget.dataset.index)
      m.updata({index:index});
    },
  });
} 

export default init;

