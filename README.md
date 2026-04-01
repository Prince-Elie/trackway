# 🚚 Trackway - Modern Logistics Dashboard

A sleek, modern, and responsive logistics management dashboard built with React, Tailwind CSS, and Recharts. Trackway provides real-time tracking and management of shipments, vehicles, and fleet operations.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge)](https://prince-elie.github.io/trackway/)

## 📸 Preview

![Trackway Dashboard Screenshot](./Capture%20d'écran%202026-04-01%20212126.png)

## ✨ Features

- **📊 Interactive Dashboard** - Comprehensive overview of fleet metrics, shipments, and performance indicators
- **📈 Real-time Analytics** - Visual charts and graphs powered by Recharts for shipment trends and vehicle utilization
- **🚛 Shipment Tracking** - Complete shipment management system with status tracking and ETAs
- **🎨 Modern UI** - Beautiful gradient design system with smooth animations and transitions
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and production builds
- **🎯 Intuitive Navigation** - Smooth sidebar navigation with active route detection

## 📸 Key Pages

### Dashboard
- **Fleet Metrics** - Active shipments, deliveries, pending orders, revenue tracking
- **Performance Trends** - Monthly shipment performance visualization
- **Vehicle Distribution** - Pie chart showing truck, van, and container distribution
- **Recent Shipments** - Quick overview of latest shipments with status indicators

### Shipment List
- **Advanced Search** - Search and filter shipments by ID or details
- **Status Management** - Real-time status indicators (In Transit, Delivered, Pending, Delayed)
- **Pagination** - Easy navigation through shipment records
- **ETA Tracking** - Estimated arrival times and delivery status

## 🛠️ Tech Stack

- **Frontend Framework** - React 19.1.1
- **Routing** - React Router 7.9.5
- **Styling** - Tailwind CSS 4.1.16
- **Visualization** - Recharts 3.3.0
- **Icons** - React Icons 5.5.0 (Font Awesome + Feather)
- **Build Tool** - Vite 7.1.7
- **CSS Processing** - PostCSS

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Prince-Elie/trackway.git
cd trackway

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
trackway/
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx      # Main dashboard with metrics and charts
│   │   └── ShipList.jsx       # Shipment management page
│   ├── layouts/
│   │   └── DashboardLayout.jsx # Main layout wrapper with sidebar
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   └── App.css                # App-specific styles
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies
└── index.html                # HTML template
```

## 🎨 Design System

### Color Palette
- **Primary** - Blue (#0066FF)
- **Accent** - Purple (#8B5CF6)
- **Success** - Green (#10B981)
- **Warning** - Amber (#F59E0B)
- **Danger** - Red (#EF4444)

### Components
- Metric Cards with gradient backgrounds
- Interactive Charts (Line, Bar, Pie)
- Status Badges
- Data Tables with hover effects
- Action Buttons with smooth transitions

## 📊 API Integration Ready

Trackway is structured to easily integrate with backend APIs. Replace the mock data in:
- `src/pages/Dashboard.jsx` - Replace `metrics`, `shipmentsData`, `vehicleUsage` arrays
- `src/pages/ShipList.jsx` - Replace `shipments` array

Example API integration pattern:
```javascript
useEffect(() => {
  fetchShipments().then(data => setShipments(data));
}, []);
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile** - < 640px
- **Tablet** - 640px - 1024px
- **Desktop** - > 1024px

## 🎯 Performance

- ⚡ Vite provides instant HMR (Hot Module Replacement)
- 📦 Optimized bundle size with tree-shaking
- 🖼️ Lazy loading ready for route-based code splitting
- 🎨 CSS purging with Tailwind for minimal styles

## 🔐 Security

- Input validation ready (search and filter fields)
- XSS protection through React's built-in escaping
- CORS ready for cross-origin API calls

## 📄 License

MIT License - feel free to use this project for commercial and personal purposes.

## 👨‍💻 Author

**Prince Elie** - Frontend Developer

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using React and Tailwind CSS**