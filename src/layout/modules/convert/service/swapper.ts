

 const allCoordinateSystems = [
  {
    name: "WGS84",
    epsgCode: "4326",
    swapperCode: "+proj=longlat +datum=WGS84 +no_defs +type=crs",
  }, 
  {
    name: "TUREF / TM30",
    epsgCode: "5254",
    swapperCode: "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",
  },
];
export default allCoordinateSystems;