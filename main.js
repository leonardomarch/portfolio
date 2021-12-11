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

const players = {}

function onYouTubeIframeAPIReady() {
	$(".yt_player").each(function () {
		const player = $(this)

		players[player.data("id")] = new YT.Player(player[0], {
			height: '390',
			width: '640',
			videoId: player.data("id"),
			//videoId: videoObj.data(“id”),
			playerVars: {
				controls: 0,
				autoplay: 0,
				disablekb: 1,
				enablejsapi: 1,
				iv_load_policy: 3,
				modestbranding: 1,
				showinfo: 0,
				mute: 0,
				playsinline: 1,
				rel: 1,
				loop: 1,
			},

			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			},
		});
	});
}

function onPlayerReady(event) {
	console.log(event);
	console.log("The player is ready");
}

function onPlayerStateChange(event) {
	console.log("The player has changed");
}


// control for video players //
$("body").on("click", ".fa-play", function (e) {
	e.preventDefault();

	const this_play_button = $(this);
	const this_controls = this_play_button.closest(".controls");
	const player_id = this_controls.data("id");

	players[player_id].playVideo();


});

$("body").on("click", ".fa-pause", function (e) {
	e.preventDefault();

	const this_play_button = $(this);
	const this_controls = this_play_button.closest(".controls");
	const player_id = this_controls.data("id");

	players[player_id].pauseVideo()


});

$("body").on("click", ".fa-volume-off", function (e) {
	e.preventDefault();

	const this_play_button = $(this);
	const this_controls = this_play_button.closest(".controls");
	const player_id = this_controls.data("id");


	if (players[player_id].isMuted()) {
		players[player_id].unMute();
		$(".fa-volume-up").removeClass("active");
		$(".fa-volume-off").addClass("active");
		console.log("first")
	} else {
		players[player_id].mute();
		$(".fa-volume-off .active").removeClass("active");
		$(".fa-volume-up").removeClass("active");

		console.log("second")
	}

});


$("body").on("click", ".menu", function (e) {

	const this_select = e.target;
	const choice = $(this_select);


	$("menu").toggleClass('active');

});