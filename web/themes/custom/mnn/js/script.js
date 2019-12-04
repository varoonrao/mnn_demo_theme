// jQuery(document).ready(function($){
//     $('block-mnn-main-menu li a').hover(function(){
//         $(this).parent().find('.sub_menu').toggle();
//         console.log("hovered");
//     });
// });
$('#menu_event').click(function(e){
    // e.preventDefault();
    $('block-mnn-main-menu li a').click(function(){
        $(this).parent().find('.sub_menu').toggle();
 });
});
