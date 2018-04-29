<script >
  function loop ($swap) {
var next = $swap.find("li.visible").removeClass("visible").index() + 1;

if(next >= $swap.find("li").length) {
next = 0;
}

$swap.width($($swap.find("li").get(next)).addClass("visible").outerWidth());
$swap.css({ "transform" : "translateY(-" + next * 3 + "rem)" });

setTimeout(function () { loop($swap); }, 2000);
};

$(function () {
$(".swap").each(function () {
var $this = $(this);

$this.find("li").each(function () {
  $(this).css({ top: $(this).index() * 3 + "rem" });
});

loop($this);
});
});
</script>
