import core from "./core/core.json";
import node from "./node/node.json";

const libraries = [core, node];

export default libraries.reduce((accu, curr) => {
  let newAccu = { ...accu };
  Object.keys(curr.methods).forEach(method => {
    const stage = curr.methods[method].stage || "Misc";
    newAccu[stage] = newAccu[stage] || [];
    newAccu[stage].push({
      ...curr.methods[method],
      method: `${curr.key}.${method}`,
      required: curr.methods[method].required === "always",
      library: curr.key
    });
  });
  return newAccu;
}, {});
