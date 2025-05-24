import React from "react";

const EmailButton: React.FC = () => {
  const email = "whoumad@gmail.com";
  const subject = encodeURIComponent("Ping, let's connect!");
  const body = encodeURIComponent(
    "Hello Walie,\n\nI’d love to connect with you! Let me know your availability.\n\nBest regards,\n[Your Name]"
  );

  return (
    <a
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      className="text-xl border-2 font-bold border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-red-900 transition w-fit"
    >
      Ping me
    </a>
  );
};

export default EmailButton;
