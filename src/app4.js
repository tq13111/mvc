import "./app4.css"
import $ from 'jquery'
const app4 =`<section id="app4">
<div class="round"></div>
</section>`
$(app4).appendTo($('body>.page'))
const $round =$('.round')
$round.on('mouseover',()=>{
    $round.addClass('active')
}).on('mouseout',()=>{
    $round.removeClass('active')
})
