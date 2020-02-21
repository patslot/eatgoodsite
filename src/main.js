import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import angular from 'angular';

import "popper.js";
import "./scss/main.scss";
var campaign_name = "eatgoodsite";
import "../node_modules/tiny-slider/src/tiny-slider.scss";

import "../node_modules/font-awesome/css/font-awesome.css";


var eatgoodsiteApp = angular.module('eatgoodsite', []);

eatgoodsiteApp.controller('eatgoodsiteController', function eatgoodsiteController($scope, $timeout) {

   

    function gaEventcall(action, category, label, value){
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
    $scope.articleClick = function(a){
        var win = window.open(a.LINK, '_blank');
        if (win) {
            //Browser has allowed it to be opened
           
            var array = a.TAG.split(",");
            $.each(array,function(i){
                gaEventcall('tag','article_link_tag',$.trim(array[i]),$.trim(array[i]));
             });
            gaEventcall('click','article_link_click',a.TITLE,a.TITLE)
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    }

    $scope.$watch('$viewContentLoaded',function () {
        var payload = {};
        
        $timeout(function () {
           
        }, 0);
    });

  
});



$(document).ready(function () {
    // init();
});