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
                    var companies = document.querySelectorAll('.companies-container a');
                    var companies_url = [];
                    for (let c of companies)
                        companies_url.push(c.href);        
                    var current_url_ix = companies_url.lastIndexOf(window.location.href);
                    var next_url;
                    if (current_url_ix === companies_url.length-1) 
                        next_url = 'https://www.rupee.com.br/dashboard_grecia'
                    else
                        next_url = companies_url[current_url_ix+1];
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
    return drcp_interval;
})();