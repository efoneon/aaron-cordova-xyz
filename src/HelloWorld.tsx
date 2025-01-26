export function HelloWorld() {
  return (
    <>
      <div className="h-screen bg-stone-900 pl-96 pt-36 font-mono text-[80px] font-extrabold">
        <h1>Hello,</h1>
        <h1 className="glow-earth bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
          World.
        </h1>
      </div>
      <div className="h-60 bg-gradient-to-b from-stone-900 to-black"></div>
    </>
  );
}
