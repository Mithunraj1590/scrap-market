# Website Project

A modern responsive website built with HTML, CSS, JavaScript, and SCSS.

## Project Structure

```
scrap/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Compiled CSS file
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   ├── scss/
│   │   └── main.scss      # SCSS source file
│   └── images/            # Image assets folder
└── README.md              # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Navigation**: Fixed header with mobile hamburger menu
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Interactive Elements**: Hover effects and animations
- **Contact Form**: Functional contact form with validation
- **SCSS Support**: Organized styling with variables and mixins

## Working with SCSS

### Manual SCSS Compilation

Since you're not using a package manager, you can compile SCSS manually:

1. **Online Compiler**: Use online SCSS compilers like:
   - [SassMeister](https://www.sassmeister.com/)
   - [CodePen](https://codepen.io/) (supports SCSS)

2. **VS Code Extension**: Install "Live Sass Compiler" extension
   - Install the extension
   - Right-click on `main.scss` and select "Watch Sass"
   - It will automatically compile to `style.css`

3. **Command Line**: If you have Sass installed globally:
   ```bash
   sass assets/scss/main.scss assets/css/style.css --watch
   ```

### SCSS Features Used

- **Variables**: Colors, fonts, breakpoints
- **Mixins**: Reusable CSS patterns
- **Nesting**: Organized selectors
- **Responsive Design**: Media queries
- **Functions**: Color manipulation

## Customization

### Colors
Edit the variables in `assets/scss/main.scss`:
```scss
$primary-color: #007bff;
$secondary-color: #6c757d;
// ... other colors
```

### Layout
- Modify the grid system in `.services-grid`
- Adjust container widths in `$container-max-width`
- Change breakpoints in the variables section

### Content
- Update text content in `index.html`
- Add images to `assets/images/`
- Modify JavaScript functionality in `assets/js/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Getting Started

1. Open `index.html` in your browser
2. Edit content in the HTML file
3. Modify styles in `assets/scss/main.scss`
4. Compile SCSS to CSS
5. Test responsiveness on different devices

## File Descriptions

- **index.html**: Main HTML structure with semantic markup
- **assets/scss/main.scss**: SCSS source with variables, mixins, and organized styles
- **assets/css/style.css**: Compiled CSS (update this when you modify SCSS)
- **assets/js/main.js**: JavaScript for interactivity and animations

The website is ready to use and customize according to your design requirements! 