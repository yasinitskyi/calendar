import { zhTW } from "date-fns/locale";
import { format } from "date-fns";

export function formatDayToZh(day: Date): string {
	return format(day, "d日", { locale: zhTW })
}