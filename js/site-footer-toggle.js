(function() {
  var siteFooter = document.getElementById("siteFooter");
  var footerToggle = document.getElementById("footerToggle");
  footerToggle.onclick = function() {
    var classes = siteFooter.className.split(" ");
    var iCollapsed = classes.indexOf("collapsed");
    if (iCollapsed === -1) {
      classes.push("collapsed");
    } else {
      classes.splice(iCollapsed, 1);
    }
    siteFooter.className = classes.join(" ");
  };
})();
