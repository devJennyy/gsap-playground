const Homepage = () => {
  const playgroundLinks = [
    {
      label: "Scroll Trigger",
      href: "/scroll-trigger",
    },
    {
      label: "Pinning",
      href: "/pinning",
    },
    {
      label: "Faded Text",
      href: "/faded-text",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center mt-32">
      <div className="flex flex-col gap-5 mb-[3.5rem]">
        <p className="text-[58px] font-bold w-full max-w-[800px] capitalize">
          The homepage UI is currently <span>under development.</span>
        </p>
        <p className="text-lg text-secondary leading-8 w-full max-w-[730px]">
          This website is a collection of creative animations and experiments
          built with GSAP{" "}
          <a
            href="https://gsap.com/"
            target="_blank"
            className="text-green-300 hover:underline underline-offset-4"
            rel="noopener noreferrer"
          >
            (GreenSock Animation Platform)
          </a>
          , React, and CSS. It’s a space for me to learn, explore, and push the
          boundaries of web animations.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {playgroundLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border px-5 py-2 rounded-md hover:opacity-70 transition-all duration-300 ease-in-out"
          >
            <p className="capitalize">{link.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
