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
    
    // Initialize featured match widget - using updated API format
    if (window.SofaScoreEmbed) {
        // Featured match widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-featured-match',
            {
                matchId: interVsCityMatchId,
                theme: 'dark',
                width: '100%'
            }
        );
        
        // Momentum widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-momentum',
            {
                matchId: interVsCityMatchId,
                type: 'match-momentum',
                theme: 'light',
                width: '100%'
            }
        );
        
        // Statistics widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-statistics',
            {
                matchId: interVsCityMatchId,
                type: 'match-statistics',
                theme: 'light',
                width: '100%'
            }
        );
        
        // Today's matches widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-matches',
            {
                sport: 'football',
                type: 'daily-matches',
                date: new Date().toISOString().split('T')[0],
                theme: 'light',
                width: '100%'
            }
        );
    } else {
        console.error('SofaScore widget library not loaded properly');
        handleWidgetError('sofascore-featured-match', 'Widget library not loaded');
    }
}

// Function to refresh data
function refreshData() {
    console.log('Refreshing data...');
    
    // Reinitialize widgets to get fresh data
    initializeSofascoreWidgets();
}

// Toggle match selection
function selectMatch(matchId) {
    // Update widgets with the new match ID
    if (window.SofaScoreEmbed) {
        // Featured match widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-featured-match',
            {
                matchId: matchId,
                theme: 'dark',
                width: '100%'
            }
        );
        
        // Momentum widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-momentum',
            {
                matchId: matchId,
                type: 'match-momentum',
                theme: 'light',
                width: '100%'
            }
        );
        
        // Statistics widget
        window.SofaScoreEmbed.addWidget(
            'sofascore-statistics',
            {
                matchId: matchId,
                type: 'match-statistics',
                theme: 'light',
                width: '100%'
            }
        );
    }
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
