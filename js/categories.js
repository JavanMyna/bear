var CAT = (function() {
  var defaults = [
    { name: "Food",          emoji: "🍔", color: "#FF6384" },
    { name: "Transport",     emoji: "🚗", color: "#36A2EB" },
    { name: "Bills",         emoji: "🧾", color: "#FFCE56" },
    { name: "Shopping",      emoji: "🛍️", color: "#4BC0C0" },
    { name: "Entertainment", emoji: "🎬", color: "#9966FF" },
    { name: "Health",        emoji: "💊", color: "#FF9F40" },
    { name: "Other",         emoji: "📦", color: "#C9CBCF" }
  ];

  function getCustom() {
    try { return JSON.parse(localStorage.getItem("customCats") || "[]"); } catch(e) { return []; }
  }

  function all() {
    return defaults.concat(getCustom());
  }

  function colorFor(name) {
    var found = all().find(function(c) { return c.name === name; });
    return found ? found.color : "#C9CBCF";
  }

  function emojiFor(name) {
    var found = all().find(function(c) { return c.name === name; });
    return found ? found.emoji : "📦";
  }

  return { defaults: defaults, getCustom: getCustom, all: all, colorFor: colorFor, emojiFor: emojiFor };
})();
