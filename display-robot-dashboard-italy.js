'use strict';

(function display_robot_company_panel() {
    console.log('running display_robot_company_italy');
    var g = () => {
        var last_window_pageyoffset = -1;
        return () => {
            try {
                var reached_bottom = ((window.pageYOffset - last_window_pageyoffset) == 0);
                if (!reached_bottom) {
                    last_window_pageyoffset = window.pageYOffset;
                    window.scrollBy(0, 8);
                } else {
                    clearInterval(drcp_interval);                    
                    var next_url = "https://app.rupee.com.br/dashboard_mundo";
                    setTimeout(() => window.location.href = next_url, wait_time_before_go);
                }
            } catch (err) {
                clearInterval(drcp_interval);
                throw err;
            }
        }
    };
    var wait_time_before_go = 1000;
    var scroll_speed = 200;
    var drcp_interval = setInterval(g(), scroll_speed);
})();