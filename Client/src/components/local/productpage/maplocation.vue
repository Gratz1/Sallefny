<template>
  <div class="maplocation">
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  name: "maplocation",
  data() {
    return {
      name: "",
    }
  },

  mounted: async function() {
    this.name = this.$parent.itemname;
    // alert(this.$parent.dates[0]);
    await this.$parent.setLoc();
    // alert(this.$parent.itemname);
    // alert('ehhlo');
    // alert(this.$parent.coordinates[0]);
    // alert(this.$parent.coordinates[1]);
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWhtZWRvbWFyYXIzNjUiLCJhIjoiY2tua3k3aGp0MGZxaDJzcG5ndW5peTZoZyJ9.l2J5BWx-orTqn-lRkyJAUg";

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v9",
      center: this.$parent.coordinates,
      zoom: 4.9,
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
      })
    );

    map.on("load", function() {
      // Add a new source from our GeoJSON data and set the
      // 'cluster' option to true. GL-JS will add the point_count property to your source data.
      map.addSource("posts", {
        type: "geojson",
        data: posts,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "posts",
        filter: ["has", "point_count"],
        paint: {
          // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "posts",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "posts",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 5,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
        },
      });

      map.on("click", "unclustered-point", function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // inspect a cluster on click
      map.on("click", "clusters", function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        var clusterId = features[0].properties.cluster_id;
        map
          .getSource("posts")
          .getClusterExpansionZoom(clusterId, function(err, zoom) {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      var mouseenterCursor = function() {
        map.getCanvas().style.cursor = "pointer";
      };
      var mouseLeaveCursor = function() {
        map.getCanvas().style.cursor = "";
      };
      map.on("mouseenter", "clusters", mouseenterCursor);
      map.on("mouseleave", "clusters", mouseLeaveCursor);
      map.on("mouseenter", "unclustered-point", mouseenterCursor);
      map.on("mouseleave", "unclustered-point", mouseLeaveCursor);
    });
  },
};
</script>

<style scoped>
a {
  color: #00b7ff;
}
#map {
  width: 100%;
  height: 500px;
}

.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
.mapboxgl-canvas {
  position: relative;
  width: 100%;
  height: 460px;
}
</style>
