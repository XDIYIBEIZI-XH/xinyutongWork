$.fn.fontFlex = function(min, max, mid, line_height) {
	var $this = this;
	$(window).resize(function() {
		if (window.winwidth > 1024) {
			var size = window.innerWidth / (1880 / mid);
			if (size < min) size = min;
			if (size > max) size = max;
			$this.css('font-size', size + 'px').attr("data-font", 1);
			if (line_height == 1) {
				$this.css('line-height', parseFloat($this.css("line-height")) + size - mid + 'px')
			}
			if (line_height == 2) {
				$this.css('line-height', size + 'px')
			}
		} else {
			$("[data-font=1]").removeAttr("style");
		}
	}).trigger('resize');
};
if ($(".response_shows_box .item").length > 1) {
	var _caseTime = 4000,
		_casePc = $(".response_shows_box .pc .pic .item"),
		_casePad = $(".response_shows_box .pad .pic .item"),
		_casePhone = $(".response_shows_box .phone .pic .item"),
		_caseLength = _casePc.length,
		_casePage = -1,
		_casePlay;
	_casePc.each(function(index, element) {
		$(".response_shows_box .thumb").append('<span></span>')
	});
	var _caseSpan = $(".response_shows_box .thumb span");
	_caseSpan.mouseover(function() {
		_casePage = $(this).index() - 1;
		caseLoop()
	});

	function caseLoop() {
		clearInterval(_casePlay);
		_casePage++;
		_casePage = _casePage < _caseLength && _casePage > 0 ? _casePage : 0;
		var _pcH = -_casePc.height() * _casePage + "px",
			_padH = -_casePad.height() * _casePage + "px",
			_phoneH = -_casePhone.height() * _casePage + "px";
		_caseSpan.removeClass("active").eq(_casePage).addClass("active");
		_casePc.css({
			"transform": "translateY(" + _pcH + ")",
			"-ms-transform": "translateY(" + _pcH + ")",
			"-moz-transform": "translateY(" + _pcH + ")",
			"-webkit-transform": "translateY(" + _pcH + ")",
			"-o-transform": "translateY(" + _pcH + ")"
		});
		_casePad.css({
			"transform": "translateY(" + _padH + ")",
			"-ms-transform": "translateY(" + _padH + ")",
			"-moz-transform": "translateY(" + _padH + ")",
			"-webkit-transform": "translateY(" + _padH + ")",
			"-o-transform": "translateY(" + _padH + ")"
		});
		_casePhone.css({
			"transform": "translateY(" + _phoneH + ")",
			"-ms-transform": "translateY(" + _phoneH + ")",
			"-moz-transform": "translateY(" + _phoneH + ")",
			"-webkit-transform": "translateY(" + _phoneH + ")",
			"-o-transform": "translateY(" + _phoneH + ")"
		});
		_casePlay = setTimeout('caseLoop()', _caseTime)
	}
	caseLoop()
}
var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function() {
	if (!document[hiddenProperty]) {
		_polTime = setTimeout('polygonAnimate()', 1000)
	} else {
		clearInterval(_polTime)
	}
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);