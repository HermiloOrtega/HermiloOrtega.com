"use client";

import { Link as ScrollLink } from "react-scroll";

export default function Herosection() {
	return (
		<div className="herosection herosection-bg ">
			<div className="herosection-inner flex min-h-[50vh] items-center bg-grey-darken bg-opacity-90">
				<div className="container mx-auto">
					<div className="herosection-content py-20 text-center">
						<h1 className="text-primary">Hermilo Ortega - React Personal Portfolio Template</h1>
						<p className="lead">
							Hermilo Ortega is a creative personal portfolio React template build with NextJS
							and TailwindCSS.
						</p>
						<ScrollLink
							activeClass="active"
							to="section-demos"
							spy={true}
							smooth="easeInQuad"
							offset={0}
							duration={1000}
							className="btn btn-large mt-4"
						>
							<span className="pl-2">View Demos</span>
						</ScrollLink>
					</div>
				</div>
			</div>
		</div>
	);
}
