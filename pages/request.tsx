import "../app/globals.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const RequestPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File[] | null>(null);
  const [storedLanguage, setStoredLanguage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const language = localStorage.getItem('language');
    setStoredLanguage(language);
    console.error(language);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const totalSize = files.reduce((total, file) => total + file.size, 0);
  
    if (totalSize > 5 * 1024 * 1024) { 
      alert("Total file size exceeds 5MB.");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
  
    const validFiles = files.filter(file => 
      file.type === "application/pdf" || file.name.endsWith('.dxf') || file.name.endsWith('.stp')
    );
  
    if (validFiles.length !== files.length) {
      alert("Invalid file format. Only .pdf, .dxt, and .stp files are allowed.");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
  
    setFile(validFiles);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("https://getform.io/f/lbjkqzma", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setEmail("");
      setMessage("");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      alert("Form submission failed.");
    }
  };

  return (
    <div
      className="flex flex-col items-center px-4 sm:px-0"
      style={{
        backgroundImage: "url('/contact form background 5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Link href={{ pathname: "/"}}>
        <Image
          src="/Bultech82_logo.svg"
          alt="Company Logo"
          width={288}
          height={138}
        />
      </Link>
      <div className="bg-white border border-black rounded-lg p-4 w-full max-w-3xl mt-8">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="w-full max-w-3xl mt-8 bg-white"
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-2">
                {storedLanguage === "BG" ? "Email" : "Имейл"}
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                className="border-2 border-gray-600 rounded-lg p-4 mb-4 w-full text-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="file" className="mb-2">
                {storedLanguage === "BG" ? "File" : "Файл"}
              </label>
              <input
               ref={fileInputRef}
               name="file"
               type="file"
               multiple
               onChange={handleFileChange}
               className="border-2 border-gray-600 rounded-lg p-4 mb-4 w-full text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="mb-2">
              {storedLanguage === "BG" ? "Message" : "Съобщение"}
            </label>
            <textarea
              name="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={10}
              className="border-2 border-gray-600 rounded-lg p-4 mb-4 w-full h-96 text-xl"
            />
          </div>
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          ></input>
          <button
            type="submit"
            className="bg-black text-white rounded-lg p-4 mb-4 w-full text-xl"
          >
            {storedLanguage === "BG" ? "Submit" : "Изпрати"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;