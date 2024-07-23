const map = L.map("map");
const markers = L.markerClusterGroup();

window.onload = function () {

  initMap();

  fetchYoubikeData().then((data) => {
    console.log(data);

    clearMarkerGroup();

    //裝選單下的區域用
    const addedAreas = [];

    data.forEach((station) => {

      renderingDropDownMenu(station, addedAreas, data);

      renderingStationInfo(station);

      addMarker(station);

    });

    document.querySelector("#my_table").classList.remove("d-none");
    document.querySelector("#loading_spinner").classList.add("d-none");

  });

};
function clearMarkerGroup() {
  if (markers) {
    markers.clearLayers();
  }
}

function initMap() {
  //設定圖資
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  //設定中心位置
  map.setView([25.0415001, 121.536222], 17);
}

function addMarker(station) {
  const marker = L.marker([station.latitude, station.longitude]);

  marker.bindPopup(
    `<p class="h6">${station.sna}</p>剩餘/空位/總共:${station.available_rent_bikes}/${station.available_return_bikes}/${station.total}`
  );

  markers.addLayer(marker);
  map.addLayer(markers);
}

//下拉式選單
function renderingDropDownMenu(station, addedAreas, data) {
  // 去除重複區域
  if (addedAreas.includes(station.sarea)) {
    return;
  }
  else {
    // 添加新的區域名稱到陣列中
    addedAreas.push(station.sarea);
  }


  //增加區域的元素
  const li = document.createElement("li");
  const sareaA = document.createElement("a");
  sareaA.classList.add("dropdown-item");
  sareaA.textContent = `${station.sarea}`;
  li.append(sareaA);
  document.querySelector("#section_ul").append(li);

  //點擊li
  li.addEventListener("click", () => {
    console.log(`點擊: ${station.sarea}`);
    const dataRows = document.querySelector("#data_rows");
    dataRows.classList.remove("d-none");
    const selectArea = document.querySelector("#select_area");
    selectArea.textContent = station.sarea;
    ClearAndDisplayArea(station.sarea, data);
  });
}

function ClearAndDisplayArea(sarea, data) {
  // 清空現有資料
  clearStationInfo();
  // console.log(data);

  // console.log(sarea);
  // 過濾並顯示所選區域的資料
  data.filter(station => station.sarea === sarea)
    .forEach(station => renderingStationInfo(station));
}

function clearStationInfo() {
  const dataRows = document.querySelector(".data_rows");
  dataRows.innerHTML = '';
}

function renderingStationInfo(station) {
  const tr = document.createElement("tr");

  const sareaTd = document.createElement("td");
  sareaTd.textContent = `${station.sarea}`;

  const stationNameTd = document.createElement("td");
  stationNameTd.textContent = `${station.sna}`;

  const infoTd = document.createElement("td");
  infoTd.textContent = `${station.available_rent_bikes}/${station.available_return_bikes}/${station.total}`;

  const mapTd = document.createElement("td");
  const mapIcon = document.createElement("i");

  mapIcon.classList.add("fa-solid", "fa-map-location-dot");
  mapIcon.addEventListener("click", () => {
    map.flyTo([station.latitude, station.longitude], 18);
  });
  mapTd.append(mapIcon);

  const latLngTd = document.createElement("td");
  const latLngIcon = document.createElement("i");
  latLngIcon.classList.add("fa-solid", "fa-circle-info");
  latLngIcon.setAttribute("data-bs-toggle", "tooltip");
  latLngIcon.setAttribute(
    "data-bs-title",
    `${station.latitude},${station.longitude}`
  );
  new bootstrap.Tooltip(latLngIcon);
  latLngTd.append(latLngIcon);

  tr.append(sareaTd, stationNameTd, infoTd, mapTd, latLngTd);
  const dataRows = document.querySelector("#data_rows");
  dataRows.append(tr);

}

function fetchYoubikeData() {
  const taipeiYoubikeData =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
  return fetch(taipeiYoubikeData).then((res) => res.json());
}

//滑鼠指向map的時候要跑出手指