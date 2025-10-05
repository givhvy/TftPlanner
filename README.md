# 🔥 TFT Academy - Tier List Application

A modern, responsive web application for Teamfight Tactics champion tier lists, built with vanilla JavaScript and modular architecture.

## 📁 Project Structure

```
TheTftAcademy/
├── index.html              # Main HTML entry point
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── config.js          # Configuration & constants
│   ├── data.js            # TFT champion data
│   ├── api.js             # API handlers for images
│   ├── ui.js              # UI rendering & interactions
│   ├── modal.js           # Modal functionality
│   └── main.js            # Application entry point
├── assets/
│   └── icons/             # Local icon assets
└── README.md              # This file
```

## 🚀 Features

- ✅ **Modular Architecture** - Clean separation of concerns
- ✅ **Community Dragon API** - Official TFT champion images
- ✅ **Responsive Design** - Mobile, tablet, and desktop support
- ✅ **Search Functionality** - Filter champions in real-time
- ✅ **Modal Details** - Click champions for detailed information
- ✅ **Image Fallbacks** - Multiple fallback URLs for reliability
- ✅ **Tier System** - S, A, B, C, D tier rankings
- ✅ **Cost Indicators** - Visual cost badges (1-5 stars)

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Community Dragon API** - TFT champion images
- **Data Dragon API** - Fallback image source

## 📦 Installation

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required!

```bash
# Simple local server (optional)
python -m http.server 8000
# or
npx serve
```

## 🎮 Usage

### Viewing Tiers
- Champions are organized by tier (S, A, B, C, D)
- Each tier has a color-coded badge
- Champions show cost indicators (1-5 stars)

### Search
- Use the search box to filter champions by name
- Search is debounced for performance (300ms delay)

### Champion Details
- Click any champion to open detailed modal
- View recommended items, positioning, and strategies
- Click outside or press ESC to close

## 🔧 Configuration

Edit `js/config.js` to customize:

```javascript
const CONFIG = {
    api: {
        communityDragon: 'https://raw.communitydragon.org/latest',
        dataDragon: 'https://ddragon.leagueoflegends.com/cdn/14.5.1',
    },
    tft: {
        currentSet: 13,
        patch: '15.5',
    }
};
```

## 📊 Data Management

Champion data is stored in `js/data.js`:

```javascript
const TFT_DATA = {
    tiers: {
        S: [
            { name: 'Ahri', cost: 2, apiName: 'tft13_ahri', traits: ['Arcane', 'Scholar'] }
        ]
    }
};
```

### Adding New Champions

1. Open `js/data.js`
2. Add champion to appropriate tier:

```javascript
{
    name: 'ChampionName',
    cost: 3,
    apiName: 'tft13_championname',
    traits: ['Trait1', 'Trait2']
}
```

## 🎨 Customization

### Changing Tier Colors

Edit `css/style.css`:

```css
.tier-s {
    background: linear-gradient(135deg, #ff4757, #ff6348);
}
```

### Modifying Layout

- **Responsive breakpoints**: `css/responsive.css`
- **Champion icon size**: `.champion-icon` class
- **Grid layout**: `.champions-container` class

## 🐛 Debugging

Access debug tools in browser console:

```javascript
// Access debug object
TFT_DEBUG.data.getAllChampions()
TFT_DEBUG.api.getChampionImageUrl('tft13_ahri')
```

## 📱 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## 📝 License

This project is for educational purposes.

**Disclaimer**: TFT ACADEMY isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

## 🔗 API References

- [Community Dragon](https://www.communitydragon.org/) - TFT assets
- [Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon) - Riot's official CDN

## 📧 Support

For issues or questions, please open an issue on the repository.

---

**Made with 🔥 by TFT Academy**
