import "./app1.css";
import $ from "jquery";
import Model from "./base/Model";
import View from "./base/view";

const m = new Model({
  data: {
    n: parseFloat(localStorage.getItem("n")) || 100,
  },
  updata(data) {
    Object.assign(m.data, data);
    this.trigger("m:updatad");
    localStorage.setItem("n", data.n);
  },
});

const c = (el) => {
  new View({
    el: el,
    data: m.data,
    html: `<div>
      <div class="output">
        <span id="number">{{n}}</span>
      </div>
      <div class="actions">
        <button id="add1">+1</button>
        <button id="minus1">-1</button>
        <button id="mul2">*2</button>
        <button id="division2">/2</button>
      </div>
      </div>
     `,
    render() {
      if (this.el.length !== 0) this.el.empty();
      $(this.html.replace("{{n}}", m.data.n)).appendTo($(this.el));
    },
    events: {
      "click #add1": "add",
      "click #minus1": "minus",
      "click #mul2": "mul",
      "click #division2": "division",
    },
    add() {
      m.updata({ n: m.data.n + 1 });
    },
    minus() {
      m.updata({ n: m.data.n - 1 });
    },
    mul() {
      m.updata({ n: m.data.n * 2 });
    },
    division() {
      m.updata({ n: m.data.n / 2 });
    },
  });
};
export default c;
