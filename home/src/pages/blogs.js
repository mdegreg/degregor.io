// pages/blogs.js

import React from "react";

import { TextContent, AppFrame } from "../components/base/elements";
import { Header1 } from "../components/typography/text"

const Blogs = () => {
	return (
		<AppFrame>
		<div
			style={{
				justifyContent: "centre",
			}}
		>
				<Header1>Welcome to my blog</Header1>
			</div >
		<TextContent>
			This is test text
			</TextContent>
			<TextContent>
				This is test text as_well!
			</TextContent>
		</AppFrame>
	);
};

export default Blogs;
