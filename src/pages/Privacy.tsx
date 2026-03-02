import React, { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    fetch("/privacy-policy.html")
      .then((res) => res.text())
      .then((text) => setHtmlContent(text))
      .catch((e) => console.error("Failed to load privacy policy:", e));
  }, []);

  return (
    <div>
      <div
        className="p-5 sm:p-20"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ whiteSpace: "pre-line" }}
      />
    </div>
  );
}
