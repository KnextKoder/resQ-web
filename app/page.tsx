"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-white text-black selection:bg-green-500/30">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">

        <div className="relative mb-12 group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/30 rounded-full animate-pulse-ring delay-75" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500/40 rounded-full animate-pulse-ring delay-200" />
          <div className="relative z-10 w-20 h-20 bg-linear-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-900/50 hover:scale-105 transition-transform duration-500 ease-out">
            <Image
              src="/icon.png"
              alt="resQ Logo"
              width={64}
              height={64}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-black to-black/60">
          Safety at the <br className="hidden md:block" />
          <span className="text-green-500 inline-block">speed of sound.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-700 max-w-2xl mb-10 leading-relaxed">
          resQ is an open-source emergency dispatch app.
          Instant voice recordings and precise location tracking ensure help arrives when every second counts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => setShowDownloadModal(true)}
            className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download App
          </button>
          <button
            onClick={() => setShowGithubModal(true)}
            className="px-6 py-3 rounded-full border border-black/20 text-black font-medium hover:bg-black/5 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer active:scale-95"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            GitHub Repo
          </button>
        </div>
      </section>

      <section id="features" className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How it works</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Three simple steps to bridge the gap between emergency and response.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="1. Record"
            description="Record a short voice note describing the emergency you're witnessing or experiencing. Your location is captugreen instantly."
            icon={
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            }
          />
          <FeatureCard
            title="2. Analyze"
            description="Google Gemini immediately processes your audio to determine the emergency type and severity with lightning precision."
            icon={
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
              </svg>
            }
          />
          <FeatureCard
            title="3. Dispatch"
            description="Gemini identifies and calls the most relevant authorities closest to your location, ensuring help arrives at the speed of sound."
            icon={
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>
      </section>


      {/* Footer */}
      <footer className="w-full py-10 border-t border-zinc-200 text-center text-zinc-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <button onClick={() => setShowGithubModal(true)} className="hover:text-black transition-colors font-medium cursor-pointer">Source Code</button>
          <button onClick={() => setShowDownloadModal(true)} className="hover:text-black transition-colors font-medium cursor-pointer">Download App</button>
        </div>
        <p>&copy; {new Date().getFullYear()} resQ. Safety at the speed of sound.</p>
      </footer>

      {/* Warning Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowDownloadModal(false)} />
          <div className="relative bg-white p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl border border-zinc-100 animate-in fade-in zoom-in duration-300 ease-out">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-green-200 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 tracking-tight">Testing Version</h3>
            </div>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              resQ is currently in private testing. This demo is not yet available on the Play Store or App Store.
              Continuing will download the direct APK for your Android device.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="https://expo.dev/artifacts/eas/4kYUDAiqoepZxgeRNk3kpx.apk"
                target="_blank"
                className="w-full px-8 py-4 rounded-2xl bg-black text-white font-bold text-center hover:bg-zinc-800 transition-all active:scale-[0.98]"
                onClick={() => setShowDownloadModal(false)}
              >
                Continue Download
              </Link>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="w-full px-8 py-4 rounded-2xl border border-zinc-200 text-zinc-400 font-semibold hover:bg-zinc-50 transition-all cursor-pointer active:scale-[0.98]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Repo Selection Modal */}
      {showGithubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowGithubModal(false)} />
          <div className="relative bg-white p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl border border-zinc-100 animate-in fade-in zoom-in duration-300 ease-out">
            <h3 className="text-2xl font-bold mb-2 text-zinc-900 tracking-tight text-center">Open Source Repositories</h3>
            <p className="text-zinc-500 mb-8 leading-relaxed text-center text-sm">
              Explore the source code powering the resQ ecosystem.
            </p>
            <div className="flex flex-col gap-4">
              <RepoLink
                title="Mobile Application"
                subtitle="The expo mobile app github repo."
                href="https://github.com/KnextKoder/resQ"
                onClick={() => setShowGithubModal(false)}
              />
              <RepoLink
                title="External Server"
                subtitle="The backend server and API github repo."
                href="https://github.com/KnextKoder/resQ-server"
                onClick={() => setShowGithubModal(false)}
              />
              <RepoLink
                title="Landing Page"
                subtitle="The resQ website github repo."
                href="https://github.com/KnextKoder/resQ-web"
                onClick={() => setShowGithubModal(false)}
              />
              <button
                onClick={() => setShowGithubModal(false)}
                className="mt-2 w-full px-8 py-4 rounded-2xl border border-zinc-200 text-zinc-400 font-semibold hover:bg-zinc-50 transition-all cursor-pointer active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-zinc-200 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function RepoLink({ title, subtitle, href, onClick }: { title: string, subtitle: string, href: string, onClick: () => void }) {
  return (
    <Link
      href={href}
      target="_blank"
      onClick={onClick}
      className="flex items-center justify-between p-5 rounded-3xl border border-zinc-100 bg-zinc-50/50 hover:bg-green-50 hover:border-green-100 transition-all group active:scale-[0.98]"
    >
      <div>
        <h4 className="font-bold text-zinc-900 group-hover:text-green-700 transition-colors uppercase text-xs tracking-widest mb-1">{title}</h4>
        <p className="text-sm text-zinc-500 line-clamp-1">{subtitle}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center group-hover:border-green-200 group-hover:bg-white transition-all shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-zinc-400 group-hover:text-green-600"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
      </div>
    </Link>
  );
}



