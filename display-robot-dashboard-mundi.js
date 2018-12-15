'use strict';

(function display_robot_dashboard_italy() {
    console.log('running display_robot_dashboard_mundi');
    var el = document.getElementsByClassName('reveal-overlay')[1];
    if (el) 
        el.style.display = 'none';
    var wait_time_before_go = 10000;
    var companies_url = Array.from(document.querySelectorAll('.companies-container a')).map(e => e.href);
    var next_company_url = window.sessionStorage.getItem('next_company_url');
    if (next_company_url === 'undefined') 
        next_company_url = companies_url[0];    
    setTimeout(() => window.location.href = next_company_url, wait_time_before_go);
})();