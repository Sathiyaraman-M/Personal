---
pos: 4
title: Visitor Management System
type: Professional
publishDate: 2021-12-15 00:00:00
img: /assets/portfolio/resurgence.png
img_alt: Screenshots of the Resurgence application
description: |
  A Visitor Management System built using Blazor WebAssembly, ASP.NET Core, Entity Framework Core and SQL Server.
tags:
  - Professional
  - Clean Architecture  
  - Blazor WebAssembly
  - ASP.NET Core
  - Entity Framework Core
  - SQL Server  
---

## Overview

This project is a Visitor Management System built using Blazor WebAssembly, ASP.NET Core, Entity Framework Core, and SQL Server. As in all projects, this one too uses Clean Architecture principles to build a loosely coupled application that is easy to maintain and extend. This application allows users to register visitors and provide them a visitor pass. The application also tracks the visitors with their entry and exit times. The application also implements an administration area that allows authorized users to add new visitors, and edit existing ones. The application again, also implements a elaborate authentication and authorization system using ASP.NET Core Identity.

## Features

- Uses ASP.NET Core Identity to support administrator users logins
- Uses JWT Authentication for user authentication
- Elaborate Authorization system based on Roles, Policies and Claims
- Registration of visitors and providing them a visitor pass with QR code
- Tracking of visitors with their entry and exit times
- Generation of Excel reports based on visitor data
- Follows Clean Architecture principles for a layered architecture
- Implements a loosely coupled application that is easy to maintain and extend

## Technologies

- ASP.NET Core 6.0
- Blazor WebAssembly
- Entity Framework Core 6.0
- SQL Server 2022