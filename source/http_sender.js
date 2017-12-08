class HttpSender {
	constructor (timeout = 10000) {
		this.timeout = timeout;
	}

	buildRequestConfig ({payload, parameters, headers}) {
		let config = {
			method: "GET",
			timeout: this.timeout,
			params: Object.assign({}, parameters),
			headers: Object.assign({}, headers)
		};

		if (payload) {
			config.method = "POST";
			config.data = payload;
		}

		return config;
	}
}

module.exports = HttpSender;