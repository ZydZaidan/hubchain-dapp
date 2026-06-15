function App() {
  return (
    <>
      <div className="text-white bg-darkbg max-w-md mx-auto relative font-jakarta pb-20 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-5">
          <h1 className="font-space font-bold text-xl tracking-wide">
            HubChain
          </h1>
          <button className="text-neoncyan text-xs font-semibold px-4 py-2 rounded-full border border-neoncyan/30 bg-neoncyan/10 hover:bg-neoncyan/20 transition-all">
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
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
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
          <div className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group">
            <svg
              className="w-4 h-4 fill-current text-gray-300 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          {/* medsos2 */}
          <div className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group">
            <svg
              className="w-5 h-5 fill-current text-gray-300 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </div>
          {/* medsos3 */}
          <div className="w-12 h-12 rounded-full bg-glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all group">
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
          <button className="bg-cyberpurple py-6 px-4 rounded-3xl flex flex-col items-center justify-center hover:bg-cyberpurple/80 transition-all active:scale-95">
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
            <span className="text-sm font-semibold">Wallet Address</span>
          </button>
          {/* Qr Tip */}
          <button className="bg-neoncyan/5 py-6 px-4 border border-neoncyan/5 rounded-3xl flex flex-col items-center justify-center hover:bg-neoncyan/10 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neoncyan mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <span className="text-neoncyan text-sm font-semibold">Scan to Tip</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
