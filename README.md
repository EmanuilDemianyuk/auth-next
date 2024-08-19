<div align='center'>
   <img width="200px" src='https://cdn-icons-png.flaticon.com/512/11274/11274663.png'/>
<br>
<h1 align='center'>Authorization form</h1>
</div>

**Briefly about the repository**

<p>Hello everyone, this repository contains an easy and accessible example of user authorization on the next.js platform with 2FA capabilities and password recovery.</p>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/EmanuilDemianyuk/auth-next.git
cd auth-next
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=""
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED=""

AUTH_SECRET=""

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=""
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

👉 Live Demo: <a href='https://auth-next-ruddy.vercel.app' target="_blank">Auth lock Demo</a>

**Build with:**

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,ts,prisma,tailwind&theme=light&perline=4)](https://skillicons.dev)

**Screenshots of the Project 📸**

** align='center'>Login page 🔐**

<div align='center'>
    <img src='public/assets/screenshots/auth-next-ruddy.vercel.app_auth_login.png'/>
</div>

<br><br>

** align='center'>Register page 🔏**

<div align='center'>
<img src='public/assets/screenshots/auth-next-ruddy.vercel.app_auth_register.png'/>
</div>

<br><br>

** align='center'>Settings page ⚙️**

<div align='center'>
<img src='public/assets/screenshots/auth-next-ruddy.vercel.app_settings.png'/>
</div>

<br><br>
