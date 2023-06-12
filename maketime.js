


function doit(start_time) {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://ones.ainewera.com/project/api/project/team/JNwe8qUX/items/graphql?t=report-data__workspace_manhour-JNwe8qUX');
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.setRequestHeader('authority', 'ones.ainewera.com');
	xhr.setRequestHeader('accept', 'application/json, text/plain, */*');
	xhr.setRequestHeader('accept-encoding', 'gzip, deflate, br');
	xhr.setRequestHeader('accept-language', 'zh');
	xhr.setRequestHeader('cache-control', 'no-cache');
	xhr.setRequestHeader('content-length', '1332');
	xhr.setRequestHeader('cookie', 'language=zh; ones-uid=Q51QQ5d3; ones-lt=70nvHBh6v12acbG8Fdnfxg8wEAdSLylTqd0wIk0EHtf51tgxbJoS57VtkjFuUyK8; timezone=Asia/Shanghai; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22Q51QQ5d3%22%2C%22first_id%22%3A%22187a1b8a9689e2-02266ae519c68ca-1d525634-2073600-187a1b8a969d99%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fdocs.qq.com%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfbG9naW5faWQiOiJRNTFRUTVkMyIsIiRpZGVudGl0eV9jb29raWVfaWQiOiIxODdhMWI4YTk2ODllMi0wMjI2NmFlNTE5YzY4Y2EtMWQ1MjU2MzQtMjA3MzYwMC0xODdhMWI4YTk2OWQ5OSJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22Q51QQ5d3%22%7D%2C%22%24device_id%22%3A%22187a1b8a9689e2-02266ae519c68ca-1d525634-2073600-187a1b8a969d99%22%7D; ct=fb2b56b164b98e3e3babe8d9c9257eec2c4d7b2a3cd55a33717223ca79a70dab');
	xhr.setRequestHeader('origin', 'https://ones.ainewera.com');
	xhr.setRequestHeader('pragma', 'no-cache');
	xhr.setRequestHeader('referer', 'https://ones.ainewera.com/project/');
	xhr.setRequestHeader('sec-ch-ua', '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"');
	xhr.setRequestHeader('sec-ch-ua-mobile', '?0');
	xhr.setRequestHeader('sec-ch-ua-platform', '"macOS"');
	xhr.setRequestHeader('sec-fetch-dest', 'empty');
	xhr.setRequestHeader('sec-fetch-mode', 'cors');
	xhr.setRequestHeader('sec-fetch-site', 'same-origin');
	xhr.setRequestHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36');
	xhr.setRequestHeader('x-csrf-token', 'fb2b56b164b98e3e3babe8d9c9257eec2c4d7b2a3cd55a33717223ca79a70dab');

	xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
					console.log(xhr.responseText);
			}
	};

	const data = JSON.stringify({
			"query": "\n    mutation AddManhour {\n      addManhour (mode: $mode owner: $owner task: $task type: $type start_time: $start_time hours: $hours description: $description) {\n        key\n      }\n    }\n  ",
			"variables": {
					"mode": "simple",
					"owner": "Q51QQ5d3",
					"task": "UJviYeWq9dtE79Qk",
					"type": "recorded",
					"start_time": start_time,
					"hours": 800000,
					"description": ""
			}
	})
	xhr.send(data);

}

let count = 0;
const day = 3600 * 24
const start_time = window.localStorage.getItem('start_time') || 1673226000 + day * 14
let timeout = Math.random() * 5000
const run = () => {
	let time = 10 * Math.random() * 1000;
	let timer = setTimeout(() => {
			clearTimeout(timer)
			start_time += count * day
			window.localStorage.setItem('start_time', start_time)
			doit(start_time)
			count++
			if (count < 5) {
					run(time)
			}
	}, timeout);
}
run()

// doit(start_time)
