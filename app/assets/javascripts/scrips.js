/**
 * Created by bazlur on 9/4/14.
 */

$window = $( window ).width();


$( document ).ready(function() {
    if($window > 480) {
        $('.navbar-collapse.collapse li.login').css('display','none');
    }
    if($window > 600) {
        $('.navbar-collapse.collapse li.position').css('display','none');
    }
    if($window > 660) {
        $('.navbar-collapse.collapse li.share').css('display','none');
    }
    if($window > 768) {
        $('.navbar-collapse.collapse li.contact').css('display','none');
        $('.navbar-collapse.collapse li.help').css('display','none');
    }
});