
function Guilloche() {
	var _steps = 300+Math.round(Math.random()*2400); // Divide a circle this many times
    var _R = 50; // The major ripple
	var _rr = 0.25; // The minor ripple
	var _p = 25; // Radius type effect
	var _m = 1; // Angle multiplier
	var _amplitude = 4.5; // Scale of final drawing
	var _opacity = 0.2; // Line opacity
	var _color1 = 0x000000; // Line start colour
	var _color2 = 0x000000; // Line end colour
	var _thickness = 0.5; // Line thickness
	var section_length = 1; // Number of sections for each line
	var deg2rad = Math.PI / 180; // Factor to convert degs to radians
	var _colorCycle = 1; // The number of times the colour repeats
	var colorPalette = []; // For storing a gradient array of colours

	this.plot = function(ctx) {
		var l;
		var x, y, ox, oy;
		var sl = 0;
		var theta = 0;
		var thetaStep = 2 * Math.PI / _steps;
		var s = (_R + _rr) / _rr;
		var rR = _rr + _R;
		var rp = _rr + _p;

		var cpl = colorPalette.length;
		var c = _color1;

		for(var t = 0; t <= _steps; t++) {
			x = rR * Math.cos(_m * theta) + rp * Math.cos(s * _m * theta);
			y = rR * Math.sin(_m * theta) + rp * Math.sin(s * _m * theta);

			x *= _amplitude;
			y *= _amplitude;

			if(sl == 0) {
				c = (_color1 == _color2 || cpl < 2) ? _color1 : colorPalette[t % cpl];

				ctx.beginPath();

				if(t == 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.moveTo(ox, oy);
					ctx.lineTo(x, y);
				}
				ctx.stroke();
			} else {
				// Append to line section
				ctx.lineTo(x, y);
                ctx.stroke();
			}

			ox = x;
			oy = y;
			sl++;
			theta += thetaStep;

			if(sl == section_length) sl = 0;
		}
	}


	this.setColorPalette = function() {
		//colorPalette = ColorUtil.blendArray(_color1, _color2, ((_steps / section_length) - 1), false)
		//colorPalette = colorPalette.concat(ColorUtil.blendArray(_color2, _color1, ((_steps / section_length) - 1), false))
	}


	/**
	 *	Get and set amplitude
	 */
	this.get_amplitude = function() {
		return _amplitude;
	}
	this.set_amplitude = function(value) {
		if(value !== _amplitude) _amplitude = value;
	}

	/**
	 *	Get and set steps
	 */
	this.get_steps = function() {
		return _steps;
	}
	this.set_steps = function(value) {
		if(value !== _steps) _steps = value;
	}

	/**
	 *	Set colour cycle steps
	 */
	this.get_colorCycle = function() {
		return _colorCycle;
	}
	this.set_colorCycle = function(value) {
		if(value !== _colorCycle) {
			_colorCycle = value;
			//setColorPalette();
		}
	}

	/**
	 *	Get and set R value - the Major ripple effect
	 */
	this.get_R = function() {
		return _R;
	}
	this.set_R = function(value) {
		if(value !== _R) _R = value;
	}

	/**
	 *	Get and set r value - the minor ripple effect
	 */
	this.get_rr = function() {
		return _rr;
	}
	this.set_rr = function(value) {
		if(value !== _rr) _rr = value;
	}

	/**
	 *	Get and set p - the radius type effect
	 */
	this.get_p = function() {
		return _p;
	}
	this.set_p = function(value) {
		if(value !== _p) _p = value;
	}

	/**
	 *	Get and set m value - angle multiplier
	 */
	this.get_m = function() {
		return _m;
	}
	this.set_m = function(value) {
		if(value !== _m) _m = value;
	}

	/**
	 *	Get and set opacity
	 */
	this.get_opacity = function() {
		return _opacity;
	}
	this.set_opacity = function(value) {
		if(value !== _opacity) _opacity = value;
	}

	/**
	 *	Get and set thickness
	 */
	this.get_thickness = function() {
		return _thickness;
	}
	this.set_thickness = function(value) {
		if(value !== _thickness) _thickness = value;
	}

	/**
	 *	Get and set colour
	 */
	this.get_color1 = function() {
		return _color1;
	}
	this.set_color1 = function(value) {
		if(value !== _color1) {
			_color1 = value;
			//setColorPalette();
		}
	}
	this.get_color2 = function() {
		return _color1;
	}
	this.set_color2 = function(value) {
		if(value !== _color2) {
			_color2 = value;
			//setColorPalette();
		}
	}


	return this;

}