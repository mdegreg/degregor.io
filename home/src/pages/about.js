// pages/about.js

import React from "react";

import { TextContent, AppFrame } from "../components/base/elements";
import { Header1 } from "../components/typography/text"

const About = () => {
	return (
		<AppFrame>
			<div
				style={{
					justifyContent: "centre",
				}}
			>
				<Header1>Matt's Website</Header1>
			</div >
			<TextContent>
				<p>
					Welcome to my website!
				</p>
				<p>
					This is a simple testbed for me to play around with different aspects of
					tech stuff, e.g. React, d3.js, and whatever else strikes my fancy.
				</p>
			</TextContent>
		</AppFrame>
	);
};

export default About;
