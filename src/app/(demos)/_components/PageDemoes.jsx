import { SectionHeading, SectionWrapper } from "@/components/utils";
import Image from "next/image";
import Link from "next/link";

export default function PageDemoes() {
	return (
		<SectionWrapper name="section-demos" className="demos-section py-24 lg:py-28 xl:py-32">
			<div className="container mx-auto">
				<SectionHeading title="Demos" watermark="Demos" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="col-span-1">
						<Link href="/demo1" className="card hovercard block overflow-hidden">
							<div className="imagebox overflow-hidden rounded">
								<Image
									src="/images/demo/homepage-1.jpg"
									height={337}
									width={650}
									alt="Home Version 1"
								/>
							</div>
							<h5 className="py-3 text-center">Home Version 1</h5>
						</Link>
					</div>
					<div className="col-span-1">
						<Link href="/demo2" className="card hovercard block overflow-hidden">
							<div className="imagebox overflow-hidden rounded">
								<Image
									src="/images/demo/homepage-2.jpg"
									height={337}
									width={650}
									alt="Home Version 2"
								/>
							</div>
							<h5 className="py-3 text-center">Home Version 2</h5>
						</Link>
					</div>
					<div className="col-span-1">
						<Link href="/demo3" className="card hovercard block overflow-hidden">
							<div className="imagebox overflow-hidden rounded">
								<Image
									src="/images/demo/homepage-3.jpg"
									height={337}
									width={650}
									alt="Home Version 3"
								/>
							</div>
							<h5 className="py-3 text-center">Home Version 3</h5>
						</Link>
					</div>
					<div className="col-span-1">
						<Link href="/" className="card hovercard block overflow-hidden">
							<div className="imagebox overflow-hidden rounded">
								<Image
									src="/images/demo/coming-soon.jpg"
									height={337}
									width={650}
									alt="Comming Soon"
								/>
							</div>
							<h5 className="py-3 text-center">More Demos Coming Soon</h5>
						</Link>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
