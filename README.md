![Lastwall Logo](lw-logo.jpg) 
# LastWall RISC - Risk based Firewall (Authentication/Registration)

The LastWall Identity Firewall system provides a javascript embeddable in your appropriate page.  The page form fields, that need to be risk-evaluated are enabled via the script hooks. On submit, the script connects to the LastWall API and returns the trust value / the risk score associated with the Identity associated with that access. 

## Overview

An embeddable javascript is provided.  It needs to be initialized appropriately with the API key and Authorization Token. The API url needs to be set appropriately based on whether, the usage is for testing, development (sandbox) or production needs.

## Script Usage

The script is placed in the webpage which has the login or registration action. Ideally the data collected by the script, is collected by a server-side program and then a API call made from the server-side as part of the backend business application (example: Login) workflow.

## API usage

See [Integration] (Integration.md) for details of accessing the API from a server-side module.

## RISC Script

### URL for RISC Script

The current URL for the RISC script shall be provided by email.

## Data Elements Used for Risk Profiling

### Device fingerprinting:
#### User Agent, Operating System, Platform, Language, Screen Dimensions, Window Dimensions, Color Depth, Plugin Info, Fonts Info, Session and Local Storages, Dynamic Plugin Behavior, Social Network Reputation Behavior (optional)

### Network Fingerprinting:
#### IP, DNS, ISP, Confidence factors, Accuracy Radius, User Type, Continent, Country, Subdivisions, City, Postal Code, Metro Code, Time Zone, Latitude/Longitude, Domain, Page Load Dynamics, Threat Intelligence Network Data

## Form Data

The data for risk profiling is also captured from instrumented custom form fields as needed. Keystroke data and mouse movement sensors are captured as needed from instrumented form fields.
