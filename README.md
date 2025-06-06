# 💳 SecureBank – Full-Stack Online Banking Platform


Overview: SecureBank is a modern full-stack online banking web application built with **React**, **TypeScript**, **Spring Boot**, and **MySQL**. The project simulates essential banking operations such as user registration, secure login, and personalized customer dashboards. It is designed to demonstrate secure authentication, structured data handling, and responsive frontend UI.

- Implement front-end, back-end, database
- Implement ORM, JDBC connection, Hibernate, JPA
- Implement Rest API
## 🚀 Features

- 🔐 User registration and secure login using Spring Security and encrypted passwords
- 👤 Customer information management (One-to-One relation with user)
- 📦 RESTful APIs built with Spring Boot
- 🌐 React frontend with Tailwind CSS for clean, responsive UI
- ⚙️ Reusable frontend hooks for data fetching (using SWR)
- 📄 Form validation on both client and server side
- ⛓️ Modular project structure following full-stack best practices
- 📊 Planned features: transaction simulation, fraud detection (AI), and Dockerized deployment
## 🛠️ Tech Stack

**Frontend**
- React + TypeScript
- Tailwind CSS
- SWR (for data fetching)
- React Router DOM

**Backend**
- Java + Spring Boot
- Spring Security (planned)
- JPA/Hibernate
- REST API design

**Database**
- MySQL

**Tooling**
- Postman
- Git & GitHub
- Maven
- VSCode + IntelliJ
## Software Architechture 

![Image](https://github.com/user-attachments/assets/cf593ddd-273a-45a9-97d1-4567e7ae3bf4)

## Database

ERD
![](obsidian://open?vault=Obsidian%20Vault&file=Proj%2FAsset%2Ferd_bank.png)

## Project Structure

```bash
banking-app/
├── backend/                     # Spring Boot Java backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/banking/backend/
│   │   │   │   ├── controller/           # REST API endpoints
│   │   │   │   ├── model/                # JPA entities
│   │   │   │   ├── repository/           # Spring Data JPA interfaces
│   │   │   │   ├── service/              # Business logic
│   │   │   │   ├── security/             # Auth config (JWT/OAuth2)
│   │   │   │   └── BackendApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── static/               
│   │   └── test/
│   │       └── ...                       # Unit & integration tests
│   ├── pom.xml                          # Maven build config
│   └── .gitignore
│
├── frontend/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/                 # UI components
│   │   ├── pages/                      # Views (Home, Dashboard, etc.)
│   │   ├── services/                   # Axios API calls
│   │   ├── context/                    # React context (e.g., Auth)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .gitignore
│
├── docker/                     # Docker-related files
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml

```


Made with ❤️ by **Harry Le**
