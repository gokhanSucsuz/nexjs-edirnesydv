import React from "react";

const ContactPageLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="h-[calc(100vh-14.5em)]  sm:h-[calc(100vh-15em)] md:h-[calc(100vh-17em)] lg:h-[calc(100vh-15.5em)]  flex flex-col">
			{children}
		</div>
	);
};

export default ContactPageLayout;
