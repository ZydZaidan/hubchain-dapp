import React from "react";

function App() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  {
    /*overlay wallet connect*/
  }
  const [isWalletOpen, setIsWalletOpen] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  {
    /* Overlay QR */
  }
  const [isTipOpen, setIsTipOpen] = React.useState(false);
  {
    /* wallet */
  }
  const [isCopied, setIsCopied] = React.useState(false);
  const dummyWallet = "0x1234...abcd";
  const handleCopy = () => {
    navigator.clipboard.writeText(dummyWallet);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const minSwipeDistance = 50;

  const carouselData = [
    {
      id: 0,
      platform: "Twitter",
      icon: (
        <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop",
      desc: "Check out my latest design project on Twitter! #UIUX #Design",
    },
    {
      id: 1,
      platform: "Youtube",
      icon: (
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M21.582 6.186a2.665 2.665 0 0 0-1.876-1.888C18.047 3.846 12 3.846 12 3.846s-6.047 0-7.706.452a2.665 2.665 0 0 0-1.876 1.888C1.964 7.854 1.964 12 1.964 12s0 4.146.454 5.814a2.665 2.665 0 0 0 1.876 1.888C5.953 20.154 12 20.154 12 20.154s6.047 0 7.706-.452a2.665 2.665 0 0 0 1.876-1.888C22.036 16.146 22.036 12 22.036 12s0-4.146-.454-5.814zM9.982 15.481V8.519l6.58 3.481-6.58 3.481z" />
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
      desc: "Check out my latest design project on Youtube! #UIUX #Design",
    },
    {
      id: 2,
      platform: "Instagram",
      icon: (
        <svg
          className="w-4 h-4 fill-none stroke-current text-white stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
      desc: "Check out my latest design project on Instagram! #UIUX #Design",
    },
  ];
  {
    /* touch event for carousel */
  }
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveSlide((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1,
      );
    }

    if (isRightSwipe) {
      setActiveSlide((prev) =>
        prev === 0 ? carouselData.length - 1 : prev - 1,
      );
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#0a0a0a] sm:py-20 sm:my-10 flex justify-center items-center ">
        <div className="text-white bg-darkbg w-full max-w-md relative font-jakarta pb-20 min-h-screen sm:min-h-[850px] sm:h-auto sm:rounded-[40px] sm:shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:border sm:border-white/10 sm:max-w-lg sm:scale-[1.1] overflow-hidden">
          {/* AMBIENT GLOW EFFECTS */}
          <div className="absolute top-20 -left-10 w-72 h-72 bg-cyberpurple/20 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none z-0"></div>
          <div className="absolute top-48 -right-10 w-72 h-72 bg-neoncyan/10 rounded-full mix-blend-screen filter blur-[90px] pointer-events-none z-0"></div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-cyberpurple/20 via-neoncyan/5 to-transparent filter blur-[80px] pointer-events-none z-0"></div>

          {/* Header */}
          <header className="flex justify-between items-center px-6 py-5">
            <div className="flex items-center gap-1">
              <img src="/Logo.svg" alt="logo" className="" />
              <h1 className="font-space font-bold text-xl tracking-tighter">
                HubChain.
              </h1>
            </div>

            <button
              onClick={() => setIsWalletOpen(true)}
              className="text-neoncyan text-xs font-semibold px-4 py-2 rounded-full border border-neoncyan/30 bg-neoncyan/10 hover:bg-neoncyan/20 transition-all"
            >
              Connect Wallet
            </button>
          </header>
          {/* profile */}
          <div className="w-full h-48 relative overflow-visible">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
              alt="Hubchain Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative px-6">
            <div className="absolute -top-12 left-6">
              <img
                src="/photoProfile.jpg"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#09090B]"
              />
            </div>
          </div>
          <div className="mt-16 px-6">
            <h2 className="font-space font-bold text-2xl text-white">
              Zydstudio
            </h2>
            <p className="text-gray-400 text-sm font-medium mt-1">
              UIUX Designer
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum,
            </p>
          </div>
          {/* sosmed icon */}
          <div className="flex justify-center gap-4 mt-8">
            {/* medsos1 */}
            <a
              href="https://x.com/zydanx13"
              target="_blank"
              className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group cursor-pointer"
            >
              <svg
                className="w-4 h-4 fill-current text-gray-300 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* medsos2 */}
            <div className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group cursor-pointer">
              <svg
                className="w-5 h-5 fill-current text-gray-300 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </div>
            {/* medsos3 */}
            <div className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group cursor-pointer">
              <svg
                className="w-5 h-5 fill-none stroke-current text-gray-300 group-hover:text-white stroke-2 transition-colors"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
          {/* bento button */}
          <div className="grid grid-cols-2 gap-2 mt-8 px-6">
            {/* copy wallet */}
            <button
              onClick={handleCopy}
              className="bg-cyberpurple py-6 px-4 rounded-3xl flex flex-col items-center justify-center hover:bg-cyberpurple/80 transition-all active:scale-95"
            >
              {isCopied ? (
                <svg
                  className="w-6 h-6 text-white mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              )}

              <span className="text-sm font-semibold">
                {isCopied ? "Copied!" : "Wallet Address"}{" "}
              </span>
            </button>
            {/* Qr Tip */}
            <button
              onClick={() => setIsTipOpen(true)}
              className="bg-neoncyan/5 py-6 px-4 border border-neoncyan/5 rounded-3xl flex flex-col items-center justify-center hover:bg-neoncyan/10 transition-all active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-neoncyan mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                <path d="M21 21v.01"></path>
                <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                <path d="M3 12h.01"></path>
                <path d="M12 3h.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 12h1"></path>
                <path d="M21 12v.01"></path>
                <path d="M12 21v-1"></path>
              </svg>
              <span className="text-neoncyan text-sm font-semibold">
                Scan to Tip
              </span>
            </button>
          </div>
          {/*github*/}
          <div className="flex flex-col gap-4 mt-4 px-6">
                        <a
              href="https://github.com/ZydZaidan"
              target="_blank"
              className="flex items-center justify-between p-4 bg-glass border border-white/5 rounded-full  hover:bg-white/10 transition-all active:scale-95 group cursor-pointer "
            >
              <div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="font-space font-semibold text-sm">Github</span>
              <div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </div>
          {/* caraousel content */}
          <div
            className="mt-4 bg-glass border border-white/5 rounded-3xl p-5 relative mx-6"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-4"></div>
              <h3 className="font-space font-bold text-[14px] tracking-wide">
                Featured Content
              </h3>
              <svg
                className="w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>

            <div className="w-full h-40 rounded-2xl overflow-hidden mb-3">
              <img
                src={carouselData[activeSlide].image}
                alt="Featured Content"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              {carouselData[activeSlide].icon}
              <span className="font-jakarta text-xs font-bold text-white">
                {carouselData[activeSlide].platform}
              </span>
            </div>
            <p className="text-[14px} text-gray-400 leading-relaxed min-h-[40px]">
              {carouselData[activeSlide].desc}
            </p>
            <div className="flex justify-center gap-1.5 mt-5">
              {carouselData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? "w-4 bg-white" : "w-1.5 bg-gray-600 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

          {/* EXTERNAL LINKS */}
          <div className="flex flex-col gap-4 mt-4 px-6">
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-glass border border-white/5 rounded-full  hover:bg-white/10 transition-all active:scale-95 group cursor-pointer "
            >
              <div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="font-space font-semibold text-sm">
                Portfolio
              </span>
              <div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/myazidz/"
              target="_blank"
              className="flex items-center justify-between p-4 bg-glass border border-white/5 rounded-full  hover:bg-white/10 transition-all active:scale-95 group cursor-pointer "
            >
              <div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="font-space font-semibold text-sm">LinkedIn</span>
              <div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
            {/* <a
              href="https://github.com/ZydZaidan"
              target="_blank"
              className="flex items-center justify-between p-4 bg-glass border border-white/5 rounded-full  hover:bg-white/10 transition-all active:scale-95 group cursor-pointer "
            >
              <div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="font-space font-semibold text-sm">Github</span>
              <div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a> */}
          </div>

          <a
            href="#"
            className="item-center justify-center flex mt-48 text-gray-500 hover:text-white transition-colors"
          >
            <div className="font-space font-normal text-sm">Hubchain</div>
          </a>
        </div>
        {/* wallet connect overlay */}
        {isWalletOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setIsWalletOpen(false)}
          >
            <div
              className="bg-[#1c1c1e] w-full max-w-[420px] rounded-[24px] p-6 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-space font-bold text-center text-lg mb-6">
                Connect Your Wallet
              </h2>
              {/* wallet options */}
              {/* installed wallet */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm font-medium mb-3 ">
                  Installed
                </h3>
                <div className="flex flex-col gap-1">
                  {/* Metamask */}
                  <button className="flex items-center gap-4 w-full border border-white/10 rounded-2xl p-2 hover:bg-white/5 transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white/5  flex items-center justify-center p-1.5">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                        alt="Metamask"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-jakarta text-white font-semibold text-[15px]">
                        Metamask
                      </span>
                      <span className="font-jakarta text-neoncyan text-[11px] font-medium">
                        Recent
                      </span>
                    </div>
                  </button>
                  {/* CoinBase */}
                  <button className="flex items-center gap-4 w-full border border-white/10 rounded-2xl p-2 hover:bg-white/5 transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#0e5bff]  flex items-center justify-center p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="web3icons"
                      >
                        <path
                          fill="#0E5BFF"
                          d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
                        />
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M12 18.375a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75m-.75-8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-jakarta text-white font-semibold text-[15px]">
                        CoinBase
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              {/* Popular */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm font-medium mb-3 ">
                  Popular
                </h3>
                <div className="flex flex-col gap-1">
                  {/* connect */}
                  <button className="flex items-center gap-4 w-full border border-white/10 rounded-2xl p-2 hover:bg-white/5 transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#3b99fc]  flex items-center justify-center p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="web3icons"
                      >
                        <path
                          fill="#fff"
                          d="M6.685 8.71c2.935-2.813 7.695-2.813 10.63 0l.353.339a.35.35 0 0 1 0 .51l-1.208 1.158a.194.194 0 0 1-.266 0l-.486-.466c-2.048-1.963-5.368-1.963-7.416 0l-.52.498a.194.194 0 0 1-.266 0L6.297 9.592a.35.35 0 0 1 0-.51zm13.13 2.396 1.075 1.03a.35.35 0 0 1 0 .51l-4.85 4.648a.39.39 0 0 1-.531 0l-3.443-3.299a.097.097 0 0 0-.132 0l-3.442 3.3a.39.39 0 0 1-.532 0l-4.85-4.65a.35.35 0 0 1 0-.508l1.076-1.031a.387.387 0 0 1 .531 0l3.442 3.299a.097.097 0 0 0 .133 0l3.442-3.3a.387.387 0 0 1 .532 0l3.442 3.3a.097.097 0 0 0 .133 0l3.442-3.3a.39.39 0 0 1 .531 0"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-jakarta text-white font-semibold text-[15px]">
                        Connect Wallet
                      </span>
                    </div>
                  </button>
                  {/* Rainbow */}
                  <button className="flex items-center gap-4 w-full border border-white/10 rounded-2xl p-2 hover:bg-white/5 transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#133c8f] flex items-center justify-center p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="web3icons"
                      >
                        <path
                          fill="url(#rainbow__a)"
                          d="M3 7.05h1.35c6.959 0 12.6 5.641 12.6 12.6V21h2.7A1.35 1.35 0 0 0 21 19.65C21 10.454 13.546 3 4.35 3A1.35 1.35 0 0 0 3 4.35z"
                        />
                        <path
                          fill="url(#rainbow__b)"
                          d="M17.4 19.65H21A1.35 1.35 0 0 1 19.65 21H17.4z"
                        />
                        <path
                          fill="url(#rainbow__c)"
                          d="M4.35 3v3.6H3V4.35C3 3.604 3.604 3 4.35 3"
                        />
                        <path
                          fill="url(#rainbow__d)"
                          d="M3 6.6h1.35c7.207 0 13.05 5.843 13.05 13.05V21h-4.05v-1.35a9 9 0 0 0-9-9H3z"
                        />
                        <path
                          fill="url(#rainbow__e)"
                          d="M13.8 19.65h3.6V21h-3.6z"
                        />
                        <path
                          fill="url(#rainbow__f)"
                          d="M3 10.2V6.6h1.35v3.6z"
                        />
                        <path
                          fill="url(#rainbow__g)"
                          d="M3 12.45c0 .745.604 1.35 1.35 1.35a5.85 5.85 0 0 1 5.85 5.85c0 .745.604 1.35 1.35 1.35h2.25v-1.35a9.45 9.45 0 0 0-9.45-9.45H3z"
                        />
                        <path
                          fill="url(#rainbow__h)"
                          d="M10.2 19.65h3.6V21h-2.25a1.35 1.35 0 0 1-1.35-1.35"
                        />
                        <path
                          fill="url(#rainbow__i)"
                          d="M4.35 13.8A1.35 1.35 0 0 1 3 12.45V10.2h1.35z"
                        />
                        <defs>
                          <radialGradient
                            id="rainbow__a"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="rotate(-90 12 7.65)scale(16.6499)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".77" stop-color="#FF4000" />
                            <stop offset="1" stop-color="#8754C9" />
                          </radialGradient>
                          <radialGradient
                            id="rainbow__d"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="rotate(-90 12 7.65)scale(13.05)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".724" stop-color="#FFF700" />
                            <stop offset="1" stop-color="#FF9901" />
                          </radialGradient>
                          <radialGradient
                            id="rainbow__g"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="rotate(-90 12 7.65)scale(9.44997)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".595" stop-color="#0AF" />
                            <stop offset="1" stop-color="#01DA40" />
                          </radialGradient>
                          <radialGradient
                            id="rainbow__h"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(3.82499 0 0 10.2 9.975 20.325)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#0AF" />
                            <stop offset="1" stop-color="#01DA40" />
                          </radialGradient>
                          <radialGradient
                            id="rainbow__i"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(0 -3.82499 72.5331 0 3.675 14.025)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#0AF" />
                            <stop offset="1" stop-color="#01DA40" />
                          </radialGradient>
                          <linearGradient
                            id="rainbow__b"
                            x1="17.175"
                            x2="21"
                            y1="20.325"
                            y2="20.325"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FF4000" />
                            <stop offset="1" stop-color="#8754C9" />
                          </linearGradient>
                          <linearGradient
                            id="rainbow__c"
                            x1="3.675"
                            x2="3.675"
                            y1="3"
                            y2="6.825"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#8754C9" />
                            <stop offset="1" stop-color="#FF4000" />
                          </linearGradient>
                          <linearGradient
                            id="rainbow__e"
                            x1="13.8"
                            x2="17.4"
                            y1="20.325"
                            y2="20.325"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFF700" />
                            <stop offset="1" stop-color="#FF9901" />
                          </linearGradient>
                          <linearGradient
                            id="rainbow__f"
                            x1="3.675"
                            x2="3.675"
                            y1="10.2"
                            y2="6.6"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFF700" />
                            <stop offset="1" stop-color="#FF9901" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-jakarta text-white font-semibold text-[15px]">
                        Rainbow
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* tip overlay */}
        {/* --- MODAL OVERLAY SCAN TO TIP --- */}
        {isTipOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setIsTipOpen(false)}
          >
            <div
              className="bg-[#1C1C1E] w-full max-w-[320px] rounded-[32px] p-8 shadow-2xl border border-white/5 flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsTipOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="font-space text-white text-xl font-bold mb-2">
                Scan to Tip
              </h2>
              <p className="font-jakarta text-gray-400 text-xs text-center mb-6 px-4">
                Support the creator by sending ETH or any ERC-20 tokens to this
                address.
              </p>

              <div className="bg-white p-3 rounded-2xl mb-6">
                <img
                  src={`https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE0MGphNDkzazN3Nzd6c2NnYXEya2tpMTQxaTk4ZzF4dWdlYWl4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TKa7fQzChHylCQ89to/giphy.gif`}
                  alt="QR Code Tip"
                  className="w-40 h-40 rounded-xl"
                />
              </div>

              {/* Info Wallet Address */}
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full flex items-center justify-between">
                <span className="text-gray-300 font-mono text-xs truncate mr-3">
                  {dummyWallet}
                </span>
                <button
                  onClick={handleCopy}
                  className="text-neoncyan text-xs font-semibold hover:text-white transition-colors whitespace-nowrap"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
