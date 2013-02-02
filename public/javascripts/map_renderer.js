(function(window) {
  function MapRenderer(_domElement) {
    this.domElement = _domElement;

    this.centerAt = function(location) {
      var map = L.map(this.domElement).setView([location.lat, location.lon], 13);
    }
  }
  window.MapRenderer = MapRenderer;
})(window);
