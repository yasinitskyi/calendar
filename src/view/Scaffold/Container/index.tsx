import React from "react";
import Styles from './index.module.css'

interface ContainerProps {
	children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	return <div className={Styles.container}>{children}</div>;
}
