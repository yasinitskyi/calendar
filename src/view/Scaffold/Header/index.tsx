import React from "react";
import Styles from './index.module.css'

interface HeaderProps {
	children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
	return <div className={Styles.header}>{children}</div>;
}
