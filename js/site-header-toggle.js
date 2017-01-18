(function() {
  var siteHeader = document.getElementsByClassName("site-header").item(0);
  var headerToggle = document.getElementById("site-header-toggle");
  headerToggle.onclick = function() {
    var classes = siteHeader.className.split(" ");
    var iCollapsed = classes.indexOf("collapsed");
    if (iCollapsed === -1) {
      classes.push("collapsed");
    } else {
      classes.splice(iCollapsed, 1);
    }
    siteHeader.className = classes.join(" ");
  };
})();
