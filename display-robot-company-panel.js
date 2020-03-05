'use strict';

(function display_robot_company_panel() {
    console.log('running display_robot_company_panel');
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
                    var companies_url = Array.from(document.querySelectorAll('.companies-container a')).map(e => e.href)
                    var current_url_ix = companies_url.lastIndexOf(window.location.href);
                    var next_url;
                    if (current_url_ix === companies_url.length-1) {
                        next_url = 'https://app.rupee.com.br/dashboard_italia';
                        window.sessionStorage.setItem('next_company_url', companies_url[0]);
                    } else if ((current_url_ix+1)%3 == 0) {
                        next_url = 'https://app.rupee.com.br/dashboard_italia';
                        window.sessionStorage.setItem('next_company_url', companies_url[current_url_ix+1]);
                    } else
                        next_url = companies_url[current_url_ix+1];
                    setTimeout(() => window.location.href = next_url, wait_time_before_go);
                }
            } catch (err) {
                clearInterval(drcp_interval);
                throw err;
            }
        }
    };
    var wait_time_before_go = 10;
    var scroll_speed = 7;
    var drcp_interval = setInterval(g(), scroll_speed);
})();
