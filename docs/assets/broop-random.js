window.BroopRandom = (function () {
  function normalizeWeight(node) {
    return typeof node.weight === "number" ? node.weight : 1;
  }

  function pickWeighted(nodes) {
    var totalWeight = nodes.reduce(function (sum, node) {
      return sum + normalizeWeight(node);
    }, 0);
    var roll = Math.random() * totalWeight;
    var chosen = nodes[0];
    for (var i = 0; i < nodes.length; i++) {
      roll -= normalizeWeight(nodes[i]);
      if (roll <= 0) {
        chosen = nodes[i];
        break;
      }
    }
    if (chosen.children && chosen.children.length) {
      return pickWeighted(chosen.children);
    }
    return chosen.url;
  }

  return {
    pickUrl: function (sites) {
      return pickWeighted(sites);
    },
  };
})();
