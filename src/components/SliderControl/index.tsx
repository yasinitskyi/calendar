import Styles from './index.module.css'

interface SliderControlProps {
	type: "back" | "forth";
}

const SliderControlContent = {
	back: '<',
	forth: '>',
}

export function SliderControl({ type }: SliderControlProps) {
	return <button className={Styles.controlButton}>{SliderControlContent[type]}</button>;
}
