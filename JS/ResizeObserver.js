// stwórz klasę ResizeObserver z metodami takimi jak zawiera pattern observera
// - ResizeObserver ma nasłuchiwać na globalnym window.resize oraz window.onorientationchange
// - ResizeObserver ma w metodzie observe zamontować callback w nasłuchu na eventach onresize i onorientationchange
// - w callbacku observe ma być zwracany obiekt z wartościami z window tj {outerHeight, outerWidth, innerHeight, innerWidth, orientation}
// - ResizeObserver ma odmontować nasłuch na eventy po wywołaniu mentody unobserve

class ResizeObserver {
	constructor() {
        // ...
	}
	observe = (callback) => {
        // ...
	}
	unobserve = () => {
        // ...
	}
}