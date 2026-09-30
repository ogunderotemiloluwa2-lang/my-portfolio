export const projects = [
  {
    id: 0,
    featured: true,
    title: 'EventFlow — Event Management Platform',
    description:
      'My startup: an end-to-end event management platform that runs an event from first invite to final photo. Organisers create events, invite guests, and manage RSVPs; attendees join with an 8-character pass ID and QR code. It includes live check-in via an in-browser QR scanner, real-time attendance and RSVP analytics with data export, automated email reminders, and a shared event gallery with Google Drive integration. Built with React and a token-authenticated API.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop',
    tags: ['React', 'QR Check-in', 'Real-time Analytics', 'JWT Auth', 'Google Drive API', 'Email Automation'],
    live: 'https://eventtracking.vercel.app/',
  },
  {
    id: 1,
    title: 'PA Boss — AI Personal Assistant',
    description:
      'A personal assistant app that helps you set goals and actually stick to them. You add what you want to achieve, and it breaks it into steps, tracks your progress, and nudges you when you go quiet. Built with React and an AI API for the suggestions, with habit tracking and progress charts.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['React', 'AI/ML', 'Real-time Updates', 'Data Encryption'],
    github: 'https://github.com/Ogunderotamiloluwa',
    live: 'https://personal-assistan.netlify.app',
  },
  {
    id: 2,
    title: 'Beacon Scholar Foundation',
    description:
      'A scholarship and grant platform built for a foundation moving off spreadsheets. Applicants fill in a long multi-step form that saves progress automatically, then track their status without emailing the office. Includes mentor matching and a resource library.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop',
    tags: ['React', 'Payment Processing', 'Advanced Forms', 'Email Automation'],
    github: 'https://github.com/Ogunderotamiloluwa',
    live: 'https://scholarhipandgrant.netlify.app',
  },
  {
    id: 3,
    title: 'WorldCups — FIFA 2026 Ticket Booking',
    description:
      'A ticket booking concept for the 2026 World Cup. You browse matches, pick a seat from an interactive stadium map with VIP, Regular, and Economy tiers, pay through Stripe, and get a QR ticket. The seat map was the interesting part - keeping taken seats in sync as people book.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
    tags: ['React', 'Stripe', 'Interactive Seat Maps', 'QR Tickets'],
    github: 'https://github.com/Ogunderotamiloluwa',
    live: 'https://wordcups.netlify.app',
  },
  {
    id: 4,
    title: 'HolidayTix — Event Ticket Marketplace',
    description:
      'A dynamic event ticket marketplace for concerts, sports, theatre, and nightlife across major cities. Features real-time event listings, a secure booking system, and instant ticket delivery with category filtering and transparent pricing.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
    tags: ['React', 'Stripe', 'Real-time Updates', 'Inventory Management'],
    github: 'https://github.com/Ogunderotamiloluwa',
    live: 'https://myticketboard.netlify.app',
  },
  {
    id: 5,
    title: 'SymptomChat — AI Symptom Checker',
    description:
      'A chat-based symptom checker that gives a rough assessment without asking for any personal details. Built it because most health tools want your data before they tell you anything. Uses a medical AI API, and nothing you type is stored.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
    tags: ['React', 'AI/ML', 'Medical API', 'Privacy-Focused'],
    github: 'https://github.com/Ogunderotamiloluwa',
    live: 'https://mynd2project.netlify.app',
  },
  {
    id: 6,
    title: 'DevLink — Developer Collaboration Network',
    description:
      'A full-stack developer network where engineers find collaborators for side projects, discover AI tools they actually ship with, and share build-in-public updates. Built as a React/Vite/Tailwind frontend consuming a Node.js/Express/MongoDB REST API with JWT auth, Socket.IO real-time messaging, Cloudinary media uploads, and Swagger-documented endpoints. The backend was developed incrementally across 11 phases covering auth, profiles, social feed, follows, communities, project collaboration, AI tool directory, real-time chat, notifications, search, and a consolidation audit pass.',
    image:
      '/devlink.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT Auth', 'Cloudinary', 'Swagger'],
    github: 'https://github.com/ogunderotemiloluwa2-lang/devlink',
    live: 'https://devlinkconnect.vercel.app/',
  },
  {
    id: 7,
    title: 'LG CUT — Barber Appointment Platform',
    description:
      'A full-stack barber booking platform for LG CUT (FUNAAB & Abeokuta, Ogun State). Customers book in-shop or home-service appointments online, with a password-protected admin dashboard for managing bookings and availability. Users browse a service gallery, choose between visiting the shop or a home-service address, pick an available time slot, and confirm — with live price calculation. The backend validates service areas, enforces working hours and booking conflicts, and sends instant notifications to the owner via email (Formspree) and Telegram simultaneously. Deployed with the React frontend on Netlify and the Node/Express API on Render.',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=900&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Express', 'Vite', 'Full-Stack', 'REST API', 'Booking System', 'Netlify', 'Render', 'Telegram Bot API'],
    github: 'https://github.com/ogunderotemiloluwa2-lang/frontend-LGcut',
    live: 'https://lg-barbing.netlify.app',
  },
]
