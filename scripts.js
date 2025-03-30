// Initialize date display
document.addEventListener('DOMContentLoaded', function() {
    // Set current date in header
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);
    
    // Initialize Sofascore widgets
    initializeSofascoreWidgets();
    
    // Refresh data every 60 seconds
    setInterval(refreshData, 60000);
});

// Initialize Sofascore widgets
function initializeSofascoreWidgets() {
    // Match ID for Inter Milan vs Manchester City
    // Note: In a production environment, you would dynamically fetch this
    // This is an example ID - you would need the actual ID from Sofascore's API
    const interVsCityMatchId = 11021548; // Example ID, replace with actual ID for the match
    
    // Initialize featured match widget
    window.SofaScoreWidgets.init({
        element: '#sofascore-featured-match',
        type: 'match', 
        matchId: interVsCityMatchId,
        theme: 'dark',
        displayMode: 'extended'
    });
    
    // Initialize momentum widget
    window.SofaScoreWidgets.init({
        element: '#sofascore-momentum',
        type: 'match-momentum',
        matchId: interVsCityMatchId,
        theme: 'light'
    });
    
    // Initialize statistics widget
    window.SofaScoreWidgets.init({
        element: '#sofascore-statistics',
        type: 'match-statistics',
        matchId: interVsCityMatchId,
        theme: 'light'
    });
    
    // Initialize today's matches widget
    // Sport ID 1 is for soccer
    window.SofaScoreWidgets.init({
        element: '#sofascore-matches',
        type: 'day-schedule',
        sportId: 1,
        theme: 'light',
        displayMode: 'top-matches'
    });
}

// Function to refresh data
function refreshData() {
    console.log('Refreshing data...');
    
    // Reinitialize widgets to get fresh data
    initializeSofascoreWidgets();
}

// Toggle match selection
function selectMatch(matchId) {
    // Update featured match, momentum, and statistics widgets with the new match ID
    window.SofaScoreWidgets.init({
        element: '#sofascore-featured-match',
        type: 'match', 
        matchId: matchId,
        theme: 'dark',
        displayMode: 'extended'
    });
    
    window.SofaScoreWidgets.init({
        element: '#sofascore-momentum',
        type: 'match-momentum',
        matchId: matchId,
        theme: 'light'
    });
    
    window.SofaScoreWidgets.init({
        element: '#sofascore-statistics',
        type: 'match-statistics',
        matchId: matchId,
        theme: 'light'
    });
}

// Error handling function for widget failures
function handleWidgetError(widgetElement, errorMessage) {
    const element = document.getElementById(widgetElement);
    if (element) {
        element.innerHTML = `
            <div class="widget-error">
                <p>Widget could not be loaded.</p>
                <p>${errorMessage}</p>
            </div>
        `;
    }
}
