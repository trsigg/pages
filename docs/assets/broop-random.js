window.BroopRandom = (function () {
  function normalizeWeight(node) {
    return typeof node.weight === "number" ? node.weight : 1;
  }

  function pickWeighted(nodes, inheritedProps) {
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
    return resolveNode(chosen, inheritedProps);
  }

  function resolveNode(node, inheritedProps) {
    var props = {
      embed: inheritedProps.embed,
      blocked: inheritedProps.blocked,
      squouch: inheritedProps.squouch,
    };
    if (typeof node.embed === "function") {
      props.embed = node.embed;
    }
    if (typeof node.blocked === "boolean") {
      props.blocked = node.blocked;
    }
    if (typeof node.squouch === "boolean") {
      props.squouch = node.squouch;
    }
    if (node.children && node.children.length) {
      return pickWeighted(node.children, props);
    }
    return {
      url: node.url,
      properties: props,
    };
  }

  return {
    pickTarget: function (root) {
      return resolveNode(root, {
        embed: root.embed,
        blocked: false,
        squouch: false,
      });
    },
  };
})();
