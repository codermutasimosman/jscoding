var _0x507e = [
  "click",
  "handlePasteClick",
  "extension",
  "getBackgroundPage",
  "#id_session_paste",
  "hidden",
];
(function (_0x3dd39d, _0x507e85) {
  var _0x534da5 = function (_0x4deee0) {
    while (--_0x4deee0) {
      _0x3dd39d["push"](_0x3dd39d["shift"]());
    }
  };
  _0x534da5(++_0x507e85);
})(_0x507e, 0x167);
var _0x534d = function (_0x3dd39d, _0x507e85) {
  _0x3dd39d = _0x3dd39d - 0x0;
  var _0x534da5 = _0x507e[_0x3dd39d];
  return _0x534da5;
};
var backgroundPage = chrome[_0x534d("0x3")][_0x534d("0x4")]();
function hideCopySuccessDelay(_0x23b298) {
  setTimeout(function () {
    $("#copy_success")["addClass"](_0x534d("0x0")), window["close"]();
  }, _0x23b298);
}
$(_0x534d("0x5"))[_0x534d("0x1")](function () {
  backgroundPage[_0x534d("0x2")](), window["close"]();
});
