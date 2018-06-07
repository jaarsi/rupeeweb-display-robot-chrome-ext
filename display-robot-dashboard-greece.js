'use strict';

(function display_robot_dashboard_greece() {
    var g = (initial_ix) => {    
        var last_window_pageyoffset = -1;
        var i = initial_ix || 0;
        return () => {
            console.log('running display_robot_dashboard_greece');
            try {                
                var reached_bottom = ((window.pageYOffset - last_window_pageyoffset) == 0);
                if (!reached_bottom) {
                    last_window_pageyoffset = window.pageYOffset;
                    window.scrollBy(0, 8);
                } else {
                    if (i === companies.length) {
                        clearInterval(drd_interval);
                        setTimeout(() => window.location.href = 'https://www.rupee.com.br/dashboard_italia', wait_time_before_go);
                    } else {    
                        clearInterval(drd_interval);
                        window.scrollTo(0, 0);
                        companies_graphs.scrollTo(0, default_item_height * i);
                        companies[i++].click();                        
                        setTimeout(() => drd_interval = setInterval(g(i), scroll_speed), 5000);
                    }   
                }              
            } catch (err) {
                clearInterval(drd_interval);
                throw err;
            }            
        };
    };    
    var wait_time_before_go = 1000;
    var wait_time_between_cards = 5000;
    var scroll_speed = 200;
    var companies_graphs = document.querySelector('.graphs-list');
    var companies = companies_graphs.querySelectorAll('.company-link');
    var default_item_height = companies_graphs.querySelector('.company-link li').offsetHeight;
    var drd_interval = setInterval(g(), scroll_speed);
    return drd_interval;
})();