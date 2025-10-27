$('[data-name="proofread"]').remove();
$('[data-name="dropdown-help-support"]').remove();
$('[data-name="dropdown-help-feedback"]').remove();
$('[data-name="dropdown-help-policy"]').remove();
$('[data-name="dropdown-help-terms"]').remove();

$('[data-name="to-home"]').remove();
    $('[data-name="proofread"]').remove();
    $('[data-name="dropdown-help/support"]').remove();
    $('[data-name="dropdown-help/feedback"]').remove();
    $('[data-name="dropdown-help/policy"]').remove();
    $('[data-name="dropdown-help/terms"]').remove();
    $('[data-name="to-home"]').remove();
 	$('._bdf866a7-document_settings-userNameHeader').remove();
 	$('._6afd8214-document_settings-emailHeader').remove();
 	$('._ed69ac96-document_settings-header').remove();
 	$('[data-name="documentSettings-myGrammarly"]').remove();
    $('[data-name="documentSettings-subscription"]').remove();
    $('[data-name="documentSettings-logout"]').remove();
    $('[data-name="documentSettings-support"]').remove();
    $('[data-name="documentSettings-feedback"]').remove();
    $('[data-name="documentSettings-switchToClassicEditor"]').remove();
    $('[data-name="documentSettings-privacyPolicy"]').remove();
    $('[data-name="documentSettings-termsOfService"]').remove();
	$("._fabb3c93-index_navigation-mainMenu").css("display","none");
    // $('nav').remove();
	window.setInterval(function(){
    $("._fabb3c93-index_navigation-mainMenu").html("<h2><span style='color: rgb(180, 175, 175); margin: 35px;'>Welcome To</span></h2> <h2><span style='color: #ffff ;margin-left: 20px;'>Webtoolsbd</span></h2><br><br><br><br><br><br><br><h4><span style='color: #ffff;'>Delete Document After Work</span></h4>");
    $('[data-name="logout-lnk"]').css("display","none");
    $('[data-name="support-lnk"]').css("display","none");
    $('._528fbf82-index_navigation-item._5f79fb9a-index_navigation-trash').css("display","none");
    $('._528fbf82-index_navigation-item._36fcb0a4-index_navigation-account').css("display","none");
    $('._528fbf82-index_navigation-item._fdc8cbe0-index_navigation-apps').css("display","none");
    $('[data-name="username"]').text("Webtoolsbd.com");

    

}, 100);