````markdown
# SWOT Explorer

**SWOT Explorer** is a full-stack application that enables users to explore and analyze Strengths, Weaknesses, Opportunities, and Threats (SWOT). It features a responsive frontend built with Next.js and Tailwind CSS, and a FastAPI backend that serves SWOT data via REST APIs.

---

## 🔧 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Deployment**: [Vercel](https://vercel.com/) for frontend [Google Cloud Run](https://cloud.google.com/run) for backend

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/feneel/swot-explorer.git](https://github.com/feneel/swot-explorer-main.git)
cd swot-explorer
````

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Environment setup

Create a `.env.local` file in the `frontend/` directory:

```env
BACKEND_API_URL=http://localhost:8000
```

Replace the value with your deployed FastAPI URL in production.

### 4. 
1. Run frontend locally

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---


### 5. Install backend dependencies

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 6. Run FastAPI backend

uvicorn main:app --reload


The backend API will be available at [http://localhost:8000](http://localhost:8000)

---



## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Feneel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND...
```

---

## 🤝 Contact

**Feneel Doshi**
📧 [feneeldoshi@gmail.com](mailto:feneeldoshi@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/feneeldoshi/)
🌐 [Portfolio](https://feneel.github.io/)

```
