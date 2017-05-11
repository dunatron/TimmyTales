import Vue from './parts/custom-vue';
import scrollableTales from './parts/scrollable-tales';

$( document ).ready(function() {

    if ($(window).width() > 768) {
        scrollableTales();
    }
    else {
        // No scrollable Tales
    }

    // $( window ).resize(function() {
    //     if ($(window).width() > 768) {
    //         scrollableTales();
    //     }
    //     else {
    //         // No scrollable Tales
    //     }
    // });

});