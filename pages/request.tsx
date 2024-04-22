import "../app/globals.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const RequestPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      // replace "application/pdf" with the file type you want to accept
      setFile(file);
    } else {
      alert("Invalid file format");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
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
      <Link href="/">
        <Image
          src="/Bultech82_logo.svg"
          alt="Company Logo"
          width={288}
          height={138}
        />
      </Link>
      <div className="bg-white border border-black rounded-lg p-4 w-full max-w-3xl mt-8">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mt-8 bg-white">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              id="email"
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
              File
            </label>
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              className="border-2 border-gray-600 rounded-lg p-4 mb-4 w-full text-xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={10}
            className="border-2 border-gray-600 rounded-lg p-4 mb-4 w-full h-96 text-xl"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-lg p-4 mb-4 w-full text-xl"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default RequestPage;
