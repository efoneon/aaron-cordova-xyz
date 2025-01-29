export function ElementOfMonth() {
  return (
    <>
      <div className="flex pl-10 italic text-white">
        <img
          src="/src/img/notification.png"
          alt="notification"
          height={'10px'}
          width={'30px'}
          className="-translate-y-1 opacity-65"
        />
        <div className="flex gap-1 pl-1 text-gray-500">
          Check here every month for new
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            className="transistion text-gray-500 underline duration-200 hover:text-orange-600"
            target="_blank"
          >
            HTML
          </a>
          elements.
        </div>
      </div>
      <h1 className="bg-black pb-40 pl-52 pt-20 font-mono text-5xl text-[#c1c1c1]">
        Element of the month<span className="text-amber-300">: </span>
        <code className="rounded-md bg-red-600 bg-opacity-50 p-1 text-red-400">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
            className="underline"
            target="_blank"
          >
            div
          </a>
        </code>
      </h1>

      {/* Description of element */}
      <p className="mt-3 max-w-3xl border-t-2 pl-52 text-xl text-white">
        <code className="mr-1 rounded-md bg-red-600 bg-opacity-50 p-1 pt-0 text-red-400">
          divs
        </code>
        are really useful elements in HTML. They are used to group together
        other elements and apply styles or scripts to them collectively.
        <code className="m-2 rounded-md bg-red-600 bg-opacity-50 p-1 text-red-400">
          div
        </code>
        elements are block-level elements, which means they take up the full
        width available and start on a new line.
      </p>
    </>
  );
}
