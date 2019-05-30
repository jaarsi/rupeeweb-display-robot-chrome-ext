'use strict';

(function display_robot_company_panel() {
    console.log('running display_robot_company_italy');

    var DASHBOARD_ITALY_STATUS_URLS = [
        'https://app.rupee.com.br/dashboard_italia',
        'https://app.rupee.com.br/dashboard_italia?status=waiting&per_page=20',
        'https://app.rupee.com.br/dashboard_italia?status=delayed&per_page=20',
        'https://app.rupee.com.br/dashboard_italia?status=delivered_file&per_page=20',
        'https://app.rupee.com.br/dashboard_italia?status=external_repo&per_page=20',
        'https://app.rupee.com.br/dashboard_italia?status=attention&per_page=20'
    ]
    
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
                    var current_url_ix = DASHBOARD_ITALY_STATUS_URLS.lastIndexOf(window.location.href);
                    var next_url;
                    if (current_url_ix < DASHBOARD_ITALY_STATUS_URLS.length-1) 
                        next_url = DASHBOARD_ITALY_STATUS_URLS[current_url_ix+1]
                    else
                        next_url = window.sessionStorage.getItem('next_company_url');                        
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