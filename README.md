# React Beginner Course
## These are just notes found on this video
```
https://www.youtube.com/watch?v=siTUv1L9ymM&list=PLrnPJCHvNZuBH7pax5p75JDNblo8rpl00
```

### Initialization of Frameworks
1. For Vite, type this command in the folder you want to create the project at
```
npm create vite@latest
```
2. Select the React Framework + a TypeScript variant (TypeScript + SWC was picked)
3. Run these commands in the cmd to install packages for the Vite project
```
npm install
npm run dev
```
4. For Tailwind with Vite, run this command to install the Tailwind packages
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
5. After running the commands, a tailwind.config.js file should be present. Copy paste these values on the content block
```
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
```
These make sure that Tailwind runs on js, ts, jsx, and tsx files
6. In the index.css file, copy paste these values to wire your Tailwind utility classes
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
7. Make sure to install Tailwind CSS Intellisense and ES Lint, and configure File Association and Editor Quick Suggestion

### How to Run:
1. Navigate to the react-todo-app folder 
```
cd react-todo-app
```
2. Run these commands to run it in localhost:5173
```
npm install
npm run dev
```


