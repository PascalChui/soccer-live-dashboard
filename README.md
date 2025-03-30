# Soccer Live Dashboard

A web dashboard that displays live soccer match data, including scores, momentum, and statistics using Sofascore widgets.

## Features

- Live match scores and updates
- Match momentum visualization
- Detailed match statistics
- List of today's top matches
- Responsive design for all devices
- Auto-refreshing data (every 60 seconds)

## Getting Started

### Prerequisites

- Web browser with JavaScript enabled
- GitHub account (for deployment via GitHub Pages)

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/PascalChui/soccer-live-dashboard.git
   ```

2. Open `index.html` in your web browser.

### Deployment

#### Deploy using GitHub Pages

1. Go to your repository settings.
2. Navigate to the "Pages" section.
3. Select the main branch as the source.
4. Click "Save".
5. Your dashboard will be available at `https://[your-username].github.io/soccer-live-dashboard/`

## Customization

### Match Selection

To display a different match:

1. Open `scripts.js`.
2. Locate the `interVsCityMatchId` variable.
3. Replace the ID with the match ID of your choice from Sofascore.

### Widget Customization

You can customize the appearance and behavior of widgets by modifying the parameters in the `SofaScoreWidgets.init()` function calls in `scripts.js`.

## How It Works

This dashboard uses the Sofascore Widgets API to display real-time match data. The main components are:

- **Featured Match Widget**: Displays detailed information about the currently selected match
- **Match Momentum Widget**: Shows the flow and momentum of the game over time
- **Statistics Widget**: Presents detailed match statistics (possession, shots, corners, etc.)
- **Today's Matches Widget**: Lists other notable matches happening today

The dashboard automatically refreshes data every 60 seconds to ensure you have the latest information.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Sofascore Widgets API

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data provided by Sofascore
- Icons and fonts from Google Fonts

---

Created by [PascalChui](https://github.com/PascalChui)
