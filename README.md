# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create
# zer0x64.github.io

Personal website and portfolio for zer0x64, a cybersecurity specialist focused on offensive security, cryptography, and memory exploitation. This site showcases my work as a challenge designer for NorthSec CTF and serves as a platform for sharing security research and insights.

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Modern full-stack web framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Static site hosting
- **CI/CD**: GitHub Actions for automated deployment

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI components
- **Bio & Introduction**: Professional introduction and expertise showcase
- **About Page**: Detailed background in cybersecurity and CTF challenge design
- **Blog Section**: Platform for security research, writeups, and tutorials
- **Projects Gallery**: Showcase of open-source tools and contributions
- **SEO Optimized**: Meta tags and structured data for better discoverability

## 📁 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout with navigation
│   ├── +page.svelte            # Homepage with bio
│   ├── about/+page.svelte      # About page
│   ├── blog/+page.svelte       # Blog listing
│   ├── projects/+page.svelte   # Projects showcase
│   └── +error.svelte           # Custom 404 page
├── app.html                    # HTML template
├── app.css                     # Global Tailwind styles
└── app.d.ts                    # TypeScript declarations
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (18.x or later)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zer0x64/zer0x64.github.io.git
   cd zer0x64.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔨 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode
- `npm run deploy` - Build for deployment

### Development Workflow

1. **Make changes** to components in `src/routes/`
2. **Test locally** using `npm run dev`
3. **Type check** with `npm run check`
4. **Build** with `npm run build` to verify production build
5. **Commit and push** - GitHub Actions will handle deployment

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. **Triggers** on push to `main` branch
2. **Builds** the static site using SvelteKit's static adapter
3. **Deploys** to GitHub Pages environment
4. **Available** at [https://zer0x64.github.io](https://zer0x64.github.io)

### Manual Deployment

To deploy manually:

```bash
npm run build
# The build/ directory contains the static site ready for deployment
```

## 🎨 Customization

### Styling

- **Tailwind Config**: Modify `tailwind.config.js` for custom styles
- **Components**: Update individual page components in `src/routes/`
- **Layout**: Edit `src/routes/+layout.svelte` for site-wide changes

### Content

- **Bio**: Update homepage content in `src/routes/+page.svelte`
- **About**: Modify `src/routes/about/+page.svelte`
- **Projects**: Add/edit projects in `src/routes/projects/+page.svelte`
- **Blog**: Extend blog functionality in `src/routes/blog/`

## 📝 Content Management

Currently, content is managed through Svelte components. Future enhancements may include:

- **Blog CMS**: Integration with headless CMS for blog posts
- **Project API**: Dynamic project loading from GitHub API
- **Contact Form**: Integration with form handling service

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome:

1. **Issues**: Report bugs or suggest features via GitHub Issues
2. **Pull Requests**: Submit improvements with clear descriptions
3. **Security**: Report security issues privately

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About zer0x64

Cybersecurity specialist with expertise in:
- **Offensive Security**: Penetration testing and red team operations
- **Cryptography**: Implementation analysis and cryptanalysis
- **Memory Exploitation**: Binary exploitation and reverse engineering
- **CTF Design**: Challenge creation for NorthSec CTF

---

*Built with ❤️ using SvelteKit and deployed on GitHub Pages*
