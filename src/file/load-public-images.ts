private loadPublicImages(){
		const count = 9;
		const fileType = ".jpg"
		const images = [];

		for (let i = 1; i <= count; i++) {
			images.push(`./img/${i}${fileType}`);
		}

		return images
	}
