/*
  Name: Nazox -  Admin & Dashboard  
Author: Themesdesign
Contact:  andzukor@gmail.com
File: Table responsive Init Js File
*/

$(function() {
    $('.table-responsive').responsiveTable({
        addDisplayAllBtn: 'btn btn-secondary'
    });

    $('.btn-toolbar [data-toggle=dropdown]').attr('data-bs-toggle', "dropdown");
});