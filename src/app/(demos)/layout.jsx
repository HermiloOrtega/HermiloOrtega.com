import { Logo } from "@/components/utils";
import Link from "next/link";

export default function DemosLayout({ children }) {
	return (
		<div className="previewpage bg-grey-darken">
			<header className="header relative z-50 border-b border-white border-opacity-10">
				<div className="container mx-auto">
					<div className="header-inner flex items-center justify-between py-3">
						<Logo url="/" />
						<div className="header-button hidden lg:block">
							Hermilo Ortega Link
							<Link
								href="https://themeforest.net/item/bieber-react-personal-portfolio-template/39171447"
								className="btn"
							>
								<span>Buy Now</span>
							</Link>
						</div>
					</div>
				</div>
			</header>
			<main className="previewmain bg-grey">{children}</main>
			<footer className="footer bg-grey-darken">
				<div className="contianer mx-auto">
					<p className="mb-0 py-4 text-center">
						&copy; {new Date().getFullYear()}, All right reserved
						<Link
							href="/"
							className="pl-1.5 font-medium text-heading no-underline hover:text-primary"
						>
							NuclearThemes
						</Link>
					</p>
				</div>
			</footer>
		</div>
	);
}
