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
        if (file && file.type === "application/pdf") { // replace "application/pdf" with the file type you want to accept
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
        <div className="flex flex-col items-center px-4 sm:px-0">
            <Link href="/">
                    <Image src="/Bultech82_logo.svg" alt="Company Logo" width={288} height={138} />
            </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            className="border rounded-lg p-2 mb-4 w-full"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="file" className="mb-2">File</label>
                        <input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                            className="border rounded-lg p-2 mb-4 w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="message" className="mb-2">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border rounded-lg p-2 mb-4 w-full h-64"
                    />
                </div>
                <button type="submit" className="bg-black text-white rounded-lg p-2 mb-4 w-full">Submit</button>
            </form>
        </div>
    );
};

export default RequestPage;