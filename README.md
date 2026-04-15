<p align="center">
  <img src="migadu.png" alt="tui logo" width="200"/>
</p>

A terminal user interface (TUI) for managing Migadu email hosting.

## Features

- List all domains in your Migadu account
- View domain details and status
- Manage mailboxes (create, edit, delete, view)
- Reset mailbox passwords
- Simple configuration setup

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Make the script executable:
   ```bash
   chmod +x migadu-tui
   ```

## Configuration

Run the setup command to configure your Migadu API credentials:

```bash
./migadu-tui --setup
```

This will create a configuration file at `~/.config/migaducli/migadu.conf` with your email and API key.

## Usage

### Start the TUI
```bash
./migadu-tui
```

### Command-line options
```bash
./migadu-tui --help      # Show help
./migadu-tui --setup     # Configure API credentials
./migadu-tui --version   # Show version
```

## TUI Controls

### Domain List Screen
- **Up/Down**: Navigate domains
- **Enter**: Select domain
- **R**: Refresh domain list
- **Q**: Quit

### Domain Details Screen
- **Up/Down**: Navigate mailboxes
- **B**: Back to domain list
- **C**: Create new mailbox
- **E**: Edit selected mailbox
- **D**: Delete selected mailbox
- **P**: Reset password for selected mailbox
- **Q**: Quit

## API Reference

The tool uses the official Migadu API:
- Base URL: `https://api.migadu.com/v1/`
- Authentication: HTTP Basic with email and API key
- All requests use JSON format

## Project Structure

- `migadu-tui`: Main executable script
- `requirements.txt`: Python dependencies
- `api-docs.md`: Migadu API documentation
- `project.md`: Project ideas and goals

## Requirements

- Python 3.6+
- `requests` library