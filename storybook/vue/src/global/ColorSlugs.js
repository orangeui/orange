import ColorList from "./ColorList.js";

var ColorSlugs = [];
for (var i = 0; i < ColorList.length - 1; i++) {
  for (
    var shadeIndex = ColorList[i].colorShades.length - 1;
    shadeIndex >= 0;
    shadeIndex--
  ) {
    ColorSlugs.push(ColorList[i].colorShades[shadeIndex].slug);
  }
}

export default ColorSlugs;
