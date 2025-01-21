export function Header() {
  return (
    <>
      <header className="flex h-screen bg-stone-900">
        <div className="select-none pl-96 pt-36 font-mono text-[80px] font-extrabold">
          <h1>Hello,</h1>
          <h1 className="glow-white">World!</h1>
        </div>
        <h1 className="glow pb-9 font-mono text-[45px] text-sky-700 underline">
          aaron-cordova-xyz
        </h1>
      </header>
    </>
  );
}
