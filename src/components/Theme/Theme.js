import { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(``);

  const lightTheme = `
  ---svg-invert: invert(1);
  --color-page: #fff;
  --color-subpage: #F5F5F5;
  --color-default-text: #000;
  --color-search-block: #F9F9F9;
  --color-page-main-elements: #E8E8E8;
  --color-border: #000;
  --color-movie: #FDFDFD;
  --color-one: #2BE080;
  --color-two: #3456F3;
  --color-three: #EE3465;
  --color-four: #000;
  `;

  document.documentElement.setAttribute('style', theme);
}

export default Theme;
