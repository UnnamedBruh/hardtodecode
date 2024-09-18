function encode(text, key) {
	let i = 0, shift = key.split("").map(item => item.charCodeAt(0))
	let encodeText = text.replace(/./g, function(match) {
		return String.fromCharCode(match.charCodeAt(0) + shift[(i = (i + 1) % shift.length)])
	})
	i = 0
	encodeText = encodeText.replace(/./g, function(match) {
		return match + Math.floor(i++ / 1000 % 10000).toString() + Math.floor(i / 100 % 1000).toString() + Math.floor(i / 10 % 100).toString() + Math.floor(i % 10).toString() + "\n"
	})
	encodeText = encodeText.split("\n").sort(() => Math.random() - 0.5).join("")
	return encodeText
}
function decode(text, key) {
	let shift = key.split("").map(item => item.charCodeAt(0)), i = 0
	return text.match(/.([0-9]{4})/g).sort((i1, i2) => Number(i1.slice(1)) - Number(i2.slice(1))).map(match => String.fromCharCode(match.charCodeAt(0) - shift[(i = (i + 1) % shift.length)])).join("")
}
