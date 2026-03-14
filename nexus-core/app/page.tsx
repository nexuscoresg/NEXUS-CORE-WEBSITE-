import HomeClient from "./HomeClient";

// Since we have metadata in layout.tsx, we don't strictly need it here if the default is good enough.
// But we can add specific keywords or alternate titles if needed.
// For now, the layout metadata covers the home page well.

export default function Home() {
  return <HomeClient />;
}
