import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(33);
    useEffect(() => {
        fetch('https://api.github.com/users/muhammadtalalzahid33')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, [])

    
    return (
        <div className='flex justify-center items-center m-9'>
            <div className='bg-gray-500 w-[700px] p-4 rounded-3xl'>
                <p className='text-1xl text-white'>
                    Hello, I am Muhammad Talal Zahid, learning React Router DOM as part of my React journey...
                </p>
                
                {/* <p>Here's my profile pic</p> */}
                <img src={data.avatar_url} alt="git image" className='h-32 rounded-full' />
                <div className='text-2xl text-orange-400'>Github followers: {data.followers}</div>
            </div>
        </div>
    )
}

export default Github

