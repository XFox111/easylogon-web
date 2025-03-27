# ezlog.app (web application)

[![Website status](https://img.shields.io/website?url=http%3A//ezlog.app/)](https://ezlog.app)
[![GitHub last commit](https://img.shields.io/github/last-commit/xfox111/easylogon-web?label=Last+update)](https://github.com/XFox111/easylogon-web/commits/main)
[![Docker Image Size](https://img.shields.io/docker/image-size/xfox111/easylogon-web?logo=docker&logoColor=white)](https://hub.docker.com/r/xfox111/easylogon-web/)

> [!WARNING]
> This project is in early development stage and is missing some essential components that will be released sometime in the future.

<picture>
	<source media="(prefers-color-scheme: dark)" srcset="https://cdn.xfox111.net/projects/easylogon/banner-dark.webp">
	<source media="(prefers-color-scheme: light)" srcset="https://cdn.xfox111.net/projects/easylogon/banner-light.webp">
	<img alt="Easylogon. Forget about passwords. This time for real.">
</picture>

EasyLogon is a service that can help you authenticate on any device by scanning a QR code.

This is a collection of applications, that includes password manager web application, web application, plugin for thrid-party websites and browser extension!

## Demo

[![EasyLogon demo](https://img.youtube.com/vi/QmZtMtAWfYY/maxresdefault.jpg)](https://youtu.be/QmZtMtAWfYY)
> Source: https://youtu.be/QmZtMtAWfYY

## Features

- **Authenticator + password manager:** Store all your credentials securely on your device.
- **QR code authentication:** Once you need to login on a new device - just open the app, scan QR code, and voila.
- **Plugin for 3rd party website:** Add QR code authentication to your website with a single line of code.

## Download

- Live web application: https://ezlog.app
- Mobile app for Android: https://at.xfox111.net/easylogon-android

## Papers

- [QR Code Authentication System as an Ultimate Tool for Personal Cybersecurity (2023, IEEE)](https://ieeexplore.ieee.org/abstract/document/10397212)

## Development

> [!IMPORTANT]
> Please make sure you have read [the copyright notice](/COPYING)

### Prerequisites

For development you can use [Dev Containers](https://devcontainers.io/) or [GitHub Codespaces](https://github.com/features/codespaces). Otherwise you will need to install following tools:
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)


### Building and debugging

Here're some commonly used commands:
```bash
yarn install			# Install dependencies
yarn dev			# Start the development server
yarn lint			# Lint the project with ESLint
yarn build			# Build the project for production
```

Modify endpoints in .env file:

```
# .env
VITE_SIGNALR_URL=http://localhost:8000/ws		# SignalR endpoint
VITE_ENDPOINT_URL=http://localhost:8000/send		# Data send endpoint
```

> [!NOTE]
> You will need to deploy [backbone server](https://github.com/xfox111/backbone), to enable main features

To build a Docker image, run:

```bash
docker build -t <tag_name> .
```

> [!TIP]
> If you use VS Code, you can also use pre-defined tasks for building and debugging.

## Contributing
This project doesn't accept pull requests, but we are open to suggestions and feedback. If you have any ideas or improvements, please feel free to open an issue.

> [!NOTE]
> Please make sure to follow the [contributing guidelines](/CONTRIBUTING.md)

## Copyright notice

This is a proprietary project and is subject to general copyright law. See [COPYING](/COPYING) for more information.

---

[![Bluesky](https://img.shields.io/badge/%40xfox111.net-BSky?logo=bluesky&logoColor=%230285FF&label=Bluesky&labelColor=white&color=%230285FF)](https://bsky.app/profile/xfox111.net)
[![GitHub](https://img.shields.io/badge/%40xfox111-GitHub?logo=github&logoColor=%23181717&label=GitHub&labelColor=white&color=%23181717)](https://github.com/xfox111)
[![Buy Me a Coffee](https://img.shields.io/badge/%40xfox111-BMC?logo=buymeacoffee&logoColor=black&label=Buy%20me%20a%20coffee&labelColor=white&color=%23FFDD00)](https://buymeacoffee.com/xfox111)

> ©2025 Eugene Fox. All rights reserved
