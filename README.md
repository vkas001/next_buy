# Welcome to NextBuy 👋

NextBuy - Secondary Marketplace Mobile App

A cross-platform mobile applicaiton built with React Native and Expo that allows users to buy and sell second-hand products all in one place.
The app supporsts authenticaiton, product listing, product pricing, discounts, vouchers, payment, refund, cart, wishlist, orders, pending, real time chat and real-time backend services using Appwrite.

Project Overview 
NextBuy help users:

- Post products for sale 
- Browse/search items
- Add to card/wishlist
- use discounts/vouchesrs
- Online payment
- Refund if the order is cancelled on time
- Place orders
- Manage profiles
- Secure login/signup

This project is developed collaboratively by a team.
Follow the setup guide and rules carefully to avoid conflicts.

Tech Stack

Frontend 

- React Native
- Expo
- TypeScript 
- NativeWind( Tailwind for React Native )
- React Navigation

Backend

-AppWrite (Auth, Database, Storage)

Version Control

-Git + GitHub

Getting Started (First Time Setup)

1. Clone the Repository

# git clone
# cd next_buy

2. Install dependencies

# npm install

3. Start the project 

# npx expo start

4. Run on device

- Press a -> Android
- Press i -> iOS
- Scan QR using Expo Go

Entironment Variables

Create a .env file in the root:
- EXPO_PUBLIC_APPWRITE_ENDPOINT = YOUR_ENDPOINT
- EXPO_PUBLIC_APPWRITE_PROJECT_ID= YOUR_PROJECT_ID

Important:
- Do NOT commit .env
- Use .env.example for sharing structure only

Folder Structure
# follow the modular monolith folder structure if any confusion

src/

|-- features/
|   |-- Auth/
|   |   |-- components/  # Components specific to the Auth feature
|   |   |-- screens/     # Screens related to authentication (LoginScreen, RegisterScreen)
|   |   |-- hooks/       # Hooks specific to Auth
|   |   |-- store/       # Local state management for Auth (e.g., Redux slice or Context)
|   |   |-- types/       # TypeScript types/interfaces for Auth
|   |   |-- utils/       # Utility functions specific to Auth
|   |   |-- index.ts     # Public exports for the Auth module
|   |-- Profile/
|   |   |-- ... (similar structure as Auth)
|   |-- Payments/
|   |   |-- ...
|-- components/ (or 'shared/components')

|   |-- Button/        # Generic UI components used across the app
|   |-- Avatar/
|   |-- TextField/
|-- services/ (or 'shared/services')

|   |-- apiService.ts    # Centralized API configurations and general http client
|   |-- analyticsService.ts
|-- hooks/ (or 'shared/hooks')

|   |-- useAppTheme.ts   # Reusable global hooks
|-- utils/ (or 'shared/utils')

|   |-- formatDate.ts    # General utility functions
|-- navigation/

|   |-- AppNavigator.tsx
|   |-- AuthNavigator.tsx
|   |-- types.ts         # Navigation types
|-- store/ (or global state management folder)

|   |-- rootReducer.ts
|   |-- store.ts
|-- assets/

|   |-- images/
|   |-- fonts/
|-- App.tsx
|-- index.ts/js

Coding Guidelines 

General 

- Use TypeScript only 
- Functional components only
- Use NativeWind for styling
- keep components small
- Avoid  duplicate code

Styling

- Do NOT use inline styles
- Prefer className (NativeWind)

Clean Code
- Remove console.log before commit 
- write meaningful variable names

Naming Convections

Components -> ProductCard.tsx
Screens -> HomeScreen.tsx
Hooks -> useAuth.tsx
Utils -> formatPrice.tsx
Constants -> colors.ts

Git Workflow (Team Rules)

Branches

- main -> production 
- develop -> integration
- feature -> new features

Rules 
 
- Never push directly to main
- Always create feature branch
- Create PR to develop
- Review before merge

Example 
- featutre/login-screen
- feature/cart-system

Development Flow

1. Pull latest develop 
2. Create branch
3. Code feature
4. Test
5. Commit
6. Push
7. Create PR

App Architecture 

UI (screens/components) 
         |
Services (API calls)
         |
Appwrite backend
      |
Database/Storage

Common Problems & Fixes

Metro cache issues
# npx expo start -c

Node modules issue
# -rf node_modules
# npm install

Contribution Guide

Before coding:
- Read folder rules
- Follow naming convetions

 While coding: 
 - keep commits small
 - write clean code

 Before PR:
 - Test on device
 - Remove logs
 - Check errors

 Team Responsibilities
 - Patrik & Bidusha -> UI/UX
 - Bikash -> UX/Backend

 Liscense

 This project is for academic purposes.

 Maintainers
 Project Team - NextBuy