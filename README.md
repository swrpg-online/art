# SWRPG Online Art Assets

![SWRPG Narrative Dice Assets](dice/splash.png)

This repository contains a collection of SVG and other art assets for use in Star Wars Roleplaying Game (SWRPG) online tools and applications.

## Features

### Narrative Dice

![Narrative Dice](dice/narrative-dice-page.png)

### Numeric dice with every color from the movie logos

![Movie Colors](dice/movie-colors.png)

![All Numerical Dice](dice/all-numerical-dice.png)

### Numeric Dice come in Arabic or Aurabesh Numerals

![ROTJ Aurabesh](dice/sw-rotj-aurabesh.png)
![TLJ Arabic](dice/sw-tlj-arabic.png)

## Installation

```bash
npm install @swrpg-online/art
```

## Usage

### Direct SVG Imports

You can import SVG files directly from the package:

```javascript
// Import a specific SVG file
import '@swrpg-online/art/dice/narrative/D12-Proficiency-Success.svg';

// Use in an HTML img tag
<img src="node_modules/@swrpg-online/art/dice/narrative/D12-Proficiency-Success.svg" alt="Proficiency Success">

// Fetch SVG content
fetch('node_modules/@swrpg-online/art/dice/narrative/D12-Proficiency-Success.svg')
  .then(response => response.text())
  .then(svgContent => {
    // Use the SVG content
  });
```

## Directory Structure

- `dice/` - Contains dice-related SVG assets
  - `narrative/` - Narrative dice SVGs (Proficiency, Challenge, etc.)
  - `numeric/` - Numeric dice SVGs (Aurebesh and Arabic styles)
    - `aotc/` - Attack of the Clones style
    - `anh/` - A New Hope style

## Licensing

These art assets are available under a dual-license model:

1. **Open Source License (CC BY-NC-SA 4.0)**
   - Free for use in open source projects
   - Requires attribution
   - Non-commercial use only
   - Share-alike (derivatives must use the same license)
   - See the [LICENSE](LICENSE) file for full details

2. **Commercial License**
   - Available for commercial use
   - Requires a separate license agreement
   - Contact information available in [CONTACT.md](CONTACT.md)

I'm open to other licensing models, feel free to open an issue to discuss. The goal is to recoup design costs while still providing to the open source and swrpg communities.

## Usage Guidelines

### For Open Source Projects

1. You must provide attribution to the original creator
2. You must include a link to this repository
3. You must indicate any modifications made to the assets
4. Your project must be open source and use the same CC BY-NC-SA 4.0 license for derivative works

### For Commercial Projects

1. Contact the creator through the information provided in [CONTACT.md](CONTACT.md)
2. Discuss your specific use case and requirements
3. Obtain a commercial license before using the assets

## Contributing

While this is primarily an asset repository, suggestions and improvements are welcome. Please open an issue to discuss any proposed changes.

## Support

For questions about licensing or usage, please refer to the [CONTACT.md](CONTACT.md) file.
