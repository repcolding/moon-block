var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils/query-all.ts
var queryAll = (selector) => {
  return [...document.querySelectorAll(selector)];
};

// src/index.ts
var moonBlock = (selector, cb) => {
  const listComponents = queryAll(selector).map((block) => {
    const others = [];
    return {
      others,
      methods: cb({ block, others })
    };
  });
  for (const component of listComponents) {
    const filterList = listComponents.filter((item) => item !== component);
    filterList.forEach((otherComponent) => __async(void 0, null, function* () {
      return component.others.push(yield otherComponent.methods);
    }));
  }
};
export {
  moonBlock
};
