export default function sprom(promise) {
	return promise.then((resultParam) => [null, resultParam]).catch((err) => [err])
}