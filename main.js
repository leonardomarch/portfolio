$(() => {
	$("div[data-id]").each(function () {
		const $this_div = $(this);
		const $this_video = $this_div.find("video");

		new Watch($this_div, { rootMargin: "-49%" }).inView(() => {

			$this_div.addClass("active");
			console.log("Im alive")
		}).outView(() => {
			$this_div.removeClass("active");
			console.log("Nah, JK")
		});
	});
});

$("body").on("hover", "div.captione", function (e) {
	e.preventDefault();
	$(".captione").addClass("active");
	console.log("Im in")

	$("body").on("click", ".caption.active", function (e) {
		e.preventDefault();

		$(".caption").removeClass("active");
	});
});