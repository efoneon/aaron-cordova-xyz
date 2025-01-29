import {Arrow} from './Arrow';

export function Header() {
  return (
    <header className="sticky top-0 flex border-b-2 bg-[#111111] p-4">
      <h1
        className="glow cursor-pointer font-mono text-5xl text-sky-700 underline"
        onClick={refreshToHeader}
      >
        aaron-cordova-xyz
      </h1>
      <div className="flex gap-8 pl-10 pt-3 text-xl text-white">
        <div className="flex gap-1">
          <a href="./">Explore</a>
          <div className="translate-y-1">
            <Arrow />
          </div>
        </div>
        <div className="flex gap-1">
          <a href="./about.tsx">About</a>
          <div className="translate-y-1">
            <Arrow />
          </div>
        </div>
        <div className="flex gap-1">
          <a href="./about.tsx">hello again</a>
          <div className="translate-y-1">
            <Arrow />
          </div>
        </div>
      </div>
    </header>
  );
}

// Refresh the page to go back to header (home) page

function refreshToHeader() {
  const currentLocation = window.location.href;
  window.location.href = currentLocation;
}
