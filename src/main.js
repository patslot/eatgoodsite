import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import angular from 'angular';
import "angular-sanitize/angular-sanitize.js";
import moment from 'moment';
import "popper.js";
import "./scss/main.scss";

import "../node_modules/tiny-slider/src/tiny-slider.scss";
import "../node_modules/font-awesome/css/font-awesome.css";

var campaign_name = "eatgoodsite";
if (document.location.hostname == "localhost") {
    var theLink = 'http://localhost:8888/eatgoodsite/';
} else {
    var theLink = 'https://campaign.nextdigital.com.hk/eatgoodsite/dev/v6/';
}



var eatgoodsiteApp = angular.module('eatgoodsite', ['ngSanitize']);

eatgoodsiteApp.controller('eatgoodsiteController', function eatgoodsiteController($scope, $timeout,$http) {
    $scope.platform = "web"; 
    $scope.storeList = [];

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
        var date = moment().format('YYYYMMDDHHmmss');
        $http.get(theLink + 'storelist.json?'+date).then(function(result) {
            $scope.storeList = result.data;
            console.log(result.data);
         });
        $timeout(function () {
           
        }, 0);
    });

    console.log( $scope.storeList );
  
});

eatgoodsiteApp.controller('eatgoodsiteStoreDetailController', function eatgoodsiteStoreDetailController($scope, $timeout,$http, $location) {
    $scope.platform = "web"; 
    $scope.storeList = [];

    function gaEventcall(action, category, label, value){
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
    

    $scope.$watch('$viewContentLoaded',function () {
        var param1 = $location.search('sid') 
        var date = moment().format('YYYYMMDDHHmmss');
        $http.get(theLink + 'storedetail.json?'+date).then(function(result) {
            $scope.storedetail = result.data[0];
            
         });
        
        $timeout(function () {
           
        }, 0);
    });

    console.log( $scope.storedetail );
  
});

$(document).ready(function () {
   
});