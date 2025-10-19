# TinaCMS Setup Guide

TinaCMS has been successfully configured for your portfolio to manage project cards locally!

## What's Been Set Up

1. **TinaCMS Installation**: Added TinaCMS and its CLI to your project
2. **Content Schema**: Created a schema for project cards in `tina/config.ts`
3. **Sample Projects**: Created 6 sample project files in `content/projects/`
4. **Admin Interface**: Set up admin page at `/admin`
5. **Data Integration**: Updated the Projects component to fetch data from TinaCMS

## How to Use TinaCMS

### Starting the Development Server

```bash
npm run dev
```

This will start both the Next.js dev server and the TinaCMS backend.

### Accessing the Admin Interface

Once the dev server is running, visit:
- **Main site**: http://localhost:3000 (or check the terminal for the actual port)
- **TinaCMS Admin**: http://localhost:YOUR_PORT/admin/index.html

**Important**: Use `/admin/index.html` not just `/admin`

### Managing Projects

1. Navigate to the admin interface
2. Click on "Projects" in the sidebar
3. You can now:
   - **Edit existing projects**: Click on any project to edit its details
   - **Add new projects**: Click "Create New" to add a new project
   - **Delete projects**: Remove projects you don't need
   - **Reorder projects**: Use the "Display Order" field (lower numbers appear first)

### Project Fields

Each project has the following fields:
- **Title**: Project name
- **Description**: Brief description of the project
- **Image**: Path to project image (stored in `/public/projects/`)
- **Technologies**: List of technologies used (click "Add item" to add more)
- **Live URL**: Link to the live project
- **GitHub URL**: Link to the GitHub repository
- **Featured**: Toggle to mark as a featured project
- **Display Order**: Number to control the order (1 appears first, 2 second, etc.)

### File Structure

```
content/
  projects/
    fintrader-pro.json
    crypto-payments.json
    investment-dashboard.json
    smart-banking.json
    risk-management.json
    trading-bot.json

tina/
  config.ts                    # TinaCMS schema configuration
  __generated__/              # Auto-generated TypeScript types (gitignored)
```

### Local-Only Mode

Currently, TinaCMS is set up for local-only usage. This means:
- Changes are saved directly to your local JSON files
- No cloud sync is configured
- Perfect for local development and testing

### Optional: Cloud Features

If you want to enable cloud features (collaboration, media management, etc.):

1. Sign up at https://app.tina.io
2. Create a new project
3. Copy your Client ID and Token
4. Create a `.env` file with:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_token
   ```

## Tips

1. **Images**: Add project images to `/public/projects/` directory
2. **Order**: Use the "Display Order" field to control which projects appear first
3. **Featured Badge**: Toggle "Featured" to show a featured badge on project cards
4. **Save Changes**: Changes are saved automatically as you edit

## Troubleshooting

If you encounter any issues:
- Make sure the dev server is running with `npm run dev`
- Check that all JSON files in `content/projects/` are valid JSON
- Clear your browser cache if the admin interface doesn't load
- Check the console for any error messages
