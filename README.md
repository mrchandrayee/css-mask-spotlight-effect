# CSS Mask Effect — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-mask-spotlight-effect/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the 15.6-second screen recording (540 × 960, 30 fps).

## What is visible in the recording
- Heading: **CSS Mask Effect**
- A nearly black framed canvas.
- A circular window revealing a warm sunset / mountain landscape.
- The revealed circle changes position as the mouse moves.
- A small crosshair pointer is visible over the demo.
- A red label reads `Comment "Mask" for code`.
- Bottom-left text reads `MASK` and `Move your mouse around`.

## How the recreation works
The scene is built with layered CSS gradients and mountain clip-path shapes (no external image dependency). A duplicate scene is revealed through a CSS radial-gradient mask. JavaScript updates the mask center and crosshair coordinates from pointer events, so mouse and touch input both work.

## Run
Extract the ZIP and open `index.html` in a modern browser. No build step or package installation is required.

## Source fidelity
The uploaded clip shows the rendered effect and its labels, not the original source code. No complete HTML/CSS/JavaScript source is readable in the recording. The interaction and visual composition above are reconstructed from the visible behavior; the mountain artwork is a CSS illustration rather than the original photographic image. This is not a byte-for-byte extraction of the original project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
