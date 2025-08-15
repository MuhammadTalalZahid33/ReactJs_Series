import React, { useState, useEffect, useRef, useCallback } from "react";

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [isNumber, setIsNumber] = useState(false)
    const [isChar, setIsChar] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (isNumber) str += "1234567890"
        if (isChar) str += "!@#$%^&*(){}`~"

        for (let index = 1; index <= length; index++) {
            let charIndex = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(charIndex)
        }

        setPassword(pass)

    }, [length, isNumber, isChar, setPassword]);

    const copyPasswordToClipboard = useCallback(()=> {
        passwordRef.current.select();
        passwordRef.current.setSelectionRange(0, 20)
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(()=> {
        passwordGenerator()
    }, [length, isNumber, isChar, passwordGenerator])

    return (
        <>
            <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
            {/* Title */}
            <h2 className="text-white text-4xl font-bold mb-6 drop-shadow-lg">
                🔐 Password Generator
            </h2>

            {/* Card */}
            <div className="bg-gray-800 w-full max-w-lg rounded-2xl p-6 shadow-xl">
                {/* Input + Copy Button */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        className="flex-1 px-3 py-2 text-gray-900 bg-gray-200 rounded-l-lg outline-none"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg transition duration-200"
                        onClick={copyPasswordToClipboard}
                    >
                        Copy
                    </button>
                </div>

                {/* Settings */}
                <div className="space-y-4 text-white">
                    {/* Length */}
                    <div>
                        <label className="block font-medium mb-1">
                            Length: {length}
                        </label>
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            className="w-full accent-blue-500 cursor-pointer"
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                    </div>

                    {/* Numbers */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={isNumber}
                            id="numberInput"
                            className="accent-blue-500 w-5 h-5 cursor-pointer"
                            onChange={() => setIsNumber((prev) => !prev)}
                        />
                        <label htmlFor="numberInput">Include Numbers</label>
                    </div>

                    {/* Characters */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={isChar}
                            id="characterInput"
                            className="accent-blue-500 w-5 h-5 cursor-pointer"
                            onChange={() => setIsChar((prev) => !prev)}
                        />
                        <label htmlFor="characterInput">Include Special Characters</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PasswordGenerator;