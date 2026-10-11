# [Frontend] - EventHub Web v1.0.0

<p>
  <a href="https://react.dev/"><img style="border-radius:4px" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
  <a href="https://vite.dev/"><img style="border-radius:4px" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://tailwindcss.com/"><img style="border-radius:4px" src="https://img.shields.io/badge/Tailwind_CSS-38Bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://reactrouter.com/"><img style="border-radius:4px" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"></a>
</p>

A modern, responsive frontend web application built with React, Vite, and Tailwind CSS, developed as part of the Koda Batch 9 curriculum. This project serves as the client-side interface for exploring community-driven events, managing user memberships, and interacting with the EventHub RESTful API.

## Tech Stack

- [![React](https://img.shields.io/badge/React-v19.2.8-blue?logo=react&logoColor=white)](https://react.dev/) <br>Digunakan sebagai pustaka utama berbasis komponen untuk membangun antarmuka pengguna interaktif pada aplikasi _EventHub Web Koda Batch 9_ ini.

- [![Vite](https://img.shields.io/badge/Vite-v8.2.0-purple?logo=vite&logoColor=white)](https://vite.dev/)<br>Dipakai sebagai _build tool_ dan _development server_ super cepat untuk mengompilasi dan menjalankan aplikasi React secara efisien.
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-blue?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) <br>Menjadi kerangka kerja _utility-first CSS_ utama untuk merancang antarmuka yang responsif, modern, dan konsisten dengan tema kustom.
- [![React Router](https://img.shields.io/badge/React_Router-v8.3.0-red?logo=react-router&logoColor=white)](https://reactrouter.com/) <br>Digunakan untuk menangani navigasi halaman, _routing_ dinamis, serta perlindungan rute privat (_protected routes_) antar halaman aplikasi.

## Features

- Authentication (Register, Login, Logout, Forgot Password)
- User Profile (View Profile, Update Profile, Change Password)
- Community Discovery (List Communities, Filter Communities, Detail Community, Join/Leave Community, View Members)
- Event Exploration (List Events, Filter Events, Detail Event, Join/Leave Event, Save/Unsave Event)
- User Dashboard (Joined Events, Saved Events, Joined Communities)

## Usage Instruction

### Clone this repository

```bash
$ git clone [https://github.com/almarufh/koda-b8-frontend-eventhub](https://github.com/almarufh/koda-b8-frontend-eventhub) project-eventhub-web
```

### Environment Setup

Create your environment on the root directory named .env example use .env.example

#### Install Dependencies

```bash
$ npm install
```

#### Running Development Server

```bash
$ npm run dev
```

#### Building for Production

```bash
$ npm run build
```

## Main Pages & Routes

| Path                    | Component / Page        | Description               |
| :---------------------- | :---------------------- | :------------------------ |
| `/auth/register`        | `RegisterPage`          | Create New Account        |
| `/auth/login`           | `LoginPage`             | Log In                    |
| `/auth/forgot-password` | `ForgotPasswordPage`    | Forgot Password           |
| `/communities`          | `CommunityListPage`     | List & Filter Communities |
| `/communities/{id}`     | `CommunityDetailPage`   | Get Detail Community      |
| `/events`               | `EventListPage`         | List & Filter Events      |
| `/events/{id}`          | `EventDetailPage`       | Get Detail Event          |
| `/user/profile`         | `ProfilePage`           | Get & Update Profiles     |
| `/user/events/joined`   | `JoinedEventsPage`      | Get Joined Events         |
| `/user/events/saved`    | `SavedEventsPage`       | Get Saved Events          |
| `/user/communities`     | `JoinedCommunitiesPage` | Get Joined Communities    |

## License [![License: MIT](https://img.shields.io/badge/License-MIT-red)](https://opensource.org/license/mit)

This project is licensed under the MIT License

## CONTACTS

[![Email](https://img.shields.io/badge/Email-almarufhidayat99@gmail.com-blue?logo=maildotru&logoColor=red)](mailto:almarufhidayat99@gmail.com)<br>
[![WhatsApp](https://img.shields.io/badge/WhatsApp-6281973779380-blue?logo=whatsapp&logoColor=green)](https://wa.me/6281973779380)

## Related Project

[![WhatsApp](https://img.shields.io/badge/BACKEND--blue?logo=googlechrome&logoColor=blue)](https://github.com/almarufh/backend-eventhub)
