function convertToCelsius (F) {

	var result = (F - 32) * 5/9;
  console.log(F);
	return result;
}

var F = convertToCelsius(86);

document.write(F);