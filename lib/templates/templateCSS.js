'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var css = '\n\nbody {\n\tbackground-color: #F7F7F7;\n}\n\n#subHeaderWrapper {\n\tpadding: 20px;\n}\n\n.innerHtmlStyles {\n\tmargin-top: 10px;\n}\n.innerHtmlStyles p, .innerHtmlStyles ol, .innerHtmlStyles ul  {\n\tmargin-top: 10px;\n}\n\n@media\nonly screen and (max-width: 600px),\n(min-device-width: 600px) and (max-device-width: 1024px)  {\n\n\t/* Force table to not be like tables anymore */\n\ttable, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n\t.emailHeader td {\n\t\twidth: 100%;\n\t}\n\n\t.emailHeader td img {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t} \n\n\t#subHeaderWrapper {\n\t\twidth: 100%;\n\t\tpadding: 0px;\n\t}\n\n\t.report td {\n\t\t/* Behave  like a "row" */\n\t\tborder: none;\n\t\tborder-bottom: 1px solid #eee;\n    position: relative;\n    text-align: center;\n\t}\n\n\t.report td:before {\n\t\t/* Now like a table header */\n\t\tposition: absolute;\n\t\t/* Top/left values mimic padding */\n\t\ttop: 6px;\n\t\tleft: 6px;\n\t\twidth: 45%;\n\t\tpadding-right: 10px;\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.customButton:hover {\n\t\tcolor:black;\n\t\t\n\t}\n\n\n/*End of media query*/\n}\n\n\n\t\n\t'.trim();

exports.default = css;
