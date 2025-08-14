import React, { useState } from "react";

function BgChanger() {
    const [color, setColor] = useState("olive");
    const colors = ['Red', 'Blue', 'Green', 'White', 'Yellow', 'Pink', 'Purple', 'Orange', 'Black'];

    return (
        <>
            <div className="h-full w-full flex justify-center items-center" style={{backgroundColor:color}}>
                <h2 className="mt-4 text-2xl font-bold" 
                style={{color: color.toLowerCase() === "black" ? "white" : "black"}}>
                    Here, I have made a background Color Changer, right now the color is <span className="text-2xl bg-gray-600 rounded-4xl p-1" style={{color: color}}>{color.toUpperCase()}</span>
                </h2>
                <div className="fixed bg-gray-700 rounded-full bottom-4 flex flex-wrap">
                    {colors.map((clr) => {
                        const isDark = clr.toLowerCase() === 'black';
                        return(
                        <button className="px-2 m-2 rounded-2xl"
                            style={{
                                backgroundColor:clr.toLowerCase(), 
                                color: isDark ? "white" : "black"
                            }}
                            onClick={() => setColor(clr.toLowerCase())}
                        >
                            {clr}
                        </button>
                        );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BgChanger