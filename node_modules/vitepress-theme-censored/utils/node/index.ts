import {spawnSync} from 'node:child_process';
import fs from 'fs';

export function getFileBirthTime(url: string) {
	try {
		// ct
		const infoStr = spawnSync('git', ['log', '--pretty="%ci"', url]).stdout?.toString().replace(/["']/g, '').trim();
		const timeList = infoStr.split('\n').filter(item => Boolean(item.trim()));
		if (timeList.length > 0) {
			console.log(new Date(timeList.pop()!).getTime()+"get time")
			return new Date(timeList.pop()!).getTime();
		}
	} catch (error) {
		return undefined;
	}
}

// 本地创建时间
export function getFileBirth(filePath: string): string | undefined {
    try {
        // 获取文件的状态信息
        const stats = fs.statSync(filePath);
        // 获取创建时间
        const birthTime = stats.birthtime;
        // console.log(`文件的创建时间是: ${localBirthTime}`);
        return birthTime.toLocaleString();
    } catch (error) {
        console.error('Error getting file birth time:', error);
        return undefined;
    }
}


export const getFileLastUpdateTime = (url: string) => {
	try {
		// 参考 vitepress 中的 getGitTimestamp 实现
		const infoStr = spawnSync('git', ['log', '-1', '--pretty="%ci"', url]).stdout?.toString().replace(/["']/g, '').trim();
		if (infoStr) {
			return new Date(infoStr).getTime();
		}
	} catch (error) {
		return undefined;
	}
};

// 本地修改时间
export function getFileLastUpdate(filePath: string): string | undefined {
    try {
        // 获取文件的状态信息
        const stats = fs.statSync(filePath);
        // 获取修改时间
        const lastUpdateTime = stats.mtime;
        // 将修改时间格式化为本地日期时间字符串
        // console.log(`文件的修改时间是: ${localLastUpdateTime}`);
        return lastUpdateTime.toLocaleString();
    } catch (error) {
        console.error('Error getting file last update time:', error);
        return undefined;
    }
}

export const slash = (p: string): string => p.replace(/\\/g, '/');
