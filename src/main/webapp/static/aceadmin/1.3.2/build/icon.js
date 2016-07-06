//for more info please refer to docs >> changes >> fontawesome

var ace_icon = 'ace-icon ';
//the icon class to be used. For more info please refer to docs, "icons" section

var old_icons_1 = [
	"icons-ul",
	"icon-large",
	"icon-fixed-width",
	"icon-li",
	"icon-muted",
	"icon-light",
	"icon-dark",
	"icon-border",
	"icon-2x",
	"icon-3x",
	"icon-4x",
	"icon-5x",
	"icon-white",
	"icon-spin",
	"icon-stack",
	"icon-stack-base",
	"icon-rotate-90",
	"icon-rotate-180",
	"icon-rotate-270",
	"icon-flip-horizontal",
	"icon-flip-vertical" 
]

var old_icons_2 = [
	"icon-glass",
	"icon-music",
	"icon-search",
	"icon-envelope-alt",
	"icon-heart",
	"icon-star",
	"icon-star-empty",
	"icon-user",
	"icon-film",
	"icon-th-large",
	"icon-th",
	"icon-th-list",
	"icon-ok",
	"icon-remove",
	"icon-zoom-in",
	"icon-zoom-out",
	"icon-power-off",
	"icon-off",
	"icon-signal",
	"icon-gear",
	"icon-cog",
	"icon-trash",
	"icon-home",
	"icon-file-alt",
	"icon-time",
	"icon-road",
	"icon-download-alt",
	"icon-download",
	"icon-upload",
	"icon-inbox",
	"icon-play-circle",
	"icon-rotate-right",
	"icon-repeat",
	"icon-refresh",
	"icon-list-alt",
	"icon-lock",
	"icon-flag",
	"icon-headphones",
	"icon-volume-off",
	"icon-volume-down",
	"icon-volume-up",
	"icon-qrcode",
	"icon-barcode",
	"icon-tag",
	"icon-tags",
	"icon-book",
	"icon-bookmark",
	"icon-print",
	"icon-camera",
	"icon-font",
	"icon-bold",
	"icon-italic",
	"icon-text-height",
	"icon-text-width",
	"icon-align-left",
	"icon-align-center",
	"icon-align-right",
	"icon-align-justify",
	"icon-list",
	"icon-indent-left",
	"icon-indent-right",
	"icon-facetime-video",
	"icon-picture",
	"icon-pencil",
	"icon-map-marker",
	"icon-adjust",
	"icon-tint",
	"icon-edit",
	"icon-share",
	"icon-check",
	"icon-move",
	"icon-step-backward",
	"icon-fast-backward",
	"icon-backward",
	"icon-play",
	"icon-pause",
	"icon-stop",
	"icon-forward",
	"icon-fast-forward",
	"icon-step-forward",
	"icon-eject",
	"icon-chevron-left",
	"icon-chevron-right",
	"icon-plus-sign",
	"icon-minus-sign",
	"icon-remove-sign",
	"icon-ok-sign",
	"icon-question-sign",
	"icon-info-sign",
	"icon-screenshot",
	"icon-remove-circle",
	"icon-ok-circle",
	"icon-ban-circle",
	"icon-arrow-left",
	"icon-arrow-right",
	"icon-arrow-up",
	"icon-arrow-down",
	"icon-mail-forward",
	"icon-share-alt",
	"icon-resize-full",
	"icon-resize-small",
	"icon-plus",
	"icon-minus",
	"icon-asterisk",
	"icon-exclamation-sign",
	"icon-gift",
	"icon-leaf",
	"icon-fire",
	"icon-eye-open",
	"icon-eye-close",
	"icon-warning-sign",
	"icon-plane",
	"icon-calendar",
	"icon-random",
	"icon-comment",
	"icon-magnet",
	"icon-chevron-up",
	"icon-chevron-down",
	"icon-retweet",
	"icon-shopping-cart",
	"icon-folder-close",
	"icon-folder-open",
	"icon-resize-vertical",
	"icon-resize-horizontal",
	"icon-bar-chart",
	"icon-twitter-sign",
	"icon-facebook-sign",
	"icon-camera-retro",
	"icon-key",
	"icon-gears",
	"icon-cogs",
	"icon-comments",
	"icon-thumbs-up-alt",
	"icon-thumbs-down-alt",
	"icon-star-half",
	"icon-heart-empty",
	"icon-signout",
	"icon-linkedin-sign",
	"icon-pushpin",
	"icon-external-link",
	"icon-signin",
	"icon-trophy",
	"icon-github-sign",
	"icon-upload-alt",
	"icon-lemon",
	"icon-phone",
	"icon-unchecked",
	"icon-check-empty",
	"icon-bookmark-empty",
	"icon-phone-sign",
	"icon-twitter",
	"icon-facebook",
	"icon-github",
	"icon-unlock",
	"icon-credit-card",
	"icon-rss",
	"icon-hdd",
	"icon-bullhorn",
	"icon-bell",
	"icon-certificate",
	"icon-hand-right",
	"icon-hand-left",
	"icon-hand-up",
	"icon-hand-down",
	"icon-circle-arrow-left",
	"icon-circle-arrow-right",
	"icon-circle-arrow-up",
	"icon-circle-arrow-down",
	"icon-globe",
	"icon-wrench",
	"icon-tasks",
	"icon-filter",
	"icon-briefcase",
	"icon-fullscreen",
	"icon-group",
	"icon-link",
	"icon-cloud",
	"icon-beaker",
	"icon-cut",
	"icon-copy",
	"icon-paperclip",
	"icon-paper-clip",
	"icon-save",
	"icon-sign-blank",
	"icon-reorder",
	"icon-list-ul",
	"icon-list-ol",
	"icon-strikethrough",
	"icon-underline",
	"icon-table",
	"icon-magic",
	"icon-truck",
	"icon-pinterest",
	"icon-pinterest-sign",
	"icon-google-plus-sign",
	"icon-google-plus",
	"icon-money",
	"icon-caret-down",
	"icon-caret-up",
	"icon-caret-left",
	"icon-caret-right",
	"icon-columns",
	"icon-sort",
	"icon-sort-down",
	"icon-sort-up",
	"icon-envelope",
	"icon-linkedin",
	"icon-rotate-left",
	"icon-undo",
	"icon-legal",
	"icon-dashboard",
	"icon-comment-alt",
	"icon-comments-alt",
	"icon-bolt",
	"icon-sitemap",
	"icon-umbrella",
	"icon-paste",
	"icon-lightbulb",
	"icon-exchange",
	"icon-cloud-download",
	"icon-cloud-upload",
	"icon-user-md",
	"icon-stethoscope",
	"icon-suitcase",
	"icon-bell-alt",
	"icon-coffee",
	"icon-food",
	"icon-file-text-alt",
	"icon-building",
	"icon-hospital",
	"icon-ambulance",
	"icon-medkit",
	"icon-fighter-jet",
	"icon-beer",
	"icon-h-sign",
	"icon-plus-sign-alt",
	"icon-double-angle-left",
	"icon-double-angle-right",
	"icon-double-angle-up",
	"icon-double-angle-down",
	"icon-angle-left",
	"icon-angle-right",
	"icon-angle-up",
	"icon-angle-down",
	"icon-desktop",
	"icon-laptop",
	"icon-tablet",
	"icon-mobile-phone",
	"icon-circle-blank",
	"icon-quote-left",
	"icon-quote-right",
	"icon-spinner",
	"icon-circle",
	"icon-mail-reply",
	"icon-reply",
	"icon-github-alt",
	"icon-folder-close-alt",
	"icon-folder-open-alt",
	"icon-expand-alt",
	"icon-collapse-alt",
	"icon-smile",
	"icon-frown",
	"icon-meh",
	"icon-gamepad",
	"icon-keyboard",
	"icon-flag-alt",
	"icon-flag-checkered",
	"icon-terminal",
	"icon-code",
	"icon-reply-all",
	"icon-mail-reply-all",
	"icon-star-half-full",
	"icon-star-half-empty",
	"icon-location-arrow",
	"icon-crop",
	"icon-code-fork",
	"icon-unlink",
	"icon-question",
	"icon-info",
	"icon-exclamation",
	"icon-superscript",
	"icon-subscript",
	"icon-eraser",
	"icon-puzzle-piece",
	"icon-microphone",
	"icon-microphone-off",
	"icon-shield",
	"icon-calendar-empty",
	"icon-fire-extinguisher",
	"icon-rocket",
	"icon-maxcdn",
	"icon-chevron-sign-left",
	"icon-chevron-sign-right",
	"icon-chevron-sign-up",
	"icon-chevron-sign-down",
	"icon-html5",
	"icon-css3",
	"icon-anchor",
	"icon-unlock-alt",
	"icon-bullseye",
	"icon-ellipsis-horizontal",
	"icon-ellipsis-vertical",
	"icon-rss-sign",
	"icon-play-sign",
	"icon-ticket",
	"icon-minus-sign-alt",
	"icon-check-minus",
	"icon-level-up",
	"icon-level-down",
	"icon-check-sign",
	"icon-edit-sign",
	"icon-external-link-sign",
	"icon-share-sign",
	"icon-compass",
	"icon-collapse",
	"icon-collapse-top",
	"icon-expand",
	"icon-euro",
	"icon-eur",
	"icon-gbp",
	"icon-dollar",
	"icon-usd",
	"icon-rupee",
	"icon-inr",
	"icon-yen",
	"icon-jpy",
	"icon-renminbi",
	"icon-cny",
	"icon-won",
	"icon-krw",
	"icon-bitcoin",
	"icon-btc",
	"icon-file",
	"icon-file-text",
	"icon-sort-by-alphabet",
	"icon-sort-by-alphabet-alt",
	"icon-sort-by-attributes",
	"icon-sort-by-attributes-alt",
	"icon-sort-by-order",
	"icon-sort-by-order-alt",
	"icon-thumbs-up",
	"icon-thumbs-down",
	"icon-youtube-sign",
	"icon-youtube",
	"icon-xing",
	"icon-xing-sign",
	"icon-youtube-play",
	"icon-dropbox",
	"icon-stackexchange",
	"icon-instagram",
	"icon-flickr",
	"icon-adn",
	"icon-bitbucket",
	"icon-bitbucket-sign",
	"icon-tumblr",
	"icon-tumblr-sign",
	"icon-long-arrow-down",
	"icon-long-arrow-up",
	"icon-long-arrow-left",
	"icon-long-arrow-right",
	"icon-apple",
	"icon-windows",
	"icon-android",
	"icon-linux",
	"icon-dribbble",
	"icon-skype",
	"icon-foursquare",
	"icon-trello",
	"icon-female",
	"icon-male",
	"icon-gittip",
	"icon-sun",
	"icon-moon",
	"icon-archive",
	"icon-bug",
	"icon-vk",
	"icon-weibo",
	"icon-renren"
]











var new_names_1 = {
	"icon-fixed-with" : "fa-fw",
	"icon-large" : "fa-lg"
}

var new_names_2 = {
  	"icon-ban-circle" : "fa-ban",
	"icon-bar-chart" : "fa-bar-chart-o",
	"icon-beaker" : "fa-flask",
	"icon-bell" : "fa-bell-o",
	"icon-bell-alt" : "fa-bell",
	"icon-bitbucket-sign" : "fa-bitbucket-square",
	"icon-bookmark-empty" : "fa-bookmark-o",
	"icon-building" : "fa-building-o",
	"icon-calendar-empty" : "fa-calendar-o",
	"icon-check-empty" : "fa-square-o",
	"icon-check-minus" : "fa-minus-square-o",
	"icon-check-sign" : "fa-check-square",
	"icon-check" : "fa-check-square-o",
	"icon-chevron-sign-down" : "fa-chevron-circle-down",
	"icon-chevron-sign-left" : "fa-chevron-circle-left",
	"icon-chevron-sign-right" : "fa-chevron-circle-right",
	"icon-chevron-sign-up" : "fa-chevron-circle-up",
	"icon-circle-arrow-down" : "fa-arrow-circle-down",
	"icon-circle-arrow-left" : "fa-arrow-circle-left",
	"icon-circle-arrow-right" : "fa-arrow-circle-right",
	"icon-circle-arrow-up" : "fa-arrow-circle-up",
	"icon-circle-blank" : "fa-circle-o",
	"icon-cny" : "fa-rub",
	"icon-collapse-alt" : "fa-minus-square-o",
	"icon-collapse-top" : "fa-caret-square-o-up",
	"icon-collapse" : "fa-caret-square-o-down",
	"icon-comment-alt" : "fa-comment-o",
	"icon-comments-alt" : "fa-comments-o",
	"icon-copy" : "fa-files-o",
	"icon-cut" : "fa-scissors",
	"icon-dashboard" : "fa-tachometer",
	"icon-double-angle-down" : "fa-angle-double-down",
	"icon-double-angle-left" : "fa-angle-double-left",
	"icon-double-angle-right" : "fa-angle-double-right",
	"icon-double-angle-up" : "fa-angle-double-up",
	"icon-download" : "fa-arrow-circle-o-down",
	"icon-download-alt" : "fa-download",
	"icon-edit-sign" : "fa-pencil-square",
	"icon-edit" : "fa-pencil-square-o",
	"icon-ellipsis-horizontal" : "fa-ellipsis-h",
	"icon-ellipsis-vertical" : "fa-ellipsis-v",
	"icon-envelope-alt" : "fa-envelope-o",
	"icon-exclamation-sign" : "fa-exclamation-circle",
	"icon-expand-alt" : "fa-expand-o",
	"icon-expand" : "fa-caret-square-o-right",
	"icon-external-link-sign" : "fa-external-link-square",
	"icon-eye-close" : "fa-eye-slash",
	"icon-eye-open" : "fa-eye",
	"icon-facebook-sign" : "fa-facebook-square",
	"icon-facetime-video" : "fa-video-camera",
	"icon-file-alt" : "fa-file-o",
	"icon-file-text-alt" : "fa-file-text-o",
	"icon-flag-alt" : "fa-flag-o",
	"icon-folder-close-alt" : "fa-folder-o",
	"icon-folder-close" : "fa-folder",
	"icon-folder-open-alt" : "fa-folder-open-o",
	"icon-food" : "fa-cutlery",
	"icon-frown" : "fa-frown-o",
	"icon-fullscreen" : "fa-arrows-alt",
	"icon-github-sign" : "fa-github-square",
	"icon-google-plus-sign" : "fa-google-plus-square",
	"icon-group" : "fa-users",
	"icon-h-sign" : "fa-h-square",
	"icon-hand-down" : "fa-hand-o-down",
	"icon-hand-left" : "fa-hand-o-left",
	"icon-hand-right" : "fa-hand-o-right",
	"icon-hand-up" : "fa-hand-o-up",
	"icon-hdd" : "fa-hdd-o",
	"icon-heart-empty" : "fa-heart-o",
	"icon-hospital" : "fa-hospital-o",
	"icon-indent-left" : "fa-outdent",
	"icon-indent-right" : "fa-indent",
	"icon-info-sign" : "fa-info-circle",
	"icon-keyboard" : "fa-keyboard-o",
	"icon-legal" : "fa-gavel",
	"icon-lemon" : "fa-lemon-o",
	"icon-lightbulb" : "fa-lightbulb-o",
	"icon-linkedin-sign" : "fa-linkedin-square",
	"icon-meh" : "fa-meh-o",
	"icon-microphone-off" : "fa-microphone-slash",
	"icon-minus-sign-alt" : "fa-minus-square",
	"icon-minus-sign" : "fa-minus-circle",
	"icon-mobile-phone" : "fa-mobile",
	"icon-moon" : "fa-moon-o",
	"icon-move" : "fa-arrows",
	"icon-off" : "fa-power-off",
	"icon-ok-circle" : "fa-check-circle-o",
	"icon-ok-sign" : "fa-check-circle",
	"icon-ok" : "fa-check",
	"icon-paper-clip" : "fa-paperclip",
	"icon-paste" : "fa-clipboard",
	"icon-phone-sign" : "fa-phone-square",
	"icon-picture" : "fa-picture-o",
	"icon-pinterest-sign" : "fa-pinterest-square",
	"icon-play-circle" : "fa-play-circle-o",
	"icon-play-sign" : "fa-play-circle",
	"icon-plus-sign-alt" : "fa-plus-square",
	"icon-plus-sign" : "fa-plus-circle",
	"icon-pushpin" : "fa-thumb-tack",
	"icon-question-sign" : "fa-question-circle",
	"icon-remove-circle" : "fa-times-circle-o",
	"icon-remove-sign" : "fa-times-circle",
	"icon-remove" : "fa-times",
	"icon-reorder" : "fa-bars",
	"icon-resize-full" : "fa-expand",
	"icon-resize-horizontal" : "fa-arrows-h",
	"icon-resize-small" : "fa-compress",
	"icon-resize-vertical" : "fa-arrows-v",
	"icon-rss-sign" : "fa-rss-square",
	"icon-save" : "fa-floppy-o",
	"icon-screenshot" : "fa-crosshairs",
	"icon-share-alt" : "fa-share",
	"icon-share-sign" : "fa-share-square",
	"icon-share" : "fa-share-square-o",
	"icon-sign-blank" : "fa-square",
	"icon-signin" : "fa-sign-in",
	"icon-signout" : "fa-sign-out",
	"icon-smile" : "fa-smile-o",
	"icon-sort-by-alphabet-alt" : "fa-sort-alpha-desc",
	"icon-sort-by-alphabet" : "fa-sort-alpha-asc",
	"icon-sort-by-attributes-alt" : "fa-sort-amount-desc",
	"icon-sort-by-attributes" : "fa-sort-amount-asc",
	"icon-sort-by-order-alt" : "fa-sort-numeric-desc",
	"icon-sort-by-order" : "fa-sort-numeric-asc",
	"icon-sort-down" : "fa-sort-asc",
	"icon-sort-up" : "fa-sort-desc",
	"icon-stackexchange" : "fa-stack-overflow",
	"icon-star-empty" : "fa-star-o",
	"icon-star-half-empty" : "fa-star-half-o",
	"icon-sun" : "fa-sun-o",
	"icon-thumbs-down-alt" : "fa-thumbs-o-down",
	"icon-thumbs-up-alt" : "fa-thumbs-o-up",
	"icon-time" : "fa-clock-o",
	"icon-trash" : "fa-trash-o",
	"icon-tumblr-sign" : "fa-tumblr-square",
	"icon-twitter-sign" : "fa-twitter-square",
	"icon-unlink" : "fa-chain-broken",
	"icon-upload" : "fa-arrow-circle-o-up",
	"icon-upload-alt" : "fa-upload",
	"icon-warning-sign" : "fa-exclamation-triangle",
	"icon-xing-sign" : "fa-xing-square",
	"icon-youtube-sign" : "fa-youtube-square",
	"icon-zoom-in" : "fa-search-plus",
	"icon-zoom-out" : "fa-search-minus"
}




//in default list order, our regex will treat "icon-bell-alt" as "icon-bell" + "-alt"
//because "icon-bell" is listed before "icon-bell-alt"
//so we sort the list of icons in descending order, so that "icon-bell-alt" comes before "icon-bell"
//and our regex works correctly
var all_icons = old_icons_2.concat(old_icons_1);
all_icons.sort().reverse();

var regex_search = new RegExp("(?:[^\w]|^)("+all_icons.join('|')+")" , "gi");
var replace_callback = function(text, icon ) {
	//the callback to replace icons
	icon = icon.toLowerCase();
	if(old_icons_1.indexOf(icon) >= 0) {
		if(icon in new_names_1) return text.replace(icon, new_names_1[icon]);//use the new name of the icon
		return text.replace(/icons?/ , 'fa');//change `icon-*` && `icons-*` to `fa-*`
	}

	if(old_icons_2.indexOf(icon) >= 0) {
		if(icon in new_names_2) return text.replace(icon, ace_icon + 'fa '+ new_names_2[icon]);//use the new name of the icon
		return text.replace(/icon/ , ace_icon + 'fa fa');//change `icon-*` to `fa fa-*`
	}

	return icon;
}

function replace_icons(input) {
  return input.replace(regex_search , replace_callback);
}





//update files
var fs = require('fs');
var arg = require('argh').argv;//read & parse arguements
var ext_regex = !('ext' in arg) ? null //to check and update specific file extensions only
			: new RegExp("(.+?)\.("+arg['ext'].replace(/[\,\s\+]/g , '|')+")$");


//iterate through directories and replace all icons!
function update_file(path) {
	if( ext_regex && !path.match(ext_regex) ) return;;//return if desired extension doesn't match
	
	var content = fs.readFileSync(path , 'utf-8')
	content = replace_icons(content)
	fs.writeFileSync(path, content, 'utf-8')
}
function update_directory(path) {
 	var files = fs.readdirSync(path)
	files.forEach(function (name) {
		var file = path+'/'+name
		var stats = fs.statSync(file)
		
		if( stats.isDirectory() ) {
			update_directory(file)
			return;
		}

		update_file(file);
	})
}

function update(path) {
	if( !fs.existsSync(path) ) return;

	var stats = fs.statSync(path)
	if( stats.isDirectory() ) {
		update_directory(path)
		return;
	}

	else update_file(path);
}

if('path' in arg) update(arg['path']);
//console.log(replace_icons(" : 'icon-ok',"));
