$(() => {
	$("div[data-id]").each(function () {
		const $this_div = $(this);
		const $this_video = $this_div.find("video");

		new Watch($this_div, { rootMargin: "-49%" }).inView(() => {

			$this_video.addClass("active");
			console.log("Im alive")
		}).outView(() => {
			$this_video.removeClass("active");
			console.log("Nah, JK")
		});
	});
});
