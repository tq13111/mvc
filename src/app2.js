import "./app2.css";
import $ from "jquery";
const app2 = `<section id="app2">
<ol class="tab-bar">
  <li>1</li>
  <li>2</li>
</ol>
<ol class="tab-content">
  <li>内容1</li>
  <li>内容2</li>
</ol>
</section>`;
$(app2).appendTo($("body>.page"));
const $bar = $(".tab-bar");
const $content = $(".tab-content");
const localKey = "bar-index";
const index = localStorage.getItem(localKey) || 0;
$bar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  localStorage.setItem(localKey, index);
  $content
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $li.addClass("section").siblings().removeClass("section");
});
$bar.children().eq(index).trigger("click");
