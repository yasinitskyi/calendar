import React from "react";
import Styles from './index.module.css'

interface BodyProps {
	children: React.ReactNode;
}

export function Body({ children }: BodyProps) {
	return <div className={Styles.body}>{children}</div>;
}
