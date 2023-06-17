// export function handleResize() {
// 	if (resize) {
// 		if (window.innerWidth < 640) {
// 			size = "xs";
// 		} else if (window.innerWidth < 768) {
// 			size = "sm";
// 		} else if (window.innerWidth < 1024) {
// 			size = "md";
// 		} else if (window.innerWidth < 1280) {
// 			size = "lg";
// 		} else if (window.innerWidth < 1536) {
// 			size = "xl";
// 		} else {
// 			size = "xxl";
// 		}
// 	}
// }
// ---------------------------------------------
	// function handleResize() {
	// 	if (resize) {
	// 		const btn = document.querySelector(".button");
	// 		const btnWidth = btn?.clientWidth;
	// 		const btnHeight = btn?.clientHeight;
	// 		const btnSize = btnWidth && btnHeight;
	// 		console.log(btnSize);
	// 	}
	// }

// ---------------------------------------------

// function handleResize() {
// 	if (resize) {
// 		const width = window.innerWidth;
// 		if (width < 640) {
// 			size = "xs";
// 		} else if (width < 768) {
// 			size = "sm";
// 		} else if (width < 1024) {
// 			size = "md";
// 		} else if (width < 1280) {
// 			size = "lg";
// 		} else if (width < 1536) {
// 			size = "xl";
// 		} else {
// 			size = "xxl";
// 		}
// 	}
// }


// ---------------------------------------------

// 	function handleResize() {
// 	const breakpoint = 640;
// 	const width = window.innerWidth;
// 	if (width >= breakpoint) {
// 		size = "md";
// 	} else {
// 		size = "sm";
// 	}
// }

// // add event listener on window resize
// onMount(() => {
// 	window.addEventListener("resize", handleResize);
// });

// // remove event listener on window resize
// onDestroy(() => {
// 	window.removeEventListener("resize", handleResize);
// });


// ---------------------------------------------
	// on page load or mount change button size based on viewport size (responsive)

	// $: {
	// 	if (resize) {
	// 		handleResize();
	// 	}
	// }

	// on page resize change button size based on viewport size (responsive)

	// $: {
	// 	if (resize) {
	// 		window.addEventListener("resize", handleResize);
	// 	}
	// }

	// on page unmount remove event listener

	// $: {
	// 	if (resize) {
	// 		return () => {
	// 			window.removeEventListener("resize", handleResize);
	// 		};
	// 	}
	// }

	// on button click

	// function onButtonClick() {
	// 	if (isAnimated) {
	// 		if (isPointerEnter) {
	// 			return;
	// 		}
	// 		isAnimated = false;
	// 		setTimeout(() => {
	// 			isAnimated = true;
	// 		}, 600);
	// 	}
	// }
