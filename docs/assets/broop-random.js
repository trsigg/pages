window.BroopRandom = (function () {
  function normalizeWeight(node) {
    return typeof node.weight === "number" ? node.weight : 1;
  }

  function pickWeighted(nodes, inheritedEmbed, inheritedBlocked) {
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
    return resolveNode(chosen, inheritedEmbed, inheritedBlocked);
  }

  function resolveNode(node, inheritedEmbed, inheritedBlocked) {
    var embed = typeof node.embed === "function" ? node.embed : inheritedEmbed;
    var blocked =
      typeof node.blocked === "boolean" ? node.blocked : inheritedBlocked;
    if (node.children && node.children.length) {
      return pickWeighted(node.children, embed, blocked);
    }
    return {
      url: node.url,
      embed: embed,
      blocked: blocked,
    };
  }

  return {
    pickTarget: function (root) {
      return resolveNode(root, root.embed, false);
    },
  };
})();
