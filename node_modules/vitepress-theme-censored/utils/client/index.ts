import { isString } from '../shared';
/**
 * 日期格式化
 * @returns
 * @param d
 * @param fmt
 */
export const formatDate = (d: Date | number | string | undefined, fmt: string = 'yyyy-MM-dd HH:mm:ss'): string => {
	if (!(d instanceof Date)) {
		if (isString(d)) {
			d = d.replace(/-/gs, '/');
		}
		d = d ? new Date(d) : new Date();
	}

	const o = {
		'M+': d.getMonth() + 1,
		'(d|D)+': d.getDate(),
		'(h|H)+': d.getHours(),
		'm+': d.getMinutes(),
		's+': d.getSeconds(),
		'q+': Math.floor((d.getMonth() + 3) / 3),
		S: d.getMilliseconds(),
	};

	if (/(([Yy])+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substring(4 - RegExp.$1.length));
	}

	for (const k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			const val = o[k as keyof typeof o].toString();
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? val : ('00' + val).substring(val.length));
		}
	}

	return fmt;
};
