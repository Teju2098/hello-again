# Appium + WebdriverIO Mobile Automation Framework

## Overview
This repository provides a setup for mobile automation using Appium and WebdriverIO, focusing on iOS app testing. The framework is designed to handle UI automation on physical and virtual devices.

## Prerequisites
- Node.js
- Appium 
- iOs device
- WebdriverIO 
- Xcode (for iOS testing)

## Environment Setup
1. Install dependencies:
```bash
npm install
```
2. Start Appium Server:
```bash
appium
```

## Running Tests Locally
Set environment variables before running tests:
```bash
export UDID="UDID can be recieved from xCode"
npx wdio run wdio.conf.js
```
