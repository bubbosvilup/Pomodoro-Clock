# Pomodoro Clock ⏳

A modern **Pomodoro Timer App** built with **React** and **TypeScript**. This app helps boost your productivity using the Pomodoro technique: 25-minute work sessions followed by short breaks.

## 🚀 Features

- ⏱️ Customizable timer with work sessions, short breaks, and long breaks. (coming soon).
- 🔊 Sound notifications at the end of each session (using Howler.js). (coming soon).
- 💾 Saves the state of completed sessions. (coming soon).
- 🌙 Dark mode (coming soon).
- 📱 Responsive design, mobile-friendly. (coming soon).
- 🎨 Modern styling with **Tailwind CSS** and **Shadcn/UI**.
- ⚛️ State management with **Jotai**.
- 🔥 Smooth animations with **Framer Motion**.

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Jotai](https://jotai.org/)
- [Howler.js](https://howlerjs.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bubbosvilup/Pomodoro-Clock.git
   cd Pomodoro-Clock
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173)

---

## 🔧 Customization

You can adjust the default timer durations by modifying the values in:

```
src/atoms/timerAtoms.ts
```

- `workDurationAtom`: Duration of the work session (in seconds).
- `shortBreakDurationAtom`: Duration of the short break.
- `longBreakDurationAtom`: Duration of the long break.

---

## 🤝 Contributing

Contributions are welcome! ✨  
To contribute:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Inspired by the **[Pomodoro Technique](https://francescocirillo.com/pages/pomodoro-technique)**.
- Thanks to all the open-source libraries used!
