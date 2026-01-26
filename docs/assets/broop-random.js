window.BroopRandom = (function () {
  function normalizeWeight(node) {
    return typeof node.weight === "number" ? node.weight : 1;
  }

  function pickWeighted(nodes, inheritedEmbed) {
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
    return resolveNode(chosen, inheritedEmbed);
  }

  function resolveNode(node, inheritedEmbed) {
    var embed = typeof node.embed === "function" ? node.embed : inheritedEmbed;
    if (node.children && node.children.length) {
      return pickWeighted(node.children, embed);
    }
    return {
      url: node.url,
      embed: embed,
    };
  }

  return {
    pickTarget: function (root) {
      return resolveNode(root, root.embed);
    },
  };
})();
