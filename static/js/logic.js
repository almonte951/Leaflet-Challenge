// Fetch the dataset for significant earthquakes from the past 30 days
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
  .then(response => response.json())
  .then(data => {
    const { features } = data;

    // Extract coordinates for all features and calculate bounds
    const coordinates = features.map(({ geometry: { coordinates } }) => [coordinates[1], coordinates[0]]);
    const bounds = L.latLngBounds(coordinates);

    // Initialize the map and set its bounds
    const map = L.map('map').fitBounds(bounds);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Function to get color based on depth
    const getColor = depth => {
      return depth < 10 ? '#a3f600' :
             depth < 30 ? '#dcf400' :
             depth < 50 ? '#f7db11' :
             depth < 70 ? '#fdb72a' :
             depth > 90 ? '#fca35d' : '#ff5e64';
    };

    // Function to create a marker for each earthquake
    const createMarker = ({ properties: { mag, place }, geometry: { coordinates } }) => {
      const [lng, lat, depth] = coordinates;

      const marker = L.circleMarker([lat, lng], {
        radius: mag * 4,
        fillColor: getColor(depth),
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.75
      }).addTo(map);

      // Bind a popup with quake details
      marker.bindPopup(`<h3>QUAKE INFO</h3>Place: ${place}<br>Magnitude: ${mag}<br>Depth: ${depth}`);
    };

    // Create markers for all features
    features.forEach(createMarker);

    // Create and add the legend to the map
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const depths = [0, 10, 30, 50, 70, 90];
      const colors = ['#a3f600', '#dcf400', '#f7db11', '#fdb72a', '#fca35d', '#ff5e64'];
      
      // Add legend title
      div.innerHTML = "<h4>Depth (km)</h4>";

      // Loop through depth intervals to generate the legend
      depths.forEach((depth, index) => {
        div.innerHTML += `
          <i style="background:${colors[index]}; width: 20px; height: 20px; display: inline-block; margin-right: 5px;"></i>
          ${depth} ${depths[index + 1] ? '- ' + depths[index + 1] : '+'}<br>`;
      });

      return div;
    };

    legend.addTo(map);
  })
  .catch(error => console.error('Error fetching earthquake data:', error));
