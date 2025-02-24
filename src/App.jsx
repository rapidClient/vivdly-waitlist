import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { CheckCircle2 } from "lucide-react";
import Modal from "./modal";
import Waitlist from "./waitlist";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-image flex flex-col">
      <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-52 pt-8 md:pt-20">
        <header className="flex items-center gap-2 md:gap-4">
          <img src={logo} alt="logo" className="w-8 md:w-auto h-auto" />
          <p className="text-[#FFEBF4] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">VIVIDLY</p>
        </header>

        <div className="z-10 mt-8 md:mt-12 lg:mt-16 w-full mx-auto">
          <div className="bg-border backdrop-blur-xl bg-white/10 rounded-4xl p-6 md:p-12 shadow-xl border border-white/20 transition-all duration-300 hover:bg-white/15">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
              <div className="space-y-6 md:space-y-8 lg:space-y-12 lg:w-[55%]">
                <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-white leading-[1.2] md:leading-tight">
                  Unleash Ad Mastery: Vividly's AI Transforms Every Campaign into a Masterpiece
                </h1>
                <p className="font-semibold text-white/90 text-base md:text-[18px] leading-relaxed">
                  Enter the era of smart, dynamic ads. Vividly&apos;s agentic AI creates, distributes, and optimizes your campaigns in real time. Join our waitlist and lead the data revolution.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-white button-bg px-8 py-3.5 rounded-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 shadow-4xl text-xl"
                >
                  Join the waitlist!
                </button>
              </div>

              <div className="space-y-6 md:space-y-8 lg:w-[45%]">
                <h3 className="text-white font-semibold text-xl md:text-2xl">Why Choose VIVIDLY?</h3>
                <ul className="space-y-4 md:space-y-5">
                  {[
                    "Relax, Vividly AI handles every detail of your ad management.",
                    "Boost your business with ads that truly resonate with your target audience.",
                    "Reach your customers seamlessly across every digital channel.",
                    "Feel secure with our AI expert help from planning to results.",
                    "Only pay for ad performance, no subscription fees.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-white/90 group-hover:text-white transition-colors mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-base md:text-lg group-hover:text-white transition-colors leading-relaxed font-semibold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 py-6 text-center text-white/60 mt-auto">
        © Vividly 2025
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Join the Waitlist</h2>
        <Waitlist width={400} height={250} />
      </Modal>
    </div>
  );
}

export default App;
