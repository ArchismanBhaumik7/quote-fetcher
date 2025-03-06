import { useState } from 'react'
import React from 'react'
import axios from 'axios'

const fetchQuote = async () => {
	try {
		const response = await axios.get('http://api.quotable.io/random')

		/*fetch('http://api.quotable.io/quotes/random')
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error('Fetch error:', err)); */
		var quote = { "content": response.data.content, "author": "- " + response.data.author }
		// console.log(quote.content, quote.author)
	} catch (error) {
		console.error("Error fetching quote:", error);
	}
	return quote
}

const Quotes = () => {
	const [box1, setBox1] = useState({ "content": "", "author": "" })
	const [box2, setBox2] = useState({ "content": "", "author": "" })
	const [box3, setBox3] = useState({ "content": "", "author": "" })
	const [box4, setBox4] = useState({ "content": "", "author": "" })
	const [box5, setBox5] = useState({ "content": "", "author": "" })
	const [box6, setBox6] = useState({ "content": "", "author": "" })
	const [box7, setBox7] = useState({ "content": "", "author": "" })
	const [box8, setBox8] = useState({ "content": "", "author": "" })
	const [box9, setBox9] = useState({ "content": "", "author": "" })
	return (
		<>
			{<div>
				Quotes go here!
			</div>}
			<div className="quotespace">
				<div className="quote-box-row flex">
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox1(quote_holder)
					}}>
						<div className="quote-content">
							{box1.content}
						</div>
						<div className="quote-author">
							{box1.author}
						</div>
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox2(quote_holder)
					}}>
						{box2.content}
						
						
						
						{box2.author}
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox3(quote_holder)
					}}>
						
						
						
						{box3.content}
						
						
						
						{box3.author}
					</div>
				</div>
				<div className="quote-box-row flex">
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox4(quote_holder)
					}}>
						
						
						
						{box4.content}
						
						
						
						{box4.author}
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox5(quote_holder)
					}}>
						
						
						
						{box5.content}
						
						
						
						{box5.author}
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox6(quote_holder)
					}}>
						
						
						
						{box6.content}
						
						
						
						{box6.author}
					</div>
				</div>
				<div className="quote-box-row flex">
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox7(quote_holder)
					}}>
						
						
						
						{box7.content}
						
						
						
						{box7.author}
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox8(quote_holder)
					}}>
						
						
						
						{box8.content}
						
						
						
						{box8.author}
					</div>
					<div className="quotebox" onClick={async () => {
						let quote_holder = await fetchQuote()
						setBox9(quote_holder)
					}}>
						
						
						
						{box9.content}
						
						
						
						{box9.author}
					</div>
				</div>
			</div>
		</>
	)
}

export default Quotes
