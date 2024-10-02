import React from "react";
import Herosection from "./_components/Herosection";
import PageDemoes from "./_components/PageDemoes";

export const metadata = {
	title: "Demos",
};

export default function Home() {
	return (
		<React.Fragment>
			<Herosection />
			<PageDemoes />
		</React.Fragment>
	);
}

