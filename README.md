# Leaflet-Challenge
## Module 15 Challenge
### by Eduardo Almonte

## Introduction

The United States Geological Survey (USGS) plays a crucial role in providing scientific data on natural hazards, ecosystem health, environmental changes, and the impacts of climate and land use. Their team of scientists continuously develops new methods and tools to deliver timely and relevant insights about the Earth's processes. However, the USGS currently faces a challenge in effectively visualizing the vast amount of earthquake data they collect from around the world each day. To address this, you have been tasked with creating a visualization tool that will help the USGS present their earthquake data more meaningfully. This tool aims to enhance public education and inform other government agencies, while also supporting the USGS's efforts to secure funding for addressing these critical planetary issues.

## Instructions:
Complete the following steps:

1. Get your dataset. To do so, follow these steps:
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize.

![USGS](https://github.com/almonte951/Leaflet-Challenge/blob/main/Images/3-Data.png)

When you click a dataset (such as "Significant Earthquakes from the Past 30 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.

![json data](https://github.com/almonte951/Leaflet-Challenge/blob/main/Images/4-JSON.png)

2. Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
  Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
  Hint: The depth of the earth can be found as the third coordinate for each earthquake.
  
Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the following map:

![map](https://github.com/almonte951/Leaflet-Challenge/blob/main/Images/map%20.png)

## References
Dataset created by the United States Geological Survey
(https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

![USGS logo](https://github.com/almonte951/Leaflet-Challenge/blob/main/Images/1-Logo.png)
