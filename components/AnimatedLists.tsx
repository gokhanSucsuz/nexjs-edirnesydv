"use client";

import { motion } from "framer-motion";

const listVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0 }
};

const AnimatedList = () => {
	return (
		<motion.div
			className="flex"
			variants={listVariants}
			initial="hidden"
			animate="visible"
			style={{ listStyle: "none", padding: 0 }}
		>
			{["Item 1", "Item 2", "Item 3"].map((item, index) =>
				<motion.div
					key={index}
					variants={itemVariants}
					style={{
						backgroundColor: "lightgray",
						margin: "10px 0",
						padding: "10px",
						borderRadius: "5px"
					}}
				>
					{item}
				</motion.div>
			)}
		</motion.div>
	);
};

export default AnimatedList;
