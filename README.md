# React-Product-Catalog

A modern, responsive e-commerce application with filtering, sorting, and cart functionalities. This application is built with React, TailwindCSS, and a custom context API for managing state, providing a seamless user experience across devices.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)
- [Enhancements Implemented](#enhancements-implemented)

---

## Features
- **Search and Filter**: Search products and filter them by categories.
- **Sorting**: Sort products by price (ascending/descending).
- **Responsive Design**: Fully responsive layout for mobile, tablet, laptop, and desktop.
- **Cart Management**: Add products to the cart with live item count updates.

---

## Installation

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](v16 or above)
- [npm]

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/krishna7054/react-product-catalog.git
   cd react-product-catalog
   ```
2. **Install dependencies: Using npm**: 
    ```bash
    npm install
    ```
3. **Start the development server: Using npm**:    
    ```bash
    npm start
    ```
4. View the app: Open your browser and navigate to `http://localhost:3000`.    

### Usage
- Search for products using the search bar.
- Filter products by category using the filter buttons.
- Sort products by price using the sort dropdown.
- Add products to the cart and view the item count.

### Technologies Used
- Frontend: React, TailwindCSS
- State Management: Custom Context API for cart functionality
- Routing: React Router
- Icons: Lucide-React
- Data: JSON file for product details

### Challenges Faced
1. **State Management for Cart**:
Managing the cart functionality required careful consideration to update the cart dynamically. We implemented a custom CartContext using React's Context API to handle cart state globally.

**Solution**:
- Used useContext for better state updates and reusability.
- Encapsulated cart logic in a dedicated context provider.
- Utilized React Context API for global state management.

2. **Responsive Design Across Devices**:
Ensuring a consistent and user-friendly experience on all screen sizes posed challenges.

**Solution**:
- Leveraged TailwindCSS's utility-first classes for responsive design.
- Implemented conditional layouts for mobile, tablet, and desktop using flex and grid.

3. **Dynamic Product Filtering and Sorting**:
Filtering and sorting products in real-time while maintaining performance was tricky with a larger dataset.

**Solution**:
- Applied chaining of filter and sort methods directly on the product array.

### Enhancements Implemented
1. **Responsive Design**:
- The search bar adapts to be above the buttons on smaller screens.

2. **Real-time Search**:
- Products are filtered dynamically as the user types.

3. **Animation Effects**:
- Added hover and click animations for better UX.

4. **Clean Component Structure**:
- Modular components for better scalability and readability.


