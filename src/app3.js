import "./app3.css";
import $ from "jquery";
const app3 =`<section id="app3">
<div class="square"></div>
</section>`
$(app3).appendTo("body>.page")
const $square = $(".square");
const localKey = "app3.active";
const active = localStorage.getItem(localKey);
if (active === "yes") {
  $square.addClass("active");
}
$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "no");
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "yes");
  }
});
