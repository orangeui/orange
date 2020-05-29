import ColorList from "./ColorList.js";

var ColorBase = [];
for (var i = 0; i < ColorList.length - 1; i++) {
  for (
    var shadeIndex = ColorList[i].colorShades.length - 1;
    shadeIndex >= 0;
    shadeIndex--
  ) {
    ColorBase.push(ColorList[i].name.toLowerCase());
  }
}

// Remove duplicates from array
ColorBase = [...new Set(ColorBase)];

export default ColorBase;
