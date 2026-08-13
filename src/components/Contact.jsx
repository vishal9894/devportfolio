import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { contactInfo } from "../data/data";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
    }, 5000);
  };

  const inputClass = `w-full px-4 py-3 ${
    isDarkMode
      ? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
      : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
  } border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300`;

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-16 text-center" data-aos="fade-up">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"}`}>
            Get In Touch
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Let's Work <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-4 max-w-2xl mx-auto`}>Have a project in mind? Feel free to reach out. I'll get back to you as soon as possible.</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6" data-aos="fade-right" data-aos-delay="200">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className={`${isDarkMode ? "bg-slate-800/50 hover:bg-slate-800" : "bg-white/80 hover:bg-white"} backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-lg hover:shadow-xl border ${isDarkMode ? "border-slate-700" : "border-gray-200"}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <info.icon className="text-white text-xl" />
                </div>
                <div>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>{info.label}</p>
                  <p className={`${isDarkMode ? "text-white" : "text-gray-900"} font-medium`}>{info.value}</p>
                </div>
              </div>
            ))}

            <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/80 border-gray-200"} backdrop-blur-sm p-6 rounded-2xl border shadow-lg`}>
              <h3 className={`font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Social Profiles</h3>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-700 hover:bg-indigo-500" : "bg-gray-100 hover:bg-indigo-500"} flex items-center justify-center transition-all duration-300 group`}
                  >
                    <span className={`text-xs font-bold ${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`}>
                      {name.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/80 border-gray-200"} backdrop-blur-sm p-8 rounded-2xl border shadow-xl`}>
              <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className={inputClass} required />
                  <input type="email" placeholder="Your Email" className={inputClass} required />
                </div>
                <input type="text" placeholder="Subject" className={inputClass} required />
                <textarea placeholder="Your Message" rows="5" className={`${inputClass} resize-none`} required></textarea>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
              {formStatus.submitted && (
                <div className={`mt-4 p-3 rounded-lg text-center ${formStatus.success ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;