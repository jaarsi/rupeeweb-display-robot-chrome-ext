'use strict';

(function display_robot_dashboard_italy() {
    console.log('running display_robot_dashboard_italy');
    var el = document.getElementsByClassName('reveal-overlay')[1];
    if (el) 
        el.style.display = 'none';
    var wait_time_before_go = 10000;
    var next_url = "https://app.rupee.com.br/dashboard_mundo";
    setTimeout(() => window.location.href = next_url, wait_time_before_go);
})();