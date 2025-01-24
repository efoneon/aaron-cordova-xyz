export function Header() {
  return (
    <>
      <div className="sticky top-0 flex border-b-2 bg-black p-4">
        <h1
          className="glow cursor-pointer font-mono text-[45px] text-sky-700 underline"
          onClick={refreshToHeader}
        >
          aaron-cordova-xyz
        </h1>
        <div className="flex gap-8 pl-10 pt-6 text-xl text-white">
          <a href="./">Explore</a>
          <a href="/src/About.tsx">About</a>
          <a>hello again</a>
        </div>
      </div>
      <header className="flex h-screen bg-stone-900">
        <div className="pl-96 pt-36 font-mono text-[80px] font-extrabold">
          <h1>Hello,</h1>
          <h1 className="glow-earth bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            World.
          </h1>
        </div>
      </header>

      {/* Fade into about page with gradient */}
      <div className="h-60 bg-gradient-to-b from-stone-900 to-black"></div>
    </>
  );
}

// Refresh the page to go back to header (home) page

function refreshToHeader() {
  const currentLocation = window.location.href;
  window.location.href = currentLocation;
}
