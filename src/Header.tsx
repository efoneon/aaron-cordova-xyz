export function Header() {
  return (
    <header className="sticky top-0 flex border-b-2 bg-black p-4">
      <h1
        className="glow cursor-pointer font-mono text-[45px] text-sky-700 underline"
        onClick={refreshToHeader}
      >
        aaron-cordova-xyz
      </h1>
      <div className="flex gap-8 pl-10 pt-6 text-xl text-white">
        <a href="./">Explore</a>
        <a href="#about">About</a>
        <a>hello again</a>
      </div>
    </header>
  );
}

// Refresh the page to go back to header (home) page

function refreshToHeader() {
  const currentLocation = window.location.href;
  window.location.href = currentLocation;
}
