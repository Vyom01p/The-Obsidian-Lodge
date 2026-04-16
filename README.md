🌐 The Demo & Live Links
Live Site: https://the-obsidian-lodge27.vercel.app

Source Code: (Your GitHub Repository Link)

Tech Stack: Next.js 15, Tailwind CSS, Supabase, Auth.js (NextAuth).

📝 Project "Pitch" (The Copy)
The Obsidian Lodge is a boutique cabin reservation platform designed for luxury and speed. It bridges the gap between high-end design and complex backend logic.

For Users: It offers a smooth, distraction-free booking flow with Google Authentication.

For Admins: It provides a robust backend through Supabase to manage pricing, settings, and availability.

🛠️ Necessary "Under the Hood" Details

1. The Data Pipeline (Functions)
   These are the most important functions in your data-service.js that power the app:

getCabin(id): Fetches unique cabin data based on the dynamic URL.

getBookedDatesByCabinId(id): The most complex logic in the app; it maps existing bookings to a date range to prevent double-booking.

getSettings(): Controls the "rules" of the lodge (e.g., "Maximum 90 days stay").

2. Authentication Logic
   NextAuth Google Provider: Handles the "Login with Google" handshake.

Middleware Protection: A middleware.js file ensures that if a user tries to access /account without being logged in, they are immediately bounced to the /login page.

3. Database Schema
   You have four primary tables in Supabase:

cabins: Name, capacity, price, discount, and image URL.

guests: Full name, email, and nationality.

bookings: Join table connecting guests and cabins with dates and pricing.

settings: Global constraints for the lodge operations.

⚙️ The "Secret Sauce" (Environment Variables)
Without these, the project is a "brick." Every deployment needs:

NEXTAUTH_URL: Your live Vercel link.

NEXTAUTH_SECRET: A random string for encrypting cookies.

SUPABASE_SERVICE_ROLE_KEY: Required for server-side operations that bypass RLS.

AUTH_GOOGLE_ID / SECRET: Your credentials from the Google Cloud Console.

🚀 How to Run It Locally
Clone the repo.

Run npm install.

Create a .env.local file with the variables listed above.

Run npm run dev.

Access the site at http://localhost:3000.
