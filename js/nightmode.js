//<![CDATA[
$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#nightmode").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#nightmode").prop("checked",!0):$("#nightmode").prop("checked",!1)});
//]]>
