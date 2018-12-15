function inject_script(tab) {
    if (tab.url.match(/^(https:\/\/app.rupee.com.br\/empresas\/\d+)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-company-panel.js'})
    else if (tab.url.match(/^(https:\/\/app.rupee.com.br\/dashboard_italia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-italy.js'})
    else if (tab.url.match(/^(https:\/\/app.rupee.com.br\/dashboard_mundo)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-mundi.js'});
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status != 'complete')
        return;
    inject_script(tab);
});