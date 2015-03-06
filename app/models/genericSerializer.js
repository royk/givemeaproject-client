var genericSerializer = function(response, store) {
	if (response && response.length) {
		for (var k in response) {
			if (response.hasOwnProperty(k)) {
				response[k].id = response[k]._id;
			}
		}
	}
	return response;
};

export {genericSerializer};