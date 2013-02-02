(function(window) {
  
  function MapRenderer(_domElement) {
    this.domElement = _domElement;

    this.centerAt = function(location) {

      var map = L.map(this.domElement);
      map.setView([location.lat, location.lon], 13);

      var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                  { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }
                 );
       tiles.addTo(map);

      return this;
    };

    return this;

  }
  window.MapRenderer = MapRenderer;
})(window);