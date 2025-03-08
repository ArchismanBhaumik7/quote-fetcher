import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="hello text-4xl py-8">This is Home Page for the Quote Fetcher App.</div>
      <div className="description text-2xl text-black p-6 rounded-4xl"
      style={{ backgroundColor: "rgba(217, 149, 229, 0.65)" }}>
      {/*Using custom RGBA values seems to not be supported in latest version of Tailwind CSS*/}
        To access the main app, please navigate to the Quotes page using the Sidebar menu, 
        which can be accessed via the menu button on the corner.↖️
      </div>
      <div className="have-fun text-2xl py-6">
        Thank you and have fun!! 
        <span className="emoji text-4xl">☺️</span>
      </div>
    </div>
  )
}

export default Home
