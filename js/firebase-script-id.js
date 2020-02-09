//<![CDATA[
// View counter
$(function(){var a=$(".viewers");a.each(function(){var n=$(this).attr("id"),e=new Firebase("https://pustaka-anime.firebaseio.com/pages/id/"+n);e.once("value",function(n){var i=n.val();null==i?i=1:"/"!=window.location.pathname&&i++,e.set(i),a.children("span").removeClass("loading").html(i)})})});
//]]>
