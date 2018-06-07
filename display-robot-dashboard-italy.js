'use strict';

(function display_robot_dashboard_italy() {
    var el = document.getElementsByClassName('reveal-overlay')[1];
    if (el) 
        el.style.display = 'none';
    var wait_time_before_go = 10000;
    var next_url = document.querySelector('.companies-container a').href;
    setTimeout(() => window.location.href = next_url, wait_time_before_go);
})();