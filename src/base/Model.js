import EventBus from "./eventBus";

class Model extends EventBus {
  constructor(options) {
    super();
    const keys = ["data", "updata", "create", "delete", "get"]
    keys.forEach((key) => {
      if (key in options) {
        this[key] = options[key];
      }
    });
  }
  create() {}
  delete() {}
  updata() {
    console?.error?.("还没有实现 updata");
  }
  get() {}
}
export default Model;
