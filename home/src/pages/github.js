// pages/blogs.js

import React from "react";

import { TextContent, AppFrame } from "../components/base/elements";
import { Header1 } from "../components/typography/text"
import { NavBtn, NavBtnLink } from "../components/navbar/elements"

const Github = () => {
	return (
		<AppFrame>
			<div
				style={{
					justifyContent: "centre",
				}}
			>
				<Header1>GitHub Page</Header1>
			</div >
			<TextContent>
				Check out my GitHub, maybe it'll be entertaining.
			</TextContent>
			<NavBtn>
				<NavBtnLink to="https://github.com/mdegreg">
					Check it out!
				</NavBtnLink>
			</NavBtn>
		</AppFrame>
	);
};

export default Github;
