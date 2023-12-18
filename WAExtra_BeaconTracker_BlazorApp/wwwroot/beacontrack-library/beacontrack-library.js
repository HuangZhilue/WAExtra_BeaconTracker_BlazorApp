var zs = Object.defineProperty;
var Ns = (dt, y, p) => y in dt ? zs(dt, y, { enumerable: !0, configurable: !0, writable: !0, value: p }) : dt[y] = p;
var S = (dt, y, p) => (Ns(dt, typeof y != "symbol" ? y + "" : y, p), p);
var Eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ko(dt) {
  return dt && dt.__esModule && Object.prototype.hasOwnProperty.call(dt, "default") ? dt.default : dt;
}
var ro = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(dt, y) {
  (function(p, k) {
    k(y);
  })(Eo, function(p) {
    var k = "1.9.4";
    function b(t) {
      var e, i, n, a;
      for (i = 1, n = arguments.length; i < n; i++) {
        a = arguments[i];
        for (e in a)
          t[e] = a[e];
      }
      return t;
    }
    var T = Object.create || /* @__PURE__ */ function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function I(t, e) {
      var i = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function() {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var U = 0;
    function O(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++U), t._leaflet_id;
    }
    function F(t, e, i) {
      var n, a, h, l;
      return l = function() {
        n = !1, a && (h.apply(i, a), a = !1);
      }, h = function() {
        n ? a = arguments : (t.apply(i, arguments), setTimeout(l, e), n = !0);
      }, h;
    }
    function st(t, e, i) {
      var n = e[1], a = e[0], h = n - a;
      return t === n && i ? t : ((t - a) % h + h) % h + a;
    }
    function Z() {
      return !1;
    }
    function V(t, e) {
      if (e === !1)
        return t;
      var i = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * i) / i;
    }
    function vt(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function Et(t) {
      return vt(t).split(/\s+/);
    }
    function x(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? T(t.options) : {});
      for (var i in e)
        t.options[i] = e[i];
      return t.options;
    }
    function Pt(t, e, i) {
      var n = [];
      for (var a in t)
        n.push(encodeURIComponent(i ? a.toUpperCase() : a) + "=" + encodeURIComponent(t[a]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var Vr = /\{ *([\w_ -]+) *\}/g;
    function Nn(t, e) {
      return t.replace(Vr, function(i, n) {
        var a = e[n];
        if (a === void 0)
          throw new Error("No value provided for variable " + i);
        return typeof a == "function" && (a = a(e)), a;
      });
    }
    var Qt = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function ee(t, e) {
      for (var i = 0; i < t.length; i++)
        if (t[i] === e)
          return i;
      return -1;
    }
    var Ge = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function q(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var Ke = 0;
    function bt(t) {
      var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - Ke));
      return Ke = e + i, window.setTimeout(t, i);
    }
    var Fi = window.requestAnimationFrame || q("RequestAnimationFrame") || bt, Ui = window.cancelAnimationFrame || q("CancelAnimationFrame") || q("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function Dt(t, e, i) {
      if (i && Fi === bt)
        t.call(e);
      else
        return Fi.call(window, I(t, e));
    }
    function Gt(t) {
      t && Ui.call(window, t);
    }
    var qr = {
      __proto__: null,
      extend: b,
      create: T,
      bind: I,
      get lastId() {
        return U;
      },
      stamp: O,
      throttle: F,
      wrapNum: st,
      falseFn: Z,
      formatNum: V,
      trim: vt,
      splitWords: Et,
      setOptions: x,
      getParamString: Pt,
      template: Nn,
      isArray: Qt,
      indexOf: ee,
      emptyImageUrl: Ge,
      requestFn: Fi,
      cancelFn: Ui,
      requestAnimFrame: Dt,
      cancelAnimFrame: Gt
    };
    function ie() {
    }
    ie.extend = function(t) {
      var e = function() {
        x(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, i = e.__super__ = this.prototype, n = T(i);
      n.constructor = e, e.prototype = n;
      for (var a in this)
        Object.prototype.hasOwnProperty.call(this, a) && a !== "prototype" && a !== "__super__" && (e[a] = this[a]);
      return t.statics && b(e, t.statics), t.includes && (Wr(t.includes), b.apply(null, [n].concat(t.includes))), b(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? T(i.options) : {}, b(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
        if (!this._initHooksCalled) {
          i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var h = 0, l = n._initHooks.length; h < l; h++)
            n._initHooks[h].call(this);
        }
      }, e;
    }, ie.include = function(t) {
      var e = this.prototype.options;
      return b(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, ie.mergeOptions = function(t) {
      return b(this.prototype.options, t), this;
    }, ie.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
    };
    function Wr(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = Qt(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var Ft = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e);
        else {
          t = Et(t);
          for (var a = 0, h = t.length; a < h; a++)
            this._on(t[a], e, i);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, i) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var n in t)
            this._off(n, t[n], e);
        else {
          t = Et(t);
          for (var a = arguments.length === 1, h = 0, l = t.length; h < l; h++)
            a ? this._off(t[h]) : this._off(t[h], e, i);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === !1) {
          i === this && (i = void 0);
          var a = { fn: e, ctx: i };
          n && (a.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(a);
        }
      },
      _off: function(t, e, i) {
        var n, a, h;
        if (this._events && (n = this._events[t], !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (a = 0, h = n.length; a < h; a++)
                n[a].fn = Z;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var l = this._listens(t, e, i);
          if (l !== !1) {
            var m = n[l];
            this._firingCount && (m.fn = Z, this._events[t] = n = n.slice()), n.splice(l, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, i) {
        if (!this.listens(t, i))
          return this;
        var n = b({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var a = this._events[t];
          if (a) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var h = 0, l = a.length; h < l; h++) {
              var m = a[h], _ = m.fn;
              m.once && this.off(t, _, m.ctx), _.call(m.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var a = e;
        typeof e != "function" && (n = !!e, a = void 0, i = void 0);
        var h = this._events && this._events[t];
        if (h && h.length && this._listens(t, a, i) !== !1)
          return !0;
        if (n) {
          for (var l in this._eventParents)
            if (this._eventParents[l].listens(t, e, i, n))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, i) {
        if (!this._events)
          return !1;
        var n = this._events[t] || [];
        if (!e)
          return !!n.length;
        i === this && (i = void 0);
        for (var a = 0, h = n.length; a < h; a++)
          if (n[a].fn === e && n[a].ctx === i)
            return a;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e, !0);
        else {
          t = Et(t);
          for (var a = 0, h = t.length; a < h; a++)
            this._on(t[a], e, i, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[O(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[O(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, b({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    Ft.addEventListener = Ft.on, Ft.removeEventListener = Ft.clearAllEventListeners = Ft.off, Ft.addOneTimeEventListener = Ft.once, Ft.fireEvent = Ft.fire, Ft.hasEventListeners = Ft.listens;
    var Ce = ie.extend(Ft);
    function K(t, e, i) {
      this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
    }
    var Dn = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    K.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new K(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(G(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(G(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new K(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new K(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = Dn(this.x), this.y = Dn(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = G(t);
        var e = t.x - this.x, i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = G(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = G(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + V(this.x) + ", " + V(this.y) + ")";
      }
    };
    function G(t, e, i) {
      return t instanceof K ? t : Qt(t) ? new K(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new K(t.x, t.y) : new K(t, e, i);
    }
    function gt(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, a = i.length; n < a; n++)
          this.extend(i[n]);
    }
    gt.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, i;
        if (!t)
          return this;
        if (t instanceof K || typeof t[0] == "number" || "x" in t)
          e = i = G(t);
        else if (t = Zt(t), e = t.min, i = t.max, !e || !i)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return G(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return G(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return G(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, i;
        return typeof t[0] == "number" || t instanceof K ? t = G(t) : t = Zt(t), t instanceof gt ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = Zt(t);
        var e = this.min, i = this.max, n = t.min, a = t.max, h = a.x >= e.x && n.x <= i.x, l = a.y >= e.y && n.y <= i.y;
        return h && l;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = Zt(t);
        var e = this.min, i = this.max, n = t.min, a = t.max, h = a.x > e.x && n.x < i.x, l = a.y > e.y && n.y < i.y;
        return h && l;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, a = Math.abs(e.y - i.y) * t;
        return Zt(
          G(e.x - n, e.y - a),
          G(i.x + n, i.y + a)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = Zt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function Zt(t, e) {
      return !t || t instanceof gt ? t : new gt(t, e);
    }
    function Rt(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, a = i.length; n < a; n++)
          this.extend(i[n]);
    }
    Rt.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, i = this._northEast, n, a;
        if (t instanceof ht)
          n = t, a = t;
        else if (t instanceof Rt) {
          if (n = t._southWest, a = t._northEast, !n || !a)
            return this;
        } else
          return t ? this.extend(et(t) || yt(t)) : this;
        return !e && !i ? (this._southWest = new ht(n.lat, n.lng), this._northEast = new ht(a.lat, a.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(a.lat, i.lat), i.lng = Math.max(a.lng, i.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, a = Math.abs(e.lng - i.lng) * t;
        return new Rt(
          new ht(e.lat - n, e.lng - a),
          new ht(i.lat + n, i.lng + a)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new ht(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new ht(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new ht(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof ht || "lat" in t ? t = et(t) : t = yt(t);
        var e = this._southWest, i = this._northEast, n, a;
        return t instanceof Rt ? (n = t.getSouthWest(), a = t.getNorthEast()) : n = a = t, n.lat >= e.lat && a.lat <= i.lat && n.lng >= e.lng && a.lng <= i.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = yt(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), a = t.getNorthEast(), h = a.lat >= e.lat && n.lat <= i.lat, l = a.lng >= e.lng && n.lng <= i.lng;
        return h && l;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = yt(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), a = t.getNorthEast(), h = a.lat > e.lat && n.lat < i.lat, l = a.lng > e.lng && n.lng < i.lng;
        return h && l;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = yt(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function yt(t, e) {
      return t instanceof Rt ? t : new Rt(t, e);
    }
    function ht(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
    }
    ht.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = et(t);
        var i = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return i <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + V(this.lat, t) + ", " + V(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return ce.distance(this, et(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return ce.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
        return yt(
          [this.lat - e, this.lng - i],
          [this.lat + e, this.lng + i]
        );
      },
      clone: function() {
        return new ht(this.lat, this.lng, this.alt);
      }
    };
    function et(t, e, i) {
      return t instanceof ht ? t : Qt(t) && typeof t[0] != "object" ? t.length === 3 ? new ht(t[0], t[1], t[2]) : t.length === 2 ? new ht(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new ht(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new ht(t, e, i);
    }
    var ne = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var i = this.projection.project(t), n = this.scale(e);
        return this.transformation._transform(i, n);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var i = this.scale(e), n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), a = this.transformation.transform(e.max, i);
        return new gt(n, a);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? st(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? st(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
        return new ht(i, e, n);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, a = e.lng - i.lng;
        if (n === 0 && a === 0)
          return t;
        var h = t.getSouthWest(), l = t.getNorthEast(), m = new ht(h.lat - n, h.lng - a), _ = new ht(l.lat - n, l.lng - a);
        return new Rt(m, _);
      }
    }, ce = b({}, ne, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var i = Math.PI / 180, n = t.lat * i, a = e.lat * i, h = Math.sin((e.lat - t.lat) * i / 2), l = Math.sin((e.lng - t.lng) * i / 2), m = h * h + Math.cos(n) * Math.cos(a) * l * l, _ = 2 * Math.atan2(Math.sqrt(m), Math.sqrt(1 - m));
        return this.R * _;
      }
    }), Hi = 6378137, Qi = {
      R: Hi,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), a = Math.sin(n * e);
        return new K(
          this.R * t.lng * e,
          this.R * Math.log((1 + a) / (1 - a)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new ht(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = Hi * Math.PI;
        return new gt([-t, -t], [t, t]);
      }()
    };
    function Gi(t, e, i, n) {
      if (Qt(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = i, this._d = n;
    }
    Gi.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new K(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function Ve(t, e, i, n) {
      return new Gi(t, e, i, n);
    }
    var Ki = b({}, ce, {
      code: "EPSG:3857",
      projection: Qi,
      transformation: function() {
        var t = 0.5 / (Math.PI * Qi.R);
        return Ve(t, 0.5, -t, 0.5);
      }()
    }), Vi = b({}, Ki, {
      code: "EPSG:900913"
    });
    function Zn(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function Rn(t, e) {
      var i = "", n, a, h, l, m, _;
      for (n = 0, h = t.length; n < h; n++) {
        for (m = t[n], a = 0, l = m.length; a < l; a++)
          _ = m[a], i += (a ? "L" : "M") + _.x + " " + _.y;
        i += e ? D.svg ? "z" : "x" : "";
      }
      return i || "M0 0";
    }
    var qi = document.documentElement.style, Ee = "ActiveXObject" in window, jr = Ee && !document.addEventListener, Wi = "msLaunchUri" in navigator && !("documentMode" in document), li = jt("webkit"), ji = jt("android"), Xi = jt("android 2") || jt("android 3"), Fn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Un = ji && jt("Google") && Fn < 537 && !("AudioNode" in window), ci = !!window.opera, Yi = !Wi && jt("chrome"), Ji = jt("gecko") && !li && !ci && !Ee, Hn = !Yi && jt("safari"), $i = jt("phantom"), Qn = "OTransition" in qi, Xr = navigator.platform.indexOf("Win") === 0, tn = Ee && "transition" in qi, fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Xi, Gn = "MozPerspective" in qi, Yr = !window.L_DISABLE_3D && (tn || fi || Gn) && !Qn && !$i, ke = typeof orientation < "u" || jt("mobile"), Kn = ke && li, Jr = ke && fi, Vn = !window.PointerEvent && window.MSPointerEvent, qn = !!(window.PointerEvent || Vn), Wn = "ontouchstart" in window || !!window.TouchEvent, $r = !window.L_NO_TOUCH && (Wn || qn), ta = ke && ci, ea = ke && Ji, ia = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, na = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", Z, e), window.removeEventListener("testPassiveEventSupport", Z, e);
      } catch {
      }
      return t;
    }(), ra = function() {
      return !!document.createElement("canvas").getContext;
    }(), en = !!(document.createElementNS && Zn("svg").createSVGRect), aa = !!en && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), oa = !en && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), jn = navigator.platform.indexOf("Mac") === 0, Xn = navigator.platform.indexOf("Linux") === 0;
    function jt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var D = {
      ie: Ee,
      ielt9: jr,
      edge: Wi,
      webkit: li,
      android: ji,
      android23: Xi,
      androidStock: Un,
      opera: ci,
      chrome: Yi,
      gecko: Ji,
      safari: Hn,
      phantom: $i,
      opera12: Qn,
      win: Xr,
      ie3d: tn,
      webkit3d: fi,
      gecko3d: Gn,
      any3d: Yr,
      mobile: ke,
      mobileWebkit: Kn,
      mobileWebkit3d: Jr,
      msPointer: Vn,
      pointer: qn,
      touch: $r,
      touchNative: Wn,
      mobileOpera: ta,
      mobileGecko: ea,
      retina: ia,
      passiveEvents: na,
      canvas: ra,
      svg: en,
      vml: oa,
      inlineSvg: aa,
      mac: jn,
      linux: Xn
    }, Yn = D.msPointer ? "MSPointerDown" : "pointerdown", qe = D.msPointer ? "MSPointerMove" : "pointermove", Jn = D.msPointer ? "MSPointerUp" : "pointerup", nn = D.msPointer ? "MSPointerCancel" : "pointercancel", rn = {
      touchstart: Yn,
      touchmove: qe,
      touchend: Jn,
      touchcancel: nn
    }, $n = {
      touchstart: la,
      touchmove: We,
      touchend: We,
      touchcancel: We
    }, Te = {}, an = !1;
    function sa(t, e, i) {
      return e === "touchstart" && ua(), $n[e] ? (i = $n[e].bind(this, i), t.addEventListener(rn[e], i, !1), i) : (console.warn("wrong event specified:", e), Z);
    }
    function tr(t, e, i) {
      if (!rn[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(rn[e], i, !1);
    }
    function ha(t) {
      Te[t.pointerId] = t;
    }
    function er(t) {
      Te[t.pointerId] && (Te[t.pointerId] = t);
    }
    function ir(t) {
      delete Te[t.pointerId];
    }
    function ua() {
      an || (document.addEventListener(Yn, ha, !0), document.addEventListener(qe, er, !0), document.addEventListener(Jn, ir, !0), document.addEventListener(nn, ir, !0), an = !0);
    }
    function We(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var i in Te)
          e.touches.push(Te[i]);
        e.changedTouches = [e], t(e);
      }
    }
    function la(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && kt(e), We(t, e);
    }
    function ca(t) {
      var e = {}, i, n;
      for (n in t)
        i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var fa = 200;
    function da(t, e) {
      t.addEventListener("dblclick", e);
      var i = 0, n;
      function a(h) {
        if (h.detail !== 1) {
          n = h.detail;
          return;
        }
        if (!(h.pointerType === "mouse" || h.sourceCapabilities && !h.sourceCapabilities.firesTouchEvents)) {
          var l = rr(h);
          if (!(l.some(function(_) {
            return _ instanceof HTMLLabelElement && _.attributes.for;
          }) && !l.some(function(_) {
            return _ instanceof HTMLInputElement || _ instanceof HTMLSelectElement;
          }))) {
            var m = Date.now();
            m - i <= fa ? (n++, n === 2 && e(ca(h))) : n = 1, i = m;
          }
        }
      }
      return t.addEventListener("click", a), {
        dblclick: e,
        simDblclick: a
      };
    }
    function pa(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var on = je(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), ve = je(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), ge = ve === "webkitTransition" || ve === "OTransition" ? ve + "End" : "transitionend";
    function di(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Xt(t, e) {
      var i = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!i || i === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return i === "auto" ? null : i;
    }
    function nt(t, e, i) {
      var n = document.createElement(t);
      return n.className = e || "", i && i.appendChild(n), n;
    }
    function _t(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function pi(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function Ie(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Me(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function mi(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var i = vi(t);
      return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
    }
    function W(t, e) {
      if (t.classList !== void 0)
        for (var i = Et(e), n = 0, a = i.length; n < a; n++)
          t.classList.add(i[n]);
      else if (!mi(t, e)) {
        var h = vi(t);
        sn(t, (h ? h + " " : "") + e);
      }
    }
    function wt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : sn(t, vt((" " + vi(t) + " ").replace(" " + e + " ", " ")));
    }
    function sn(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function vi(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function Kt(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && nr(t, e);
    }
    function nr(t, e) {
      var i = !1, n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    }
    function je(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e)
          return t[i];
      return !1;
    }
    function _e(t, e, i) {
      var n = e || new K(0, 0);
      t.style[on] = (D.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
    }
    function xt(t, e) {
      t._leaflet_pos = e, D.any3d ? _e(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function Ae(t) {
      return t._leaflet_pos || new K(0, 0);
    }
    var Xe, Ye, hn;
    if ("onselectstart" in document)
      Xe = function() {
        Q(window, "selectstart", kt);
      }, Ye = function() {
        ft(window, "selectstart", kt);
      };
    else {
      var Je = je(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Xe = function() {
        if (Je) {
          var t = document.documentElement.style;
          hn = t[Je], t[Je] = "none";
        }
      }, Ye = function() {
        Je && (document.documentElement.style[Je] = hn, hn = void 0);
      };
    }
    function un() {
      Q(window, "dragstart", kt);
    }
    function ln() {
      ft(window, "dragstart", kt);
    }
    var gi, cn;
    function fn(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (_i(), gi = t, cn = t.style.outlineStyle, t.style.outlineStyle = "none", Q(window, "keydown", _i));
    }
    function _i() {
      gi && (gi.style.outlineStyle = cn, gi = void 0, cn = void 0, ft(window, "keydown", _i));
    }
    function dn(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Ai(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var ma = {
      __proto__: null,
      TRANSFORM: on,
      TRANSITION: ve,
      TRANSITION_END: ge,
      get: di,
      getStyle: Xt,
      create: nt,
      remove: _t,
      empty: pi,
      toFront: Ie,
      toBack: Me,
      hasClass: mi,
      addClass: W,
      removeClass: wt,
      setClass: sn,
      getClass: vi,
      setOpacity: Kt,
      testProp: je,
      setTransform: _e,
      setPosition: xt,
      getPosition: Ae,
      get disableTextSelection() {
        return Xe;
      },
      get enableTextSelection() {
        return Ye;
      },
      disableImageDrag: un,
      enableImageDrag: ln,
      preventOutline: fn,
      restoreOutline: _i,
      getSizedParentNode: dn,
      getScale: Ai
    };
    function Q(t, e, i, n) {
      if (e && typeof e == "object")
        for (var a in e)
          $e(t, a, e[a], i);
      else {
        e = Et(e);
        for (var h = 0, l = e.length; h < l; h++)
          $e(t, e[h], i, n);
      }
      return this;
    }
    var St = "_leaflet_events";
    function ft(t, e, i, n) {
      if (arguments.length === 1)
        pn(t), delete t[St];
      else if (e && typeof e == "object")
        for (var a in e)
          ti(t, a, e[a], i);
      else if (e = Et(e), arguments.length === 2)
        pn(t, function(m) {
          return ee(e, m) !== -1;
        });
      else
        for (var h = 0, l = e.length; h < l; h++)
          ti(t, e[h], i, n);
      return this;
    }
    function pn(t, e) {
      for (var i in t[St]) {
        var n = i.split(/\d/)[0];
        (!e || e(n)) && ti(t, n, null, null, i);
      }
    }
    var mn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function $e(t, e, i, n) {
      var a = e + O(i) + (n ? "_" + O(n) : "");
      if (t[St] && t[St][a])
        return this;
      var h = function(m) {
        return i.call(n || t, m || window.event);
      }, l = h;
      !D.touchNative && D.pointer && e.indexOf("touch") === 0 ? h = sa(t, e, h) : D.touch && e === "dblclick" ? h = da(t, h) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(mn[e] || e, h, D.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (h = function(m) {
        m = m || window.event, _n(t, m) && l(m);
      }, t.addEventListener(mn[e], h, !1)) : t.addEventListener(e, l, !1) : t.attachEvent("on" + e, h), t[St] = t[St] || {}, t[St][a] = h;
    }
    function ti(t, e, i, n, a) {
      a = a || e + O(i) + (n ? "_" + O(n) : "");
      var h = t[St] && t[St][a];
      if (!h)
        return this;
      !D.touchNative && D.pointer && e.indexOf("touch") === 0 ? tr(t, e, h) : D.touch && e === "dblclick" ? pa(t, h) : "removeEventListener" in t ? t.removeEventListener(mn[e] || e, h, !1) : t.detachEvent("on" + e, h), t[St][a] = null;
    }
    function ye(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function yi(t) {
      return $e(t, "wheel", ye), this;
    }
    function Yt(t) {
      return Q(t, "mousedown touchstart dblclick contextmenu", ye), t._leaflet_disable_click = !0, this;
    }
    function kt(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function be(t) {
      return kt(t), ye(t), this;
    }
    function rr(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], i = t.target; i; )
        e.push(i), i = i.parentNode;
      return e;
    }
    function bi(t, e) {
      if (!e)
        return new K(t.clientX, t.clientY);
      var i = Ai(e), n = i.boundingClientRect;
      return new K(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop
      );
    }
    var vn = D.linux && D.chrome ? window.devicePixelRatio : D.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function gn(t) {
      return D.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / vn : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function _n(t, e) {
      var i = e.relatedTarget;
      if (!i)
        return !0;
      try {
        for (; i && i !== t; )
          i = i.parentNode;
      } catch {
        return !1;
      }
      return i !== t;
    }
    var va = {
      __proto__: null,
      on: Q,
      off: ft,
      stopPropagation: ye,
      disableScrollPropagation: yi,
      disableClickPropagation: Yt,
      preventDefault: kt,
      stop: be,
      getPropagationPath: rr,
      getMousePosition: bi,
      getWheelDelta: gn,
      isExternalTarget: _n,
      addListener: Q,
      removeListener: ft
    }, ar = Ce.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Ae(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = Dt(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), xt(this._el, i), this.fire("step");
      },
      _complete: function() {
        Gt(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), $ = Ce.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Ki,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = x(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = I(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(et(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ve && D.any3d && !D.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Q(this._proxy, ge, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, i) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(et(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
          i.animate !== void 0 && (i.zoom = b({ animate: i.animate }, i.zoom), i.pan = b({ animate: i.animate, duration: i.duration }, i.pan));
          var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
          if (n)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (D.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (D.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, i) {
        var n = this.getZoomScale(e), a = this.getSize().divideBy(2), h = t instanceof K ? t : this.latLngToContainerPoint(t), l = h.subtract(a).multiplyBy(1 - 1 / n), m = this.containerPointToLatLng(a.add(l));
        return this.setView(m, e, { zoom: i });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : yt(t);
        var i = G(e.paddingTopLeft || e.padding || [0, 0]), n = G(e.paddingBottomRight || e.padding || [0, 0]), a = this.getBoundsZoom(t, !1, i.add(n));
        if (a = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, a) : a, a === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: a
          };
        var h = n.subtract(i).divideBy(2), l = this.project(t.getSouthWest(), a), m = this.project(t.getNorthEast(), a), _ = this.unproject(l.add(m).divideBy(2).add(h), a);
        return {
          center: _,
          zoom: a
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = yt(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = G(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new ar(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          W(this._mapPane, "leaflet-pan-anim");
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, i) {
        if (i = i || {}, i.animate === !1 || !D.any3d)
          return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter()), a = this.project(t), h = this.getSize(), l = this._zoom;
        t = et(t), e = e === void 0 ? l : e;
        var m = Math.max(h.x, h.y), _ = m * this.getZoomScale(l, e), w = a.distanceTo(n) || 1, M = 1.42, R = M * M;
        function j(pt) {
          var zi = pt ? -1 : 1, Ka = pt ? _ : m, Va = _ * _ - m * m + zi * R * R * w * w, Rr = 2 * Ka * R * w, me = Va / Rr, Fr = Math.sqrt(me * me + 1) - me, Ur = Fr < 1e-9 ? -18 : Math.log(Fr);
          return Ur;
        }
        function Tt(pt) {
          return (Math.exp(pt) - Math.exp(-pt)) / 2;
        }
        function Lt(pt) {
          return (Math.exp(pt) + Math.exp(-pt)) / 2;
        }
        function Ht(pt) {
          return Tt(pt) / Lt(pt);
        }
        var It = j(0);
        function Ze(pt) {
          return m * (Lt(It) / Lt(It + M * pt));
        }
        function Nr(pt) {
          return m * (Lt(It) * Ht(It + M * pt) - Tt(It)) / R;
        }
        function Dr(pt) {
          return 1 - Math.pow(1 - pt, 1.5);
        }
        var Qa = Date.now(), Zr = (j(1) - It) / M, Ga = i.duration ? 1e3 * i.duration : 1e3 * Zr * 0.8;
        function Oi() {
          var pt = (Date.now() - Qa) / Ga, zi = Dr(pt) * Zr;
          pt <= 1 ? (this._flyToFrame = Dt(Oi, this), this._move(
            this.unproject(n.add(a.subtract(n).multiplyBy(Nr(zi) / w)), l),
            this.getScaleZoom(m / Ze(zi), l),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, i.noMoveStart), Oi.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = yt(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(), n = this._limitCenter(i, this._zoom, yt(t));
        return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var i = G(e.paddingTopLeft || e.padding || [0, 0]), n = G(e.paddingBottomRight || e.padding || [0, 0]), a = this.project(this.getCenter()), h = this.project(t), l = this.getPixelBounds(), m = Zt([l.min.add(i), l.max.subtract(n)]), _ = m.getSize();
        if (!m.contains(h)) {
          this._enforcingBounds = !0;
          var w = h.subtract(m.getCenter()), M = m.extend(h).getSize().subtract(_);
          a.x += w.x < 0 ? -M.x : M.x, a.y += w.y < 0 ? -M.y : M.y, this.panTo(this.unproject(a), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = b({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var i = this.getSize(), n = e.divideBy(2).round(), a = i.divideBy(2).round(), h = n.subtract(a);
        return !h.x && !h.y ? this : (t.animate && t.pan ? this.panBy(h) : (t.pan && this._rawPanBy(h), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(I(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = b({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = I(this._handleGeolocationResponse, this), i = I(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + i + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, i = t.coords.longitude, n = new ht(e, i), a = n.toBounds(t.coords.accuracy * 2), h = this._locateOptions;
          if (h.setView) {
            var l = this.getBoundsZoom(a);
            this.setView(n, h.maxZoom ? Math.min(l, h.maxZoom) : l);
          }
          var m = {
            latlng: n,
            bounds: a,
            timestamp: t.timestamp
          };
          for (var _ in t.coords)
            typeof t.coords[_] == "number" && (m[_] = t.coords[_]);
          this.fire("locationfound", m);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), _t(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Gt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          _t(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = nt("div", i, e || this._mapPane);
        return t && (this._panes[t] = n), n;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
        return new Rt(e, i);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, i) {
        t = yt(t), i = G(i || [0, 0]);
        var n = this.getZoom() || 0, a = this.getMinZoom(), h = this.getMaxZoom(), l = t.getNorthWest(), m = t.getSouthEast(), _ = this.getSize().subtract(i), w = Zt(this.project(m, n), this.project(l, n)).getSize(), M = D.any3d ? this.options.zoomSnap : 1, R = _.x / w.x, j = _.y / w.y, Tt = e ? Math.max(R, j) : Math.min(R, j);
        return n = this.getScaleZoom(Tt, n), M && (n = Math.round(n / (M / 100)) * (M / 100), n = e ? Math.ceil(n / M) * M : Math.floor(n / M) * M), Math.max(a, Math.min(h, n));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new K(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new gt(i, i.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var i = this.options.crs;
        return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var i = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(et(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(G(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = G(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(et(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(et(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(yt(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(et(t), et(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return G(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return G(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(G(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(et(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return bi(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = di(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else
          throw new Error("Map container not found.");
        Q(e, "scroll", this._onScroll, this), this._containerId = O(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && D.any3d, W(t, "leaflet-container" + (D.touch ? " leaflet-touch" : "") + (D.retina ? " leaflet-retina" : "") + (D.ielt9 ? " leaflet-oldie" : "") + (D.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Xt(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), xt(this._mapPane, new K(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (W(t.markerPane, "leaflet-zoom-hide"), W(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, i) {
        xt(this._mapPane, new K(0, 0));
        var n = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var a = this._zoom !== e;
        this._moveStart(a, i)._move(t, e)._moveEnd(a), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, i, n) {
        e === void 0 && (e = this._zoom);
        var a = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((a || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Gt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        xt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[O(this._container)] = this;
        var e = t ? ft : Q;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), D.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Gt(this._resizeRequest), this._resizeRequest = Dt(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var i = [], n, a = e === "mouseout" || e === "mouseover", h = t.target || t.srcElement, l = !1; h; ) {
          if (n = this._targets[O(h)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
            l = !0;
            break;
          }
          if (n && n.listens(e, !0) && (a && !_n(h, t) || (i.push(n), a)) || h === this._container)
            break;
          h = h.parentNode;
        }
        return !i.length && !l && !a && this.listens(e, !0) && (i = [this]), i;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var i = t.type;
          i === "mousedown" && fn(e), this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, i) {
        if (t.type === "click") {
          var n = b({}, t);
          n.type = "preclick", this._fireDOMEvent(n, n.type, i);
        }
        var a = this._findEventTargets(t, e);
        if (i) {
          for (var h = [], l = 0; l < i.length; l++)
            i[l].listens(e, !0) && h.push(i[l]);
          a = h.concat(a);
        }
        if (a.length) {
          e === "contextmenu" && kt(t);
          var m = a[0], _ = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var w = m.getLatLng && (!m._radius || m._radius <= 10);
            _.containerPoint = w ? this.latLngToContainerPoint(m.getLatLng()) : this.mouseEventToContainerPoint(t), _.layerPoint = this.containerPointToLayerPoint(_.containerPoint), _.latlng = w ? m.getLatLng() : this.layerPointToLatLng(_.layerPoint);
          }
          for (l = 0; l < a.length; l++)
            if (a[l].fire(e, _, !0), _.originalEvent._stopped || a[l].options.bubblingMouseEvents === !1 && ee(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Ae(this._mapPane) || new K(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return i.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return Zt([
          this.project(t.getSouthWest(), e)._subtract(n),
          this.project(t.getNorthWest(), e)._subtract(n),
          this.project(t.getSouthEast(), e)._subtract(n),
          this.project(t.getNorthEast(), e)._subtract(n)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, i) {
        if (!i)
          return t;
        var n = this.project(t, e), a = this.getSize().divideBy(2), h = new gt(n.subtract(a), n.add(a)), l = this._getBoundsOffset(h, i, e);
        return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1 ? t : this.unproject(n.add(l), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var i = this.getPixelBounds(), n = new gt(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, i) {
        var n = Zt(
          this.project(e.getNorthEast(), i),
          this.project(e.getSouthWest(), i)
        ), a = n.min.subtract(t.min), h = n.max.subtract(t.max), l = this._rebound(a.x, -h.x), m = this._rebound(a.y, -h.y);
        return new K(l, m);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), i = this.getMaxZoom(), n = D.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        wt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = nt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var i = on, n = this._proxy.style[i];
          _e(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        _t(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        _e(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, i) {
        if (this._animatingZoom)
          return !0;
        if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var n = this.getZoomScale(e), a = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return i.animate !== !0 && !this.getSize().contains(a) ? !1 : (Dt(function() {
          this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, W(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(I(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && wt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function or(t, e) {
      return new $(t, e);
    }
    var qt = ie.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        x(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
        return W(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (_t(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), ei = function(t) {
      return new qt(t);
    };
    $.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = nt("div", e + "control-container", this._container);
        function n(a, h) {
          var l = e + a + " " + e + h;
          t[a + h] = nt("div", l, i);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          _t(this._controlCorners[t]);
        _t(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var sr = qt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        }
      },
      initialize: function(t, e, i) {
        x(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var n in t)
          this._addLayer(t[n], n);
        for (n in e)
          this._addLayer(e[n], n, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return qt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(O(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        W(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (W(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : wt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return wt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = nt("div", t), i = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), Yt(e), yi(e);
        var n = this._section = nt("section", t + "-list");
        i && (this._map.on("click", this.collapse, this), Q(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var a = this._layersLink = nt("a", t + "-toggle", e);
        a.href = "#", a.title = "Layers", a.setAttribute("role", "button"), Q(a, {
          keydown: function(h) {
            h.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(h) {
            kt(h), this._expandSafely();
          }
        }, this), i || this.expand(), this._baseLayersList = nt("div", t + "-base", n), this._separator = nt("div", t + "-separator", n), this._overlaysList = nt("div", t + "-overlays", n), e.appendChild(n);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && O(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }), this.options.sortLayers && this._layers.sort(I(function(n, a) {
          return this.options.sortFunction(n.layer, a.layer, n.name, a.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        pi(this._baseLayersList), pi(this._overlaysList), this._layerControlInputs = [];
        var t, e, i, n, a = 0;
        for (i = 0; i < this._layers.length; i++)
          n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, a += n.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && a > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(O(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        i && this._map.fire(i, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
        return n.innerHTML = i, n.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
        t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + O(this), i), this._layerControlInputs.push(n), n.layerId = O(t.layer), Q(n, "click", this._onInputClick, this);
        var a = document.createElement("span");
        a.innerHTML = " " + t.name;
        var h = document.createElement("span");
        e.appendChild(h), h.appendChild(n), h.appendChild(a);
        var l = t.overlay ? this._overlaysList : this._baseLayersList;
        return l.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, i, n = [], a = [];
          this._handlingClick = !0;
          for (var h = t.length - 1; h >= 0; h--)
            e = t[h], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || a.push(i);
          for (h = 0; h < a.length; h++)
            this._map.hasLayer(a[h]) && this._map.removeLayer(a[h]);
          for (h = 0; h < n.length; h++)
            this._map.hasLayer(n[h]) || this._map.addLayer(n[h]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), a = t.length - 1; a >= 0; a--)
          e = t[a], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, Q(t, "click", kt), this.expand();
        var e = this;
        setTimeout(function() {
          ft(t, "click", kt), e._preventClick = !1;
        });
      }
    }), ga = function(t, e, i) {
      return new sr(t, e, i);
    }, An = qt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", i = nt("div", e + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(
          n.zoomInText,
          n.zoomInTitle,
          e + "-in",
          i,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          n.zoomOutText,
          n.zoomOutTitle,
          e + "-out",
          i,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, i, n, a) {
        var h = nt("a", i, n);
        return h.innerHTML = t, h.href = "#", h.title = e, h.setAttribute("role", "button"), h.setAttribute("aria-label", e), Yt(h), Q(h, "click", be), Q(h, "click", a, this), Q(h, "click", this._refocusOnMap, this), h;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        wt(this._zoomInButton, e), wt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (W(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (W(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    $.mergeOptions({
      zoomControl: !0
    }), $.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new An(), this.addControl(this.zoomControl));
    });
    var _a = function(t) {
      return new An(t);
    }, hr = qt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", i = nt("div", e), n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, i) {
        t.metric && (this._mScale = nt("div", e, i)), t.imperial && (this._iScale = nt("div", e, i));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, i = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(i);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, i, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, i, n, a;
        e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (a = this._getRoundNum(e), this._updateScale(this._iScale, a + " ft", a / e));
      },
      _updateScale: function(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
        return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
      }
    }), ur = function(t) {
      return new hr(t);
    }, Aa = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', yn = qt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (D.inlineSvg ? Aa + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        x(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = nt("div", "leaflet-control-attribution"), Yt(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    $.mergeOptions({
      attributionControl: !0
    }), $.addInitHook(function() {
      this.options.attributionControl && new yn().addTo(this);
    });
    var ya = function(t) {
      return new yn(t);
    };
    qt.Layers = sr, qt.Zoom = An, qt.Scale = hr, qt.Attribution = yn, ei.layers = ga, ei.zoom = _a, ei.scale = ur, ei.attribution = ya;
    var Jt = ie.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    Jt.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var ba = { Events: Ft }, lr = D.touch ? "touchstart mousedown" : "mousedown", fe = Ce.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, i, n) {
        x(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (Q(this._dragStartTarget, lr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (fe._dragging === this && this.finishDrag(!0), ft(this._dragStartTarget, lr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !mi(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            fe._dragging === this && this.finishDrag();
            return;
          }
          if (!(fe._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (fe._dragging = this, this._preventOutline && fn(this._element), un(), Xe(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, i = dn(this._element);
            this._startPoint = new K(e.clientX, e.clientY), this._startPos = Ae(this._element), this._parentScale = Ai(i);
            var n = t.type === "mousedown";
            Q(document, n ? "mousemove" : "touchmove", this._onMove, this), Q(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new K(e.clientX, e.clientY)._subtract(this._startPoint);
          !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, kt(t), this._moved || (this.fire("dragstart"), this._moved = !0, W(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), W(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), xt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        wt(document.body, "leaflet-dragging"), this._lastTarget && (wt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ft(document, "mousemove touchmove", this._onMove, this), ft(document, "mouseup touchend touchcancel", this._onUp, this), ln(), Ye();
        var e = this._moved && this._moving;
        this._moving = !1, fe._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function cr(t, e, i) {
      var n, a = [1, 4, 2, 8], h, l, m, _, w, M, R, j;
      for (h = 0, M = t.length; h < M; h++)
        t[h]._code = we(t[h], e);
      for (m = 0; m < 4; m++) {
        for (R = a[m], n = [], h = 0, M = t.length, l = M - 1; h < M; l = h++)
          _ = t[h], w = t[l], _._code & R ? w._code & R || (j = xi(w, _, R, e, i), j._code = we(j, e), n.push(j)) : (w._code & R && (j = xi(w, _, R, e, i), j._code = we(j, e), n.push(j)), n.push(_));
        t = n;
      }
      return t;
    }
    function fr(t, e) {
      var i, n, a, h, l, m, _, w, M;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Ot(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var R = et([0, 0]), j = yt(t), Tt = j.getNorthWest().distanceTo(j.getSouthWest()) * j.getNorthEast().distanceTo(j.getNorthWest());
      Tt < 1700 && (R = bn(t));
      var Lt = t.length, Ht = [];
      for (i = 0; i < Lt; i++) {
        var It = et(t[i]);
        Ht.push(e.project(et([It.lat - R.lat, It.lng - R.lng])));
      }
      for (m = _ = w = 0, i = 0, n = Lt - 1; i < Lt; n = i++)
        a = Ht[i], h = Ht[n], l = a.y * h.x - h.y * a.x, _ += (a.x + h.x) * l, w += (a.y + h.y) * l, m += l * 3;
      m === 0 ? M = Ht[0] : M = [_ / m, w / m];
      var Ze = e.unproject(G(M));
      return et([Ze.lat + R.lat, Ze.lng + R.lng]);
    }
    function bn(t) {
      for (var e = 0, i = 0, n = 0, a = 0; a < t.length; a++) {
        var h = et(t[a]);
        e += h.lat, i += h.lng, n++;
      }
      return et([e / n, i / n]);
    }
    var dr = {
      __proto__: null,
      clipPolygon: cr,
      polygonCenter: fr,
      centroid: bn
    };
    function pr(t, e) {
      if (!e || !t.length)
        return t.slice();
      var i = e * e;
      return t = Pa(t, i), t = xa(t, i), t;
    }
    function mr(t, e, i) {
      return Math.sqrt(Be(t, e, i, !0));
    }
    function wa(t, e, i) {
      return Be(t, e, i);
    }
    function xa(t, e) {
      var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, a = new n(i);
      a[0] = a[i - 1] = 1, wi(t, a, e, 0, i - 1);
      var h, l = [];
      for (h = 0; h < i; h++)
        a[h] && l.push(t[h]);
      return l;
    }
    function wi(t, e, i, n, a) {
      var h = 0, l, m, _;
      for (m = n + 1; m <= a - 1; m++)
        _ = Be(t[m], t[n], t[a], !0), _ > h && (l = m, h = _);
      h > i && (e[l] = 1, wi(t, e, i, n, l), wi(t, e, i, l, a));
    }
    function Pa(t, e) {
      for (var i = [t[0]], n = 1, a = 0, h = t.length; n < h; n++)
        La(t[n], t[a]) > e && (i.push(t[n]), a = n);
      return a < h - 1 && i.push(t[h - 1]), i;
    }
    var vr;
    function gr(t, e, i, n, a) {
      var h = n ? vr : we(t, i), l = we(e, i), m, _, w;
      for (vr = l; ; ) {
        if (!(h | l))
          return [t, e];
        if (h & l)
          return !1;
        m = h || l, _ = xi(t, e, m, i, a), w = we(_, i), m === h ? (t = _, h = w) : (e = _, l = w);
      }
    }
    function xi(t, e, i, n, a) {
      var h = e.x - t.x, l = e.y - t.y, m = n.min, _ = n.max, w, M;
      return i & 8 ? (w = t.x + h * (_.y - t.y) / l, M = _.y) : i & 4 ? (w = t.x + h * (m.y - t.y) / l, M = m.y) : i & 2 ? (w = _.x, M = t.y + l * (_.x - t.x) / h) : i & 1 && (w = m.x, M = t.y + l * (m.x - t.x) / h), new K(w, M, a);
    }
    function we(t, e) {
      var i = 0;
      return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
    }
    function La(t, e) {
      var i = e.x - t.x, n = e.y - t.y;
      return i * i + n * n;
    }
    function Be(t, e, i, n) {
      var a = e.x, h = e.y, l = i.x - a, m = i.y - h, _ = l * l + m * m, w;
      return _ > 0 && (w = ((t.x - a) * l + (t.y - h) * m) / _, w > 1 ? (a = i.x, h = i.y) : w > 0 && (a += l * w, h += m * w)), l = t.x - a, m = t.y - h, n ? l * l + m * m : new K(a, h);
    }
    function Ot(t) {
      return !Qt(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Pi(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ot(t);
    }
    function wn(t, e) {
      var i, n, a, h, l, m, _, w;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Ot(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var M = et([0, 0]), R = yt(t), j = R.getNorthWest().distanceTo(R.getSouthWest()) * R.getNorthEast().distanceTo(R.getNorthWest());
      j < 1700 && (M = bn(t));
      var Tt = t.length, Lt = [];
      for (i = 0; i < Tt; i++) {
        var Ht = et(t[i]);
        Lt.push(e.project(et([Ht.lat - M.lat, Ht.lng - M.lng])));
      }
      for (i = 0, n = 0; i < Tt - 1; i++)
        n += Lt[i].distanceTo(Lt[i + 1]) / 2;
      if (n === 0)
        w = Lt[0];
      else
        for (i = 0, h = 0; i < Tt - 1; i++)
          if (l = Lt[i], m = Lt[i + 1], a = l.distanceTo(m), h += a, h > n) {
            _ = (h - n) / a, w = [
              m.x - _ * (m.x - l.x),
              m.y - _ * (m.y - l.y)
            ];
            break;
          }
      var It = e.unproject(G(w));
      return et([It.lat + M.lat, It.lng + M.lng]);
    }
    var Ca = {
      __proto__: null,
      simplify: pr,
      pointToSegmentDistance: mr,
      closestPointOnSegment: wa,
      clipSegment: gr,
      _getEdgeIntersection: xi,
      _getBitCode: we,
      _sqClosestPointOnSegment: Be,
      isFlat: Ot,
      _flat: Pi,
      polylineCenter: wn
    }, Li = {
      project: function(t) {
        return new K(t.lng, t.lat);
      },
      unproject: function(t) {
        return new ht(t.y, t.x);
      },
      bounds: new gt([-180, -90], [180, 90])
    }, xn = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new gt([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, i = this.R, n = t.lat * e, a = this.R_MINOR / i, h = Math.sqrt(1 - a * a), l = h * Math.sin(n), m = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - l) / (1 + l), h / 2);
        return n = -i * Math.log(Math.max(m, 1e-10)), new K(t.lng * e * i, n);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, a = Math.sqrt(1 - n * n), h = Math.exp(-t.y / i), l = Math.PI / 2 - 2 * Math.atan(h), m = 0, _ = 0.1, w; m < 15 && Math.abs(_) > 1e-7; m++)
          w = a * Math.sin(l), w = Math.pow((1 - w) / (1 + w), a / 2), _ = Math.PI / 2 - 2 * Math.atan(h * w) - l, l += _;
        return new ht(l * e, t.x * e / i);
      }
    }, _r = {
      __proto__: null,
      LonLat: Li,
      Mercator: xn,
      SphericalMercator: Qi
    }, Ea = b({}, ce, {
      code: "EPSG:3395",
      projection: xn,
      transformation: function() {
        var t = 0.5 / (Math.PI * xn.R);
        return Ve(t, 0.5, -t, 0.5);
      }()
    }), Se = b({}, ce, {
      code: "EPSG:4326",
      projection: Li,
      transformation: Ve(1 / 180, 1, -1 / 180, 0.5)
    }), ka = b({}, ne, {
      projection: Li,
      transformation: Ve(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var i = e.lng - t.lng, n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      },
      infinite: !0
    });
    ne.Earth = ce, ne.EPSG3395 = Ea, ne.EPSG3857 = Ki, ne.EPSG900913 = Vi, ne.EPSG4326 = Se, ne.Simple = ka;
    var Wt = Ce.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[O(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[O(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var i = this.getEvents();
            e.on(i, this), this.once("remove", function() {
              e.off(i, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    $.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = O(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = O(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return O(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? Qt(t) ? t : [t] : [];
        for (var e = 0, i = t.length; e < i; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[O(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = O(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var a = this._zoomBoundLayers[n].options;
          t = a.minZoom === void 0 ? t : Math.min(t, a.minZoom), e = a.maxZoom === void 0 ? e : Math.max(e, a.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Oe = Wt.extend({
      initialize: function(t, e) {
        x(this, e), this._layers = {};
        var i, n;
        if (t)
          for (i = 0, n = t.length; i < n; i++)
            this.addLayer(t[i]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i, n;
        for (i in this._layers)
          n = this._layers[i], n[t] && n[t].apply(n, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return O(t);
      }
    }), Ta = function(t, e) {
      return new Oe(t, e);
    }, re = Oe.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Oe.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Oe.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new Rt();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      }
    }), Ia = function(t, e) {
      return new re(t, e);
    }, ze = ie.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        x(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
      },
      _setIconStyles: function(t, e) {
        var i = this.options, n = i[e + "Size"];
        typeof n == "number" && (n = [n, n]);
        var a = G(n), h = G(e === "shadow" && i.shadowAnchor || i.iconAnchor || a && a.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), h && (t.style.marginLeft = -h.x + "px", t.style.marginTop = -h.y + "px"), a && (t.style.width = a.x + "px", t.style.height = a.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return D.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function Ma(t) {
      return new ze(t);
    }
    var ii = ze.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof ii.imagePath != "string" && (ii.imagePath = this._detectIconPath()), (this.options.imagePath || ii.imagePath) + ze.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(i, n, a) {
          var h = n.exec(i);
          return h && h[a];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = nt("div", "leaflet-default-icon-path", document.body), e = Xt(t, "background-image") || Xt(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var i = document.querySelector('link[href$="leaflet.css"]');
        return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
      }
    }), Pn = Jt.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new fe(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), W(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && wt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, a = this._marker.options.autoPanPadding, h = Ae(e._icon), l = i.getPixelBounds(), m = i.getPixelOrigin(), _ = Zt(
          l.min._subtract(m).add(a),
          l.max._subtract(m).subtract(a)
        );
        if (!_.contains(h)) {
          var w = G(
            (Math.max(_.max.x, h.x) - _.max.x) / (l.max.x - _.max.x) - (Math.min(_.min.x, h.x) - _.min.x) / (l.min.x - _.min.x),
            (Math.max(_.max.y, h.y) - _.max.y) / (l.max.y - _.max.y) - (Math.min(_.min.y, h.y) - _.min.y) / (l.min.y - _.min.y)
          ).multiplyBy(n);
          i.panBy(w, { animate: !1 }), this._draggable._newPos._add(w), this._draggable._startPos._add(w), xt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = Dt(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (Gt(this._panRequest), this._panRequest = Dt(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, i = e._shadow, n = Ae(e._icon), a = e._map.layerPointToLatLng(n);
        i && xt(i, n), e._latlng = a, t.latlng = a, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        Gt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), ni = Wt.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new ii(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        x(this, e), this._latlng = et(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = et(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
        i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), W(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Q(i, "focus", this._panOnFocus, this);
        var a = t.icon.createShadow(this._shadow), h = !1;
        a !== this._shadow && (this._removeShadow(), h = !0), a && (W(a, e), a.alt = ""), this._shadow = a, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), a && h && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && ft(this._icon, "focus", this._panOnFocus, this), _t(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && _t(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && xt(this._icon, t), this._shadow && xt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (W(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Pn)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Pn(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && Kt(this._icon, t), this._shadow && Kt(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, i = e.iconSize ? G(e.iconSize) : G(0, 0), n = e.iconAnchor ? G(e.iconAnchor) : G(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: n,
            paddingBottomRight: i.subtract(n)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function Ba(t, e) {
      return new ni(t, e);
    }
    var de = Wt.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return x(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), Ci = de.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        x(this, e), this._latlng = et(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = et(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return de.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
        this._pxBounds = new gt(this._point.subtract(n), this._point.add(n));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Ln(t, e) {
      return new Ci(t, e);
    }
    var Ei = Ci.extend({
      initialize: function(t, e, i) {
        if (typeof e == "number" && (e = b({}, i, { radius: e })), x(this, e), this._latlng = et(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new Rt(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: de.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
        if (n.distance === ce.distance) {
          var a = Math.PI / 180, h = this._mRadius / ce.R / a, l = i.project([e + h, t]), m = i.project([e - h, t]), _ = l.add(m).divideBy(2), w = i.unproject(_).lat, M = Math.acos((Math.cos(h * a) - Math.sin(e * a) * Math.sin(w * a)) / (Math.cos(e * a) * Math.cos(w * a))) / a;
          (isNaN(M) || M === 0) && (M = h / Math.cos(Math.PI / 180 * e)), this._point = _.subtract(i.getPixelOrigin()), this._radius = isNaN(M) ? 0 : _.x - i.project([w, t - M]).x, this._radiusY = _.y - l.y;
        } else {
          var R = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(R).x;
        }
        this._updateBounds();
      }
    });
    function Ar(t, e, i) {
      return new Ei(t, e, i);
    }
    var $t = de.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        x(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, i = null, n = Be, a, h, l = 0, m = this._parts.length; l < m; l++)
          for (var _ = this._parts[l], w = 1, M = _.length; w < M; w++) {
            a = _[w - 1], h = _[w];
            var R = n(t, a, h, !0);
            R < e && (e = R, i = n(t, a, h));
          }
        return i && (i.distance = Math.sqrt(e)), i;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return wn(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = et(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new Rt(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Ot(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], i = Ot(t), n = 0, a = t.length; n < a; n++)
          i ? (e[n] = et(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
        return e;
      },
      _project: function() {
        var t = new gt();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new K(t, t);
        this._rawPxBounds && (this._pxBounds = new gt([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, i) {
        var n = t[0] instanceof ht, a = t.length, h, l;
        if (n) {
          for (l = [], h = 0; h < a; h++)
            l[h] = this._map.latLngToLayerPoint(t[h]), i.extend(l[h]);
          e.push(l);
        } else
          for (h = 0; h < a; h++)
            this._projectLatlngs(t[h], e, i);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, i, n, a, h, l, m, _;
          for (i = 0, a = 0, h = this._rings.length; i < h; i++)
            for (_ = this._rings[i], n = 0, l = _.length; n < l - 1; n++)
              m = gr(_[n], _[n + 1], t, n, !0), m && (e[a] = e[a] || [], e[a].push(m[0]), (m[1] !== _[n + 1] || n === l - 2) && (e[a].push(m[1]), a++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
          t[i] = pr(t[i], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var i, n, a, h, l, m, _ = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (i = 0, h = this._parts.length; i < h; i++)
          for (m = this._parts[i], n = 0, l = m.length, a = l - 1; n < l; a = n++)
            if (!(!e && n === 0) && mr(t, m[a], m[n]) <= _)
              return !0;
        return !1;
      }
    });
    function yr(t, e) {
      return new $t(t, e);
    }
    $t._flat = Pi;
    var ae = $t.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return fr(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = $t.prototype._convertLatLngs.call(this, t), i = e.length;
        return i >= 2 && e[0] instanceof ht && e[0].equals(e[i - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        $t.prototype._setLatLngs.call(this, t), Ot(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Ot(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, i = new K(e, e);
        if (t = new gt(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, a = this._rings.length, h; n < a; n++)
            h = cr(this._rings[n], t, !0), h.length && this._parts.push(h);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, i, n, a, h, l, m, _, w;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (h = 0, _ = this._parts.length; h < _; h++)
          for (i = this._parts[h], l = 0, w = i.length, m = w - 1; l < w; m = l++)
            n = i[l], a = i[m], n.y > t.y != a.y > t.y && t.x < (a.x - n.x) * (t.y - n.y) / (a.y - n.y) + n.x && (e = !e);
        return e || $t.prototype._containsPoint.call(this, t, !0);
      }
    });
    function Sa(t, e) {
      return new ae(t, e);
    }
    var te = re.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        x(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = Qt(t) ? t : t.features, i, n, a;
        if (e) {
          for (i = 0, n = e.length; i < n; i++)
            a = e[i], (a.geometries || a.geometry || a.features || a.coordinates) && this.addData(a);
          return this;
        }
        var h = this.options;
        if (h.filter && !h.filter(t))
          return this;
        var l = ki(t, h);
        return l ? (l.feature = De(t), l.defaultOptions = l.options, this.resetStyle(l), h.onEachFeature && h.onEachFeature(t, l), this.addLayer(l)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = b({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function ki(t, e) {
      var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, a = [], h = e && e.pointToLayer, l = e && e.coordsToLatLng || Cn, m, _, w, M;
      if (!n && !i)
        return null;
      switch (i.type) {
        case "Point":
          return m = l(n), br(h, t, m, e);
        case "MultiPoint":
          for (w = 0, M = n.length; w < M; w++)
            m = l(n[w]), a.push(br(h, t, m, e));
          return new re(a);
        case "LineString":
        case "MultiLineString":
          return _ = Ti(n, i.type === "LineString" ? 0 : 1, l), new $t(_, e);
        case "Polygon":
        case "MultiPolygon":
          return _ = Ti(n, i.type === "Polygon" ? 1 : 2, l), new ae(_, e);
        case "GeometryCollection":
          for (w = 0, M = i.geometries.length; w < M; w++) {
            var R = ki({
              geometry: i.geometries[w],
              type: "Feature",
              properties: t.properties
            }, e);
            R && a.push(R);
          }
          return new re(a);
        case "FeatureCollection":
          for (w = 0, M = i.features.length; w < M; w++) {
            var j = ki(i.features[w], e);
            j && a.push(j);
          }
          return new re(a);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function br(t, e, i, n) {
      return t ? t(e, i) : new ni(i, n && n.markersInheritOptions && n);
    }
    function Cn(t) {
      return new ht(t[1], t[0], t[2]);
    }
    function Ti(t, e, i) {
      for (var n = [], a = 0, h = t.length, l; a < h; a++)
        l = e ? Ti(t[a], e - 1, i) : (i || Cn)(t[a]), n.push(l);
      return n;
    }
    function En(t, e) {
      return t = et(t), t.alt !== void 0 ? [V(t.lng, e), V(t.lat, e), V(t.alt, e)] : [V(t.lng, e), V(t.lat, e)];
    }
    function Ne(t, e, i, n) {
      for (var a = [], h = 0, l = t.length; h < l; h++)
        a.push(e ? Ne(t[h], Ot(t[h]) ? 0 : e - 1, i, n) : En(t[h], n));
      return !e && i && a.length > 0 && a.push(a[0].slice()), a;
    }
    function oe(t, e) {
      return t.feature ? b({}, t.feature, { geometry: e }) : De(e);
    }
    function De(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var kn = {
      toGeoJSON: function(t) {
        return oe(this, {
          type: "Point",
          coordinates: En(this.getLatLng(), t)
        });
      }
    };
    ni.include(kn), Ei.include(kn), Ci.include(kn), $t.include({
      toGeoJSON: function(t) {
        var e = !Ot(this._latlngs), i = Ne(this._latlngs, e ? 1 : 0, !1, t);
        return oe(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: i
        });
      }
    }), ae.include({
      toGeoJSON: function(t) {
        var e = !Ot(this._latlngs), i = e && !Ot(this._latlngs[0]), n = Ne(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return e || (n = [n]), oe(this, {
          type: (i ? "Multi" : "") + "Polygon",
          coordinates: n
        });
      }
    }), Oe.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(i) {
          e.push(i.toGeoJSON(t).geometry.coordinates);
        }), oe(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var i = e === "GeometryCollection", n = [];
        return this.eachLayer(function(a) {
          if (a.toGeoJSON) {
            var h = a.toGeoJSON(t);
            if (i)
              n.push(h.geometry);
            else {
              var l = De(h);
              l.type === "FeatureCollection" ? n.push.apply(n, l.features) : n.push(l);
            }
          }
        }), i ? oe(this, {
          geometries: n,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: n
        };
      }
    });
    function wr(t, e) {
      return new te(t, e);
    }
    var Tn = wr, Ii = Wt.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, i) {
        this._url = t, this._bounds = yt(e), x(this, i);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (W(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        _t(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Ie(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Me(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = yt(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : nt("img");
        if (W(e, "leaflet-image-layer"), this._zoomAnimated && W(e, "leaflet-zoom-animated"), this.options.className && W(e, this.options.className), e.onselectstart = Z, e.onmousemove = Z, e.onload = I(this.fire, this, "load"), e.onerror = I(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        _e(this._image, i, e);
      },
      _reset: function() {
        var t = this._image, e = new gt(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), i = e.getSize();
        xt(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _updateOpacity: function() {
        Kt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), Oa = function(t, e, i) {
      return new Ii(t, e, i);
    }, xr = Ii.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : nt("video");
        if (W(e, "leaflet-image-layer"), this._zoomAnimated && W(e, "leaflet-zoom-animated"), this.options.className && W(e, this.options.className), e.onselectstart = Z, e.onmousemove = Z, e.onloadeddata = I(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], a = 0; a < i.length; a++)
            n.push(i[a].src);
          this._url = i.length > 0 ? n : [e.src];
          return;
        }
        Qt(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var h = 0; h < this._url.length; h++) {
          var l = nt("source");
          l.src = this._url[h], e.appendChild(l);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Pr(t, e, i) {
      return new xr(t, e, i);
    }
    var Mi = Ii.extend({
      _initImage: function() {
        var t = this._image = this._url;
        W(t, "leaflet-image-layer"), this._zoomAnimated && W(t, "leaflet-zoom-animated"), this.options.className && W(t, this.options.className), t.onselectstart = Z, t.onmousemove = Z;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function za(t, e, i) {
      return new Mi(t, e, i);
    }
    var Ut = Wt.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof ht || Qt(t)) ? (this._latlng = et(t), x(this, e)) : (x(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Kt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Kt(this._container, 1), this.bringToFront(), this.options.interactive && (W(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (Kt(this._container, 0), this._removeTimeout = setTimeout(I(_t, void 0, this._container), 200)) : _t(this._container), this.options.interactive && (wt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = et(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Ie(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Me(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof re) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = G(this.options.offset), i = this._getAnchor();
          this._zoomAnimated ? xt(this._container, t.add(i)) : e = e.add(t).add(i);
          var n = this._containerBottom = -e.y, a = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = n + "px", this._container.style.left = a + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    $.include({
      _initOverlay: function(t, e, i, n) {
        var a = e;
        return a instanceof t || (a = new t(n).setContent(e)), i && a.setLatLng(i), a;
      }
    }), Wt.include({
      _initOverlay: function(t, e, i, n) {
        var a = i;
        return a instanceof t ? (x(a, n), a._source = this) : (a = e && !n ? e : new t(n, this), a.setContent(i)), a;
      }
    });
    var Bi = Ut.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Ut.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        Ut.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof de || this._source.on("preclick", ye));
      },
      onRemove: function(t) {
        Ut.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof de || this._source.off("preclick", ye));
      },
      getEvents: function() {
        var t = Ut.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = nt(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), i = this._wrapper = nt("div", t + "-content-wrapper", e);
        if (this._contentNode = nt("div", t + "-content", i), Yt(e), yi(this._contentNode), Q(e, "contextmenu", ye), this._tipContainer = nt("div", t + "-tip-container", e), this._tip = nt("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var n = this._closeButton = nt("a", t + "-close-button", e);
          n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', Q(n, "click", function(a) {
            kt(a), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
        var n = t.offsetHeight, a = this.options.maxHeight, h = "leaflet-popup-scrolled";
        a && n > a ? (e.height = a + "px", W(t, h)) : wt(t, h), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
        xt(this._container, e.add(i));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(Xt(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, a = new K(this._containerLeft, -i - this._containerBottom);
          a._add(Ae(this._container));
          var h = t.layerPointToContainerPoint(a), l = G(this.options.autoPanPadding), m = G(this.options.autoPanPaddingTopLeft || l), _ = G(this.options.autoPanPaddingBottomRight || l), w = t.getSize(), M = 0, R = 0;
          h.x + n + _.x > w.x && (M = h.x + n - w.x + _.x), h.x - M - m.x < 0 && (M = h.x - m.x), h.y + i + _.y > w.y && (R = h.y + i - w.y + _.y), h.y - R - m.y < 0 && (R = h.y - m.y), (M || R) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([M, R]));
        }
      },
      _getAnchor: function() {
        return G(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Na = function(t, e) {
      return new Bi(t, e);
    };
    $.mergeOptions({
      closePopupOnClick: !0
    }), $.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, i) {
        return this._initOverlay(Bi, t, e, i).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), Wt.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(Bi, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof re || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          be(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof de)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var ri = Ut.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        Ut.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        Ut.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = Ut.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = nt("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + O(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, i, n = this._map, a = this._container, h = n.latLngToContainerPoint(n.getCenter()), l = n.layerPointToContainerPoint(t), m = this.options.direction, _ = a.offsetWidth, w = a.offsetHeight, M = G(this.options.offset), R = this._getAnchor();
        m === "top" ? (e = _ / 2, i = w) : m === "bottom" ? (e = _ / 2, i = 0) : m === "center" ? (e = _ / 2, i = w / 2) : m === "right" ? (e = 0, i = w / 2) : m === "left" ? (e = _, i = w / 2) : l.x < h.x ? (m = "right", e = 0, i = w / 2) : (m = "left", e = _ + (M.x + R.x) * 2, i = w / 2), t = t.subtract(G(e, i, !0)).add(M).add(R), wt(a, "leaflet-tooltip-right"), wt(a, "leaflet-tooltip-left"), wt(a, "leaflet-tooltip-top"), wt(a, "leaflet-tooltip-bottom"), W(a, "leaflet-tooltip-" + m), xt(a, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && Kt(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return G(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), In = function(t, e) {
      return new ri(t, e);
    };
    $.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, i) {
        return this._initOverlay(ri, t, e, i).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), Wt.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ri, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", i = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof re || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (Q(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), Q(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, i, n;
        this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
      }
    });
    var Lr = ze.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
        if (i.html instanceof Element ? (pi(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
          var n = G(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function Da(t) {
      return new Lr(t);
    }
    ze.Default = ii;
    var ai = Wt.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: D.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        x(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), _t(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Ie(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Me(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = F(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof K ? t : new K(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, a = e.length, h; n < a; n++)
          h = e[n].style.zIndex, e[n] !== this._container && h && (i = t(i, +h));
        isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !D.ielt9) {
          Kt(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
          for (var n in this._tiles) {
            var a = this._tiles[n];
            if (!(!a.current || !a.loaded)) {
              var h = Math.min(1, (t - a.loaded) / 200);
              Kt(a.el, h), h < 1 ? e = !0 : (a.active ? i = !0 : this._onOpaqueTile(a), a.active = !0);
            }
          }
          i && !this._noPrune && this._pruneTiles(), e && (Gt(this._fadeFrame), this._fadeFrame = Dt(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: Z,
      _initContainer: function() {
        this._container || (this._container = nt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels)
            i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (_t(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
          var n = this._levels[t], a = this._map;
          return n || (n = this._levels[t] = {}, n.el = nt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = a.project(a.unproject(a.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, a.getCenter(), a.getZoom()), Z(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
        }
      },
      _onUpdateLevel: Z,
      _onRemoveLevel: Z,
      _onCreateLevel: Z,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          _t(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, i, n) {
        var a = Math.floor(t / 2), h = Math.floor(e / 2), l = i - 1, m = new K(+a, +h);
        m.z = +l;
        var _ = this._tileCoordsToKey(m), w = this._tiles[_];
        return w && w.active ? (w.retain = !0, !0) : (w && w.loaded && (w.retain = !0), l > n ? this._retainParent(a, h, l, n) : !1);
      },
      _retainChildren: function(t, e, i, n) {
        for (var a = 2 * t; a < 2 * t + 2; a++)
          for (var h = 2 * e; h < 2 * e + 2; h++) {
            var l = new K(a, h);
            l.z = i + 1;
            var m = this._tileCoordsToKey(l), _ = this._tiles[m];
            if (_ && _.active) {
              _.retain = !0;
              continue;
            } else
              _ && _.loaded && (_.retain = !0);
            i + 1 < n && this._retainChildren(a, h, i + 1, n);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, i, n) {
        var a = Math.round(e);
        this.options.maxZoom !== void 0 && a > this.options.maxZoom || this.options.minZoom !== void 0 && a < this.options.minZoom ? a = void 0 : a = this._clampZoom(a);
        var h = this.options.updateWhenZooming && a !== this._tileZoom;
        (!n || h) && (this._tileZoom = a, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), a !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function(t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom), a = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
        D.any3d ? _e(t.el, a, n) : xt(t.el, a);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, a = this._map.getPixelWorldBounds(this._tileZoom);
        a && (this._globalTileRange = this._pxBoundsToTileRange(a)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
          Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
          Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), a = e.project(t, this._tileZoom).floor(), h = e.getSize().divideBy(n * 2);
        return new gt(a.subtract(h), a.add(h));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var n = this._getTiledPixelBounds(t), a = this._pxBoundsToTileRange(n), h = a.getCenter(), l = [], m = this.options.keepBuffer, _ = new gt(
              a.getBottomLeft().subtract([m, -m]),
              a.getTopRight().add([m, -m])
            );
            if (!(isFinite(a.min.x) && isFinite(a.min.y) && isFinite(a.max.x) && isFinite(a.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var w in this._tiles) {
              var M = this._tiles[w].coords;
              (M.z !== this._tileZoom || !_.contains(new K(M.x, M.y))) && (this._tiles[w].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var R = a.min.y; R <= a.max.y; R++)
              for (var j = a.min.x; j <= a.max.x; j++) {
                var Tt = new K(j, R);
                if (Tt.z = this._tileZoom, !!this._isValidTile(Tt)) {
                  var Lt = this._tiles[this._tileCoordsToKey(Tt)];
                  Lt ? Lt.current = !0 : l.push(Tt);
                }
              }
            if (l.sort(function(It, Ze) {
              return It.distanceTo(h) - Ze.distanceTo(h);
            }), l.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Ht = document.createDocumentFragment();
              for (j = 0; j < l.length; j++)
                this._addTile(l[j], Ht);
              this._level.el.appendChild(Ht);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var n = this._tileCoordsToBounds(t);
        return yt(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), a = n.add(i), h = e.unproject(n, t.z), l = e.unproject(a, t.z);
        return [h, l];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), i = new Rt(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), i = new K(+e[0], +e[1]);
        return i.z = +e[2], i;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (_t(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        W(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = Z, t.onmousemove = Z, D.ielt9 && this.options.opacity < 1 && Kt(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), a = this.createTile(this._wrapCoords(t), I(this._tileReady, this, t));
        this._initTile(a), this.createTile.length < 2 && Dt(I(this._tileReady, this, t, null, a)), xt(a, i), this._tiles[n] = {
          el: a,
          coords: t,
          current: !0
        }, e.appendChild(a), this.fire("tileloadstart", {
          tile: a,
          coords: t
        });
      },
      _tileReady: function(t, e, i) {
        e && this.fire("tileerror", {
          error: e,
          tile: i,
          coords: t
        });
        var n = this._tileCoordsToKey(t);
        i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Kt(i.el, 0), Gt(this._fadeFrame), this._fadeFrame = Dt(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (W(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: i.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), D.ielt9 || !this._map._fadeAnimated ? Dt(this._pruneTiles, this) : setTimeout(I(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new K(
          this._wrapX ? st(t.x, this._wrapX) : t.x,
          this._wrapY ? st(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new gt(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function Cr(t) {
      return new ai(t);
    }
    var xe = ai.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = x(this, e), e.detectRetina && D.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var i = document.createElement("img");
        return Q(i, "load", I(this._tileOnLoad, this, e, i)), Q(i, "error", I(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: D.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), e["-y"] = i;
        }
        return Nn(this._url, b(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        D.ielt9 ? setTimeout(I(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = Z, e.onerror = Z, !e.complete)) {
            e.src = Ge;
            var i = this._tiles[t].coords;
            _t(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: i
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", Ge), ai.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, i) {
        if (!(!this._map || i && i.getAttribute("src") === Ge))
          return ai.prototype._tileReady.call(this, t, e, i);
      }
    });
    function Er(t, e) {
      return new xe(t, e);
    }
    var kr = xe.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var i = b({}, this.defaultWmsParams);
        for (var n in e)
          n in this.options || (i[n] = e[n]);
        e = x(this, e);
        var a = e.detectRetina && D.retina ? 2 : 1, h = this.getTileSize();
        i.width = h.x * a, i.height = h.y * a, this.wmsParams = i;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, xe.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), i = this._crs, n = Zt(i.project(e[0]), i.project(e[1])), a = n.min, h = n.max, l = (this._wmsVersion >= 1.3 && this._crs === Se ? [a.y, a.x, h.y, h.x] : [a.x, a.y, h.x, h.y]).join(","), m = xe.prototype.getTileUrl.call(this, t);
        return m + Pt(this.wmsParams, m, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + l;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return b(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function Za(t, e) {
      return new kr(t, e);
    }
    xe.WMS = kr, Er.wms = Za;
    var se = Wt.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        x(this, t), O(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), W(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), a = this._map.project(this._center, e), h = n.multiplyBy(-i).add(a).subtract(this._map._getNewPixelOrigin(t, e));
        D.any3d ? _e(this._container, h, i) : xt(this._container, h);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new gt(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Tr = se.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = se.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        se.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        Q(t, "mousemove", this._onMouseMove, this), Q(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Q(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        Gt(this._redrawRequest), delete this._ctx, _t(this._container), ft(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          se.prototype._update.call(this);
          var t = this._bounds, e = this._container, i = t.getSize(), n = D.retina ? 2 : 1;
          xt(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", D.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        se.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[O(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, i = e.next, n = e.prev;
        i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[O(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), i = [], n, a;
          for (a = 0; a < e.length; a++) {
            if (n = Number(e[a]), isNaN(n))
              return;
            i.push(n);
          }
          t.options._dashArray = i;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || Dt(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new gt(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var i = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var i, n, a, h, l = t._parts, m = l.length, _ = this._ctx;
          if (m) {
            for (_.beginPath(), i = 0; i < m; i++) {
              for (n = 0, a = l[i].length; n < a; n++)
                h = l[i][n], _[n ? "lineTo" : "moveTo"](h.x, h.y);
              e && _.closePath();
            }
            this._fillStroke(_, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), a = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          a !== 1 && (i.save(), i.scale(1, a)), i.beginPath(), i.arc(e.x, e.y / a, n, 0, Math.PI * 2, !1), a !== 1 && i.restore(), this._fillStroke(i, t);
        }
      },
      _fillStroke: function(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), i, n, a = this._drawFirst; a; a = a.next)
          i = a.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
        this._fireEvent(n ? [n] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (wt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, a = this._drawFirst; a; a = a.next)
            i = a.layer, i.options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (W(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(I(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (i)
            i.prev = n;
          else
            return;
          n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (n)
            n.next = i;
          else
            return;
          i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function Ir(t) {
      return D.canvas ? new Tr(t) : null;
    }
    var oi = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Ra = {
      _initContainer: function() {
        this._container = nt("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (se.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = oi("shape");
        W(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = oi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[O(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        _t(e), t.removeInteractiveTarget(e), delete this._layers[O(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, i = t._fill, n = t.options, a = t._container;
        a.stroked = !!n.stroke, a.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = oi("stroke")), a.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = Qt(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (a.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = oi("fill")), a.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (a.removeChild(i), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        Ie(t._container);
      },
      _bringToBack: function(t) {
        Me(t._container);
      }
    }, Si = D.vml ? oi : Zn, si = se.extend({
      _initContainer: function() {
        this._container = Si("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Si("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        _t(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          se.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), i = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), xt(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Si("path");
        t.options.className && W(e, t.options.className), t.options.interactive && W(e, "leaflet-interactive"), this._updateStyle(t), this._layers[O(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        _t(t._path), t.removeInteractiveTarget(t._path), delete this._layers[O(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, i = t.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, Rn(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, a = "a" + i + "," + n + " 0 1,0 ", h = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + a + i * 2 + ",0 " + a + -i * 2 + ",0 ";
        this._setPath(t, h);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        Ie(t._path);
      },
      _bringToBack: function(t) {
        Me(t._path);
      }
    });
    D.vml && si.include(Ra);
    function Mr(t) {
      return D.svg || D.vml ? new si(t) : null;
    }
    $.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && Ir(t) || Mr(t);
      }
    });
    var Br = ae.extend({
      initialize: function(t, e) {
        ae.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = yt(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function Fa(t, e) {
      return new Br(t, e);
    }
    si.create = Si, si.pointsToPath = Rn, te.geometryToLayer = ki, te.coordsToLatLng = Cn, te.coordsToLatLngs = Ti, te.latLngToCoords = En, te.latLngsToCoords = Ne, te.getFeature = oe, te.asFeature = De, $.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Sr = Jt.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        Q(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        ft(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        _t(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Xe(), un(), this._startPoint = this._map.mouseEventToContainerPoint(t), Q(document, {
          contextmenu: be,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = nt("div", "leaflet-zoom-box", this._container), W(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new gt(this._point, this._startPoint), i = e.getSize();
        xt(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
      },
      _finish: function() {
        this._moved && (_t(this._box), wt(this._container, "leaflet-crosshair")), Ye(), ln(), ft(document, {
          contextmenu: be,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(I(this._resetState, this), 0);
          var e = new Rt(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    $.addInitHook("addHandler", "boxZoom", Sr), $.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Mn = Jt.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, a = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center" ? e.setZoom(a) : e.setZoomAround(t.containerPoint, a);
      }
    });
    $.addInitHook("addHandler", "doubleClickZoom", Mn), $.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var Bn = Jt.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new fe(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        W(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        wt(this._map._container, "leaflet-grab"), wt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = yt(this._map.options.maxBounds);
          this._offsetLimit = Zt(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, a = (n - e + i) % t + e - i, h = (n + e + i) % t - e - i, l = Math.abs(a + i) < Math.abs(h + i) ? a : h;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = l;
      },
      _onDragEnd: function(t) {
        var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), n)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var a = this._lastPos.subtract(this._positions[0]), h = (this._lastTime - this._times[0]) / 1e3, l = i.easeLinearity, m = a.multiplyBy(l / h), _ = m.distanceTo([0, 0]), w = Math.min(i.inertiaMaxSpeed, _), M = m.multiplyBy(w / _), R = w / (i.inertiaDeceleration * l), j = M.multiplyBy(-R / 2).round();
          !j.x && !j.y ? e.fire("moveend") : (j = e._limitOffset(j, e.options.maxBounds), Dt(function() {
            e.panBy(j, {
              duration: R,
              easeLinearity: l,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    $.addInitHook("addHandler", "dragging", Bn), $.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Or = Jt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), Q(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), ft(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, i = this.keyCodes, n, a;
        for (n = 0, a = i.left.length; n < a; n++)
          e[i.left[n]] = [-1 * t, 0];
        for (n = 0, a = i.right.length; n < a; n++)
          e[i.right[n]] = [t, 0];
        for (n = 0, a = i.down.length; n < a; n++)
          e[i.down[n]] = [0, t];
        for (n = 0, a = i.up.length; n < a; n++)
          e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, i = this.keyCodes, n, a;
        for (n = 0, a = i.zoomIn.length; n < a; n++)
          e[i.zoomIn[n]] = t;
        for (n = 0, a = i.zoomOut.length; n < a; n++)
          e[i.zoomOut[n]] = -t;
      },
      _addHooks: function() {
        Q(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        ft(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, i = this._map, n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress)
              if (n = this._panKeys[e], t.shiftKey && (n = G(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(G(n), i.options.maxBounds)), i.options.worldCopyJump) {
                var a = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                i.panTo(a);
              } else
                i.panBy(n);
          } else if (e in this._zoomKeys)
            i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
            i.closePopup();
          else
            return;
          be(t);
        }
      }
    });
    $.addInitHook("addHandler", "keyboard", Or), $.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var Sn = Jt.extend({
      addHooks: function() {
        Q(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        ft(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = gn(t), i = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(I(this._performZoom, this), n), be(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), a = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, h = i ? Math.ceil(a / i) * i : a, l = t._limitZoom(e + (this._delta > 0 ? h : -h)) - e;
        this._delta = 0, this._startTime = null, l && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + l) : t.setZoomAround(this._lastMousePos, e + l));
      }
    });
    $.addInitHook("addHandler", "scrollWheelZoom", Sn);
    var Ua = 600;
    $.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: D.touchNative && D.safari && D.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var zr = Jt.extend({
      addHooks: function() {
        Q(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        ft(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new K(e.clientX, e.clientY), this._holdTimeout = setTimeout(I(function() {
            this._cancel(), this._isTapValid() && (Q(document, "touchend", kt), Q(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), Ua), Q(document, "touchend touchcancel contextmenu", this._cancel, this), Q(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        ft(document, "touchend", kt), ft(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), ft(document, "touchend touchcancel contextmenu", this._cancel, this), ft(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new K(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        i._simulated = !0, e.target.dispatchEvent(i);
      }
    });
    $.addInitHook("addHandler", "tapHold", zr), $.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: D.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var pe = Jt.extend({
      addHooks: function() {
        W(this._map._container, "leaflet-touch-zoom"), Q(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        wt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Q(document, "touchmove", this._onTouchMove, this), Q(document, "touchend touchcancel", this._onTouchEnd, this), kt(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), a = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(a, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && a < 1 || this._zoom > e.getMaxZoom() && a > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, a === 1)
              return;
          } else {
            var h = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (a === 1 && h.x === 0 && h.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(h), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), Gt(this._animRequest);
          var l = I(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = Dt(l, this, !0), kt(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Gt(this._animRequest), ft(document, "touchmove", this._onTouchMove, this), ft(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    $.addInitHook("addHandler", "touchZoom", pe), $.BoxZoom = Sr, $.DoubleClickZoom = Mn, $.Drag = Bn, $.Keyboard = Or, $.ScrollWheelZoom = Sn, $.TapHold = zr, $.TouchZoom = pe, p.Bounds = gt, p.Browser = D, p.CRS = ne, p.Canvas = Tr, p.Circle = Ei, p.CircleMarker = Ci, p.Class = ie, p.Control = qt, p.DivIcon = Lr, p.DivOverlay = Ut, p.DomEvent = va, p.DomUtil = ma, p.Draggable = fe, p.Evented = Ce, p.FeatureGroup = re, p.GeoJSON = te, p.GridLayer = ai, p.Handler = Jt, p.Icon = ze, p.ImageOverlay = Ii, p.LatLng = ht, p.LatLngBounds = Rt, p.Layer = Wt, p.LayerGroup = Oe, p.LineUtil = Ca, p.Map = $, p.Marker = ni, p.Mixin = ba, p.Path = de, p.Point = K, p.PolyUtil = dr, p.Polygon = ae, p.Polyline = $t, p.Popup = Bi, p.PosAnimation = ar, p.Projection = _r, p.Rectangle = Br, p.Renderer = se, p.SVG = si, p.SVGOverlay = Mi, p.TileLayer = xe, p.Tooltip = ri, p.Transformation = Gi, p.Util = qr, p.VideoOverlay = xr, p.bind = I, p.bounds = Zt, p.canvas = Ir, p.circle = Ar, p.circleMarker = Ln, p.control = ei, p.divIcon = Da, p.extend = b, p.featureGroup = Ia, p.geoJSON = wr, p.geoJson = Tn, p.gridLayer = Cr, p.icon = Ma, p.imageOverlay = Oa, p.latLng = et, p.latLngBounds = yt, p.layerGroup = Ta, p.map = or, p.marker = Ba, p.point = G, p.polygon = Sa, p.polyline = yr, p.popup = Na, p.rectangle = Fa, p.setOptions = x, p.stamp = O, p.svg = Mr, p.svgOverlay = za, p.tileLayer = Er, p.tooltip = In, p.transformation = Ve, p.version = k, p.videoOverlay = Pr;
    var Ha = window.L;
    p.noConflict = function() {
      return window.L = Ha, this;
    }, window.L = p;
  });
})(ro, ro.exports);
var To = ro.exports;
const At = /* @__PURE__ */ ko(To);
var Ri = /* @__PURE__ */ ((dt) => (dt[dt.BeaconMac = 0] = "BeaconMac", dt[dt.RFID = 1] = "RFID", dt[dt.AwbNo = 2] = "AwbNo", dt[dt.ULD = 3] = "ULD", dt))(Ri || {}), Io = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(dt, y) {
  (function(p, k) {
    dt.exports = k();
  })(Eo, function() {
    for (var p = function(r, o, s) {
      return o === void 0 && (o = 0), s === void 0 && (s = 1), r < o ? o : r > s ? s : r;
    }, k = p, b = function(r) {
      r._clipped = !1, r._unclipped = r.slice(0);
      for (var o = 0; o <= 3; o++)
        o < 3 ? ((r[o] < 0 || r[o] > 255) && (r._clipped = !0), r[o] = k(r[o], 0, 255)) : o === 3 && (r[o] = k(r[o], 0, 1));
      return r;
    }, T = {}, I = 0, U = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; I < U.length; I += 1) {
      var O = U[I];
      T["[object " + O + "]"] = O.toLowerCase();
    }
    var F = function(r) {
      return T[Object.prototype.toString.call(r)] || "object";
    }, st = F, Z = function(r, o) {
      return o === void 0 && (o = null), r.length >= 3 ? Array.prototype.slice.call(r) : st(r[0]) == "object" && o ? o.split("").filter(function(s) {
        return r[0][s] !== void 0;
      }).map(function(s) {
        return r[0][s];
      }) : r[0];
    }, V = F, vt = function(r) {
      if (r.length < 2)
        return null;
      var o = r.length - 1;
      return V(r[o]) == "string" ? r[o].toLowerCase() : null;
    }, Et = Math.PI, x = {
      clip_rgb: b,
      limit: p,
      type: F,
      unpack: Z,
      last: vt,
      PI: Et,
      TWOPI: Et * 2,
      PITHIRD: Et / 3,
      DEG2RAD: Et / 180,
      RAD2DEG: 180 / Et
    }, Pt = {
      format: {},
      autodetect: []
    }, Vr = x.last, Nn = x.clip_rgb, Qt = x.type, ee = Pt, Ge = function() {
      for (var o = [], s = arguments.length; s--; )
        o[s] = arguments[s];
      var u = this;
      if (Qt(o[0]) === "object" && o[0].constructor && o[0].constructor === this.constructor)
        return o[0];
      var f = Vr(o), d = !1;
      if (!f) {
        d = !0, ee.sorted || (ee.autodetect = ee.autodetect.sort(function(P, B) {
          return B.p - P.p;
        }), ee.sorted = !0);
        for (var c = 0, v = ee.autodetect; c < v.length; c += 1) {
          var g = v[c];
          if (f = g.test.apply(g, o), f)
            break;
        }
      }
      if (ee.format[f]) {
        var A = ee.format[f].apply(null, d ? o : o.slice(0, -1));
        u._rgb = Nn(A);
      } else
        throw new Error("unknown format: " + o);
      u._rgb.length === 3 && u._rgb.push(1);
    };
    Ge.prototype.toString = function() {
      return Qt(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var q = Ge, Ke = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Ke.Color, [null].concat(r)))();
    };
    Ke.Color = q, Ke.version = "2.4.2";
    var bt = Ke, Fi = x.unpack, Ui = Math.max, Dt = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Fi(r, "rgb"), u = s[0], f = s[1], d = s[2];
      u = u / 255, f = f / 255, d = d / 255;
      var c = 1 - Ui(u, Ui(f, d)), v = c < 1 ? 1 / (1 - c) : 0, g = (1 - u - c) * v, A = (1 - f - c) * v, P = (1 - d - c) * v;
      return [g, A, P, c];
    }, Gt = Dt, qr = x.unpack, ie = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = qr(r, "cmyk");
      var s = r[0], u = r[1], f = r[2], d = r[3], c = r.length > 4 ? r[4] : 1;
      return d === 1 ? [0, 0, 0, c] : [
        s >= 1 ? 0 : 255 * (1 - s) * (1 - d),
        // r
        u >= 1 ? 0 : 255 * (1 - u) * (1 - d),
        // g
        f >= 1 ? 0 : 255 * (1 - f) * (1 - d),
        // b
        c
      ];
    }, Wr = ie, Ft = bt, Ce = q, K = Pt, Dn = x.unpack, G = x.type, gt = Gt;
    Ce.prototype.cmyk = function() {
      return gt(this._rgb);
    }, Ft.cmyk = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Ce, [null].concat(r, ["cmyk"])))();
    }, K.format.cmyk = Wr, K.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = Dn(r, "cmyk"), G(r) === "array" && r.length === 4)
          return "cmyk";
      }
    });
    var Zt = x.unpack, Rt = x.last, yt = function(r) {
      return Math.round(r * 100) / 100;
    }, ht = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Zt(r, "hsla"), u = Rt(r) || "lsa";
      return s[0] = yt(s[0] || 0), s[1] = yt(s[1] * 100) + "%", s[2] = yt(s[2] * 100) + "%", u === "hsla" || s.length > 3 && s[3] < 1 ? (s[3] = s.length > 3 ? s[3] : 1, u = "hsla") : s.length = 3, u + "(" + s.join(",") + ")";
    }, et = ht, ne = x.unpack, ce = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = ne(r, "rgba");
      var s = r[0], u = r[1], f = r[2];
      s /= 255, u /= 255, f /= 255;
      var d = Math.min(s, u, f), c = Math.max(s, u, f), v = (c + d) / 2, g, A;
      return c === d ? (g = 0, A = Number.NaN) : g = v < 0.5 ? (c - d) / (c + d) : (c - d) / (2 - c - d), s == c ? A = (u - f) / (c - d) : u == c ? A = 2 + (f - s) / (c - d) : f == c && (A = 4 + (s - u) / (c - d)), A *= 60, A < 0 && (A += 360), r.length > 3 && r[3] !== void 0 ? [A, g, v, r[3]] : [A, g, v];
    }, Hi = ce, Qi = x.unpack, Gi = x.last, Ve = et, Ki = Hi, Vi = Math.round, Zn = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Qi(r, "rgba"), u = Gi(r) || "rgb";
      return u.substr(0, 3) == "hsl" ? Ve(Ki(s), u) : (s[0] = Vi(s[0]), s[1] = Vi(s[1]), s[2] = Vi(s[2]), (u === "rgba" || s.length > 3 && s[3] < 1) && (s[3] = s.length > 3 ? s[3] : 1, u = "rgba"), u + "(" + s.slice(0, u === "rgb" ? 3 : 4).join(",") + ")");
    }, Rn = Zn, qi = x.unpack, Ee = Math.round, jr = function() {
      for (var r, o = [], s = arguments.length; s--; )
        o[s] = arguments[s];
      o = qi(o, "hsl");
      var u = o[0], f = o[1], d = o[2], c, v, g;
      if (f === 0)
        c = v = g = d * 255;
      else {
        var A = [0, 0, 0], P = [0, 0, 0], B = d < 0.5 ? d * (1 + f) : d + f - d * f, C = 2 * d - B, N = u / 360;
        A[0] = N + 1 / 3, A[1] = N, A[2] = N - 1 / 3;
        for (var z = 0; z < 3; z++)
          A[z] < 0 && (A[z] += 1), A[z] > 1 && (A[z] -= 1), 6 * A[z] < 1 ? P[z] = C + (B - C) * 6 * A[z] : 2 * A[z] < 1 ? P[z] = B : 3 * A[z] < 2 ? P[z] = C + (B - C) * (2 / 3 - A[z]) * 6 : P[z] = C;
        r = [Ee(P[0] * 255), Ee(P[1] * 255), Ee(P[2] * 255)], c = r[0], v = r[1], g = r[2];
      }
      return o.length > 3 ? [c, v, g, o[3]] : [c, v, g, 1];
    }, Wi = jr, li = Wi, ji = Pt, Xi = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, Fn = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Un = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, ci = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Yi = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Ji = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Hn = Math.round, $i = function(r) {
      r = r.toLowerCase().trim();
      var o;
      if (ji.format.named)
        try {
          return ji.format.named(r);
        } catch {
        }
      if (o = r.match(Xi)) {
        for (var s = o.slice(1, 4), u = 0; u < 3; u++)
          s[u] = +s[u];
        return s[3] = 1, s;
      }
      if (o = r.match(Fn)) {
        for (var f = o.slice(1, 5), d = 0; d < 4; d++)
          f[d] = +f[d];
        return f;
      }
      if (o = r.match(Un)) {
        for (var c = o.slice(1, 4), v = 0; v < 3; v++)
          c[v] = Hn(c[v] * 2.55);
        return c[3] = 1, c;
      }
      if (o = r.match(ci)) {
        for (var g = o.slice(1, 5), A = 0; A < 3; A++)
          g[A] = Hn(g[A] * 2.55);
        return g[3] = +g[3], g;
      }
      if (o = r.match(Yi)) {
        var P = o.slice(1, 4);
        P[1] *= 0.01, P[2] *= 0.01;
        var B = li(P);
        return B[3] = 1, B;
      }
      if (o = r.match(Ji)) {
        var C = o.slice(1, 4);
        C[1] *= 0.01, C[2] *= 0.01;
        var N = li(C);
        return N[3] = +o[4], N;
      }
    };
    $i.test = function(r) {
      return Xi.test(r) || Fn.test(r) || Un.test(r) || ci.test(r) || Yi.test(r) || Ji.test(r);
    };
    var Qn = $i, Xr = bt, tn = q, fi = Pt, Gn = x.type, Yr = Rn, ke = Qn;
    tn.prototype.css = function(r) {
      return Yr(this._rgb, r);
    }, Xr.css = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(tn, [null].concat(r, ["css"])))();
    }, fi.format.css = ke, fi.autodetect.push({
      p: 5,
      test: function(r) {
        for (var o = [], s = arguments.length - 1; s-- > 0; )
          o[s] = arguments[s + 1];
        if (!o.length && Gn(r) === "string" && ke.test(r))
          return "css";
      }
    });
    var Kn = q, Jr = bt, Vn = Pt, qn = x.unpack;
    Vn.format.gl = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = qn(r, "rgba");
      return s[0] *= 255, s[1] *= 255, s[2] *= 255, s;
    }, Jr.gl = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Kn, [null].concat(r, ["gl"])))();
    }, Kn.prototype.gl = function() {
      var r = this._rgb;
      return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]];
    };
    var Wn = x.unpack, $r = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Wn(r, "rgb"), u = s[0], f = s[1], d = s[2], c = Math.min(u, f, d), v = Math.max(u, f, d), g = v - c, A = g * 100 / 255, P = c / (255 - g) * 100, B;
      return g === 0 ? B = Number.NaN : (u === v && (B = (f - d) / g), f === v && (B = 2 + (d - u) / g), d === v && (B = 4 + (u - f) / g), B *= 60, B < 0 && (B += 360)), [B, A, P];
    }, ta = $r, ea = x.unpack, ia = Math.floor, na = function() {
      for (var r, o, s, u, f, d, c = [], v = arguments.length; v--; )
        c[v] = arguments[v];
      c = ea(c, "hcg");
      var g = c[0], A = c[1], P = c[2], B, C, N;
      P = P * 255;
      var z = A * 255;
      if (A === 0)
        B = C = N = P;
      else {
        g === 360 && (g = 0), g > 360 && (g -= 360), g < 0 && (g += 360), g /= 60;
        var X = ia(g), tt = g - X, rt = P * (1 - A), ot = rt + z * (1 - tt), zt = rt + z * tt, Bt = rt + z;
        switch (X) {
          case 0:
            r = [Bt, zt, rt], B = r[0], C = r[1], N = r[2];
            break;
          case 1:
            o = [ot, Bt, rt], B = o[0], C = o[1], N = o[2];
            break;
          case 2:
            s = [rt, Bt, zt], B = s[0], C = s[1], N = s[2];
            break;
          case 3:
            u = [rt, ot, Bt], B = u[0], C = u[1], N = u[2];
            break;
          case 4:
            f = [zt, rt, Bt], B = f[0], C = f[1], N = f[2];
            break;
          case 5:
            d = [Bt, rt, ot], B = d[0], C = d[1], N = d[2];
            break;
        }
      }
      return [B, C, N, c.length > 3 ? c[3] : 1];
    }, ra = na, en = x.unpack, aa = x.type, oa = bt, jn = q, Xn = Pt, jt = ta;
    jn.prototype.hcg = function() {
      return jt(this._rgb);
    }, oa.hcg = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(jn, [null].concat(r, ["hcg"])))();
    }, Xn.format.hcg = ra, Xn.autodetect.push({
      p: 1,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = en(r, "hcg"), aa(r) === "array" && r.length === 3)
          return "hcg";
      }
    });
    var D = x.unpack, Yn = x.last, qe = Math.round, Jn = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = D(r, "rgba"), u = s[0], f = s[1], d = s[2], c = s[3], v = Yn(r) || "auto";
      c === void 0 && (c = 1), v === "auto" && (v = c < 1 ? "rgba" : "rgb"), u = qe(u), f = qe(f), d = qe(d);
      var g = u << 16 | f << 8 | d, A = "000000" + g.toString(16);
      A = A.substr(A.length - 6);
      var P = "0" + qe(c * 255).toString(16);
      switch (P = P.substr(P.length - 2), v.toLowerCase()) {
        case "rgba":
          return "#" + A + P;
        case "argb":
          return "#" + P + A;
        default:
          return "#" + A;
      }
    }, nn = Jn, rn = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, $n = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Te = function(r) {
      if (r.match(rn)) {
        (r.length === 4 || r.length === 7) && (r = r.substr(1)), r.length === 3 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
        var o = parseInt(r, 16), s = o >> 16, u = o >> 8 & 255, f = o & 255;
        return [s, u, f, 1];
      }
      if (r.match($n)) {
        (r.length === 5 || r.length === 9) && (r = r.substr(1)), r.length === 4 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]);
        var d = parseInt(r, 16), c = d >> 24 & 255, v = d >> 16 & 255, g = d >> 8 & 255, A = Math.round((d & 255) / 255 * 100) / 100;
        return [c, v, g, A];
      }
      throw new Error("unknown hex color: " + r);
    }, an = Te, sa = bt, tr = q, ha = x.type, er = Pt, ir = nn;
    tr.prototype.hex = function(r) {
      return ir(this._rgb, r);
    }, sa.hex = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(tr, [null].concat(r, ["hex"])))();
    }, er.format.hex = an, er.autodetect.push({
      p: 4,
      test: function(r) {
        for (var o = [], s = arguments.length - 1; s-- > 0; )
          o[s] = arguments[s + 1];
        if (!o.length && ha(r) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(r.length) >= 0)
          return "hex";
      }
    });
    var ua = x.unpack, We = x.TWOPI, la = Math.min, ca = Math.sqrt, fa = Math.acos, da = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = ua(r, "rgb"), u = s[0], f = s[1], d = s[2];
      u /= 255, f /= 255, d /= 255;
      var c, v = la(u, f, d), g = (u + f + d) / 3, A = g > 0 ? 1 - v / g : 0;
      return A === 0 ? c = NaN : (c = (u - f + (u - d)) / 2, c /= ca((u - f) * (u - f) + (u - d) * (f - d)), c = fa(c), d > f && (c = We - c), c /= We), [c * 360, A, g];
    }, pa = da, on = x.unpack, ve = x.limit, ge = x.TWOPI, di = x.PITHIRD, Xt = Math.cos, nt = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = on(r, "hsi");
      var s = r[0], u = r[1], f = r[2], d, c, v;
      return isNaN(s) && (s = 0), isNaN(u) && (u = 0), s > 360 && (s -= 360), s < 0 && (s += 360), s /= 360, s < 1 / 3 ? (v = (1 - u) / 3, d = (1 + u * Xt(ge * s) / Xt(di - ge * s)) / 3, c = 1 - (v + d)) : s < 2 / 3 ? (s -= 1 / 3, d = (1 - u) / 3, c = (1 + u * Xt(ge * s) / Xt(di - ge * s)) / 3, v = 1 - (d + c)) : (s -= 2 / 3, c = (1 - u) / 3, v = (1 + u * Xt(ge * s) / Xt(di - ge * s)) / 3, d = 1 - (c + v)), d = ve(f * d * 3), c = ve(f * c * 3), v = ve(f * v * 3), [d * 255, c * 255, v * 255, r.length > 3 ? r[3] : 1];
    }, _t = nt, pi = x.unpack, Ie = x.type, Me = bt, mi = q, W = Pt, wt = pa;
    mi.prototype.hsi = function() {
      return wt(this._rgb);
    }, Me.hsi = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(mi, [null].concat(r, ["hsi"])))();
    }, W.format.hsi = _t, W.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = pi(r, "hsi"), Ie(r) === "array" && r.length === 3)
          return "hsi";
      }
    });
    var sn = x.unpack, vi = x.type, Kt = bt, nr = q, je = Pt, _e = Hi;
    nr.prototype.hsl = function() {
      return _e(this._rgb);
    }, Kt.hsl = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(nr, [null].concat(r, ["hsl"])))();
    }, je.format.hsl = Wi, je.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = sn(r, "hsl"), vi(r) === "array" && r.length === 3)
          return "hsl";
      }
    });
    var xt = x.unpack, Ae = Math.min, Xe = Math.max, Ye = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = xt(r, "rgb");
      var s = r[0], u = r[1], f = r[2], d = Ae(s, u, f), c = Xe(s, u, f), v = c - d, g, A, P;
      return P = c / 255, c === 0 ? (g = Number.NaN, A = 0) : (A = v / c, s === c && (g = (u - f) / v), u === c && (g = 2 + (f - s) / v), f === c && (g = 4 + (s - u) / v), g *= 60, g < 0 && (g += 360)), [g, A, P];
    }, hn = Ye, Je = x.unpack, un = Math.floor, ln = function() {
      for (var r, o, s, u, f, d, c = [], v = arguments.length; v--; )
        c[v] = arguments[v];
      c = Je(c, "hsv");
      var g = c[0], A = c[1], P = c[2], B, C, N;
      if (P *= 255, A === 0)
        B = C = N = P;
      else {
        g === 360 && (g = 0), g > 360 && (g -= 360), g < 0 && (g += 360), g /= 60;
        var z = un(g), X = g - z, tt = P * (1 - A), rt = P * (1 - A * X), ot = P * (1 - A * (1 - X));
        switch (z) {
          case 0:
            r = [P, ot, tt], B = r[0], C = r[1], N = r[2];
            break;
          case 1:
            o = [rt, P, tt], B = o[0], C = o[1], N = o[2];
            break;
          case 2:
            s = [tt, P, ot], B = s[0], C = s[1], N = s[2];
            break;
          case 3:
            u = [tt, rt, P], B = u[0], C = u[1], N = u[2];
            break;
          case 4:
            f = [ot, tt, P], B = f[0], C = f[1], N = f[2];
            break;
          case 5:
            d = [P, tt, rt], B = d[0], C = d[1], N = d[2];
            break;
        }
      }
      return [B, C, N, c.length > 3 ? c[3] : 1];
    }, gi = ln, cn = x.unpack, fn = x.type, _i = bt, dn = q, Ai = Pt, ma = hn;
    dn.prototype.hsv = function() {
      return ma(this._rgb);
    }, _i.hsv = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(dn, [null].concat(r, ["hsv"])))();
    }, Ai.format.hsv = gi, Ai.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = cn(r, "hsv"), fn(r) === "array" && r.length === 3)
          return "hsv";
      }
    });
    var Q = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, St = Q, ft = x.unpack, pn = Math.pow, mn = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = ft(r, "rgb"), u = s[0], f = s[1], d = s[2], c = ye(u, f, d), v = c[0], g = c[1], A = c[2], P = 116 * g - 16;
      return [P < 0 ? 0 : P, 500 * (v - g), 200 * (g - A)];
    }, $e = function(r) {
      return (r /= 255) <= 0.04045 ? r / 12.92 : pn((r + 0.055) / 1.055, 2.4);
    }, ti = function(r) {
      return r > St.t3 ? pn(r, 1 / 3) : r / St.t2 + St.t0;
    }, ye = function(r, o, s) {
      r = $e(r), o = $e(o), s = $e(s);
      var u = ti((0.4124564 * r + 0.3575761 * o + 0.1804375 * s) / St.Xn), f = ti((0.2126729 * r + 0.7151522 * o + 0.072175 * s) / St.Yn), d = ti((0.0193339 * r + 0.119192 * o + 0.9503041 * s) / St.Zn);
      return [u, f, d];
    }, yi = mn, Yt = Q, kt = x.unpack, be = Math.pow, rr = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = kt(r, "lab");
      var s = r[0], u = r[1], f = r[2], d, c, v, g, A, P;
      return c = (s + 16) / 116, d = isNaN(u) ? c : c + u / 500, v = isNaN(f) ? c : c - f / 200, c = Yt.Yn * vn(c), d = Yt.Xn * vn(d), v = Yt.Zn * vn(v), g = bi(3.2404542 * d - 1.5371385 * c - 0.4985314 * v), A = bi(-0.969266 * d + 1.8760108 * c + 0.041556 * v), P = bi(0.0556434 * d - 0.2040259 * c + 1.0572252 * v), [g, A, P, r.length > 3 ? r[3] : 1];
    }, bi = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * be(r, 1 / 2.4) - 0.055);
    }, vn = function(r) {
      return r > Yt.t1 ? r * r * r : Yt.t2 * (r - Yt.t0);
    }, gn = rr, _n = x.unpack, va = x.type, ar = bt, $ = q, or = Pt, qt = yi;
    $.prototype.lab = function() {
      return qt(this._rgb);
    }, ar.lab = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply($, [null].concat(r, ["lab"])))();
    }, or.format.lab = gn, or.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = _n(r, "lab"), va(r) === "array" && r.length === 3)
          return "lab";
      }
    });
    var ei = x.unpack, sr = x.RAD2DEG, ga = Math.sqrt, An = Math.atan2, _a = Math.round, hr = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = ei(r, "lab"), u = s[0], f = s[1], d = s[2], c = ga(f * f + d * d), v = (An(d, f) * sr + 360) % 360;
      return _a(c * 1e4) === 0 && (v = Number.NaN), [u, c, v];
    }, ur = hr, Aa = x.unpack, yn = yi, ya = ur, Jt = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Aa(r, "rgb"), u = s[0], f = s[1], d = s[2], c = yn(u, f, d), v = c[0], g = c[1], A = c[2];
      return ya(v, g, A);
    }, ba = Jt, lr = x.unpack, fe = x.DEG2RAD, cr = Math.sin, fr = Math.cos, bn = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = lr(r, "lch"), u = s[0], f = s[1], d = s[2];
      return isNaN(d) && (d = 0), d = d * fe, [u, fr(d) * f, cr(d) * f];
    }, dr = bn, pr = x.unpack, mr = dr, wa = gn, xa = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = pr(r, "lch");
      var s = r[0], u = r[1], f = r[2], d = mr(s, u, f), c = d[0], v = d[1], g = d[2], A = wa(c, v, g), P = A[0], B = A[1], C = A[2];
      return [P, B, C, r.length > 3 ? r[3] : 1];
    }, wi = xa, Pa = x.unpack, vr = wi, gr = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Pa(r, "hcl").reverse();
      return vr.apply(void 0, s);
    }, xi = gr, we = x.unpack, La = x.type, Be = bt, Ot = q, Pi = Pt, wn = ba;
    Ot.prototype.lch = function() {
      return wn(this._rgb);
    }, Ot.prototype.hcl = function() {
      return wn(this._rgb).reverse();
    }, Be.lch = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Ot, [null].concat(r, ["lch"])))();
    }, Be.hcl = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Ot, [null].concat(r, ["hcl"])))();
    }, Pi.format.lch = wi, Pi.format.hcl = xi, ["lch", "hcl"].forEach(function(r) {
      return Pi.autodetect.push({
        p: 2,
        test: function() {
          for (var o = [], s = arguments.length; s--; )
            o[s] = arguments[s];
          if (o = we(o, r), La(o) === "array" && o.length === 3)
            return r;
        }
      });
    });
    var Ca = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, Li = Ca, xn = q, _r = Pt, Ea = x.type, Se = Li, ka = an, Wt = nn;
    xn.prototype.name = function() {
      for (var r = Wt(this._rgb, "rgb"), o = 0, s = Object.keys(Se); o < s.length; o += 1) {
        var u = s[o];
        if (Se[u] === r)
          return u.toLowerCase();
      }
      return r;
    }, _r.format.named = function(r) {
      if (r = r.toLowerCase(), Se[r])
        return ka(Se[r]);
      throw new Error("unknown color name: " + r);
    }, _r.autodetect.push({
      p: 5,
      test: function(r) {
        for (var o = [], s = arguments.length - 1; s-- > 0; )
          o[s] = arguments[s + 1];
        if (!o.length && Ea(r) === "string" && Se[r.toLowerCase()])
          return "named";
      }
    });
    var Oe = x.unpack, Ta = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Oe(r, "rgb"), u = s[0], f = s[1], d = s[2];
      return (u << 16) + (f << 8) + d;
    }, re = Ta, Ia = x.type, ze = function(r) {
      if (Ia(r) == "number" && r >= 0 && r <= 16777215) {
        var o = r >> 16, s = r >> 8 & 255, u = r & 255;
        return [o, s, u, 1];
      }
      throw new Error("unknown num color: " + r);
    }, Ma = ze, ii = bt, Pn = q, ni = Pt, Ba = x.type, de = re;
    Pn.prototype.num = function() {
      return de(this._rgb);
    }, ii.num = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Pn, [null].concat(r, ["num"])))();
    }, ni.format.num = Ma, ni.autodetect.push({
      p: 5,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r.length === 1 && Ba(r[0]) === "number" && r[0] >= 0 && r[0] <= 16777215)
          return "num";
      }
    });
    var Ci = bt, Ln = q, Ei = Pt, Ar = x.unpack, $t = x.type, yr = Math.round;
    Ln.prototype.rgb = function(r) {
      return r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(yr);
    }, Ln.prototype.rgba = function(r) {
      return r === void 0 && (r = !0), this._rgb.slice(0, 4).map(function(o, s) {
        return s < 3 ? r === !1 ? o : yr(o) : o;
      });
    }, Ci.rgb = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Ln, [null].concat(r, ["rgb"])))();
    }, Ei.format.rgb = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = Ar(r, "rgba");
      return s[3] === void 0 && (s[3] = 1), s;
    }, Ei.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = Ar(r, "rgba"), $t(r) === "array" && (r.length === 3 || r.length === 4 && $t(r[3]) == "number" && r[3] >= 0 && r[3] <= 1))
          return "rgb";
      }
    });
    var ae = Math.log, Sa = function(r) {
      var o = r / 100, s, u, f;
      return o < 66 ? (s = 255, u = o < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (u = o - 2) + 104.49216199393888 * ae(u), f = o < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (f = o - 10) + 115.67994401066147 * ae(f)) : (s = 351.97690566805693 + 0.114206453784165 * (s = o - 55) - 40.25366309332127 * ae(s), u = 325.4494125711974 + 0.07943456536662342 * (u = o - 50) - 28.0852963507957 * ae(u), f = 255), [s, u, f, 1];
    }, te = Sa, ki = te, br = x.unpack, Cn = Math.round, Ti = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      for (var s = br(r, "rgb"), u = s[0], f = s[2], d = 1e3, c = 4e4, v = 0.4, g; c - d > v; ) {
        g = (c + d) * 0.5;
        var A = ki(g);
        A[2] / A[0] >= f / u ? c = g : d = g;
      }
      return Cn(g);
    }, En = Ti, Ne = bt, oe = q, De = Pt, kn = En;
    oe.prototype.temp = oe.prototype.kelvin = oe.prototype.temperature = function() {
      return kn(this._rgb);
    }, Ne.temp = Ne.kelvin = Ne.temperature = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(oe, [null].concat(r, ["temp"])))();
    }, De.format.temp = De.format.kelvin = De.format.temperature = te;
    var wr = x.unpack, Tn = Math.cbrt, Ii = Math.pow, Oa = Math.sign, xr = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = wr(r, "rgb"), u = s[0], f = s[1], d = s[2], c = [Mi(u / 255), Mi(f / 255), Mi(d / 255)], v = c[0], g = c[1], A = c[2], P = Tn(0.4122214708 * v + 0.5363325363 * g + 0.0514459929 * A), B = Tn(0.2119034982 * v + 0.6806995451 * g + 0.1073969566 * A), C = Tn(0.0883024619 * v + 0.2817188376 * g + 0.6299787005 * A);
      return [
        0.2104542553 * P + 0.793617785 * B - 0.0040720468 * C,
        1.9779984951 * P - 2.428592205 * B + 0.4505937099 * C,
        0.0259040371 * P + 0.7827717662 * B - 0.808675766 * C
      ];
    }, Pr = xr;
    function Mi(r) {
      var o = Math.abs(r);
      return o < 0.04045 ? r / 12.92 : (Oa(r) || 1) * Ii((o + 0.055) / 1.055, 2.4);
    }
    var za = x.unpack, Ut = Math.pow, Bi = Math.sign, Na = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = za(r, "lab");
      var s = r[0], u = r[1], f = r[2], d = Ut(s + 0.3963377774 * u + 0.2158037573 * f, 3), c = Ut(s - 0.1055613458 * u - 0.0638541728 * f, 3), v = Ut(s - 0.0894841775 * u - 1.291485548 * f, 3);
      return [
        255 * In(4.0767416621 * d - 3.3077115913 * c + 0.2309699292 * v),
        255 * In(-1.2684380046 * d + 2.6097574011 * c - 0.3413193965 * v),
        255 * In(-0.0041960863 * d - 0.7034186147 * c + 1.707614701 * v),
        r.length > 3 ? r[3] : 1
      ];
    }, ri = Na;
    function In(r) {
      var o = Math.abs(r);
      return o > 31308e-7 ? (Bi(r) || 1) * (1.055 * Ut(o, 1 / 2.4) - 0.055) : r * 12.92;
    }
    var Lr = x.unpack, Da = x.type, ai = bt, Cr = q, xe = Pt, Er = Pr;
    Cr.prototype.oklab = function() {
      return Er(this._rgb);
    }, ai.oklab = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Cr, [null].concat(r, ["oklab"])))();
    }, xe.format.oklab = ri, xe.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = Lr(r, "oklab"), Da(r) === "array" && r.length === 3)
          return "oklab";
      }
    });
    var kr = x.unpack, Za = Pr, se = ur, Tr = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      var s = kr(r, "rgb"), u = s[0], f = s[1], d = s[2], c = Za(u, f, d), v = c[0], g = c[1], A = c[2];
      return se(v, g, A);
    }, Ir = Tr, oi = x.unpack, Ra = dr, Si = ri, si = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      r = oi(r, "lch");
      var s = r[0], u = r[1], f = r[2], d = Ra(s, u, f), c = d[0], v = d[1], g = d[2], A = Si(c, v, g), P = A[0], B = A[1], C = A[2];
      return [P, B, C, r.length > 3 ? r[3] : 1];
    }, Mr = si, Br = x.unpack, Fa = x.type, Sr = bt, Mn = q, Bn = Pt, Or = Ir;
    Mn.prototype.oklch = function() {
      return Or(this._rgb);
    }, Sr.oklch = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      return new (Function.prototype.bind.apply(Mn, [null].concat(r, ["oklch"])))();
    }, Bn.format.oklch = Mr, Bn.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        if (r = Br(r, "oklch"), Fa(r) === "array" && r.length === 3)
          return "oklch";
      }
    });
    var Sn = q, Ua = x.type;
    Sn.prototype.alpha = function(r, o) {
      return o === void 0 && (o = !1), r !== void 0 && Ua(r) === "number" ? o ? (this._rgb[3] = r, this) : new Sn([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3];
    };
    var zr = q;
    zr.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var pe = q, Ha = Q;
    pe.prototype.darken = function(r) {
      r === void 0 && (r = 1);
      var o = this, s = o.lab();
      return s[0] -= Ha.Kn * r, new pe(s, "lab").alpha(o.alpha(), !0);
    }, pe.prototype.brighten = function(r) {
      return r === void 0 && (r = 1), this.darken(-r);
    }, pe.prototype.darker = pe.prototype.darken, pe.prototype.brighter = pe.prototype.brighten;
    var t = q;
    t.prototype.get = function(r) {
      var o = r.split("."), s = o[0], u = o[1], f = this[s]();
      if (u) {
        var d = s.indexOf(u) - (s.substr(0, 2) === "ok" ? 2 : 0);
        if (d > -1)
          return f[d];
        throw new Error("unknown channel " + u + " in mode " + s);
      } else
        return f;
    };
    var e = q, i = x.type, n = Math.pow, a = 1e-7, h = 20;
    e.prototype.luminance = function(r) {
      if (r !== void 0 && i(r) === "number") {
        if (r === 0)
          return new e([0, 0, 0, this._rgb[3]], "rgb");
        if (r === 1)
          return new e([255, 255, 255, this._rgb[3]], "rgb");
        var o = this.luminance(), s = "rgb", u = h, f = function(c, v) {
          var g = c.interpolate(v, 0.5, s), A = g.luminance();
          return Math.abs(r - A) < a || !u-- ? g : A > r ? f(c, g) : f(g, v);
        }, d = (o > r ? f(new e([0, 0, 0]), this) : f(this, new e([255, 255, 255]))).rgb();
        return new e(d.concat([this._rgb[3]]));
      }
      return l.apply(void 0, this._rgb.slice(0, 3));
    };
    var l = function(r, o, s) {
      return r = m(r), o = m(o), s = m(s), 0.2126 * r + 0.7152 * o + 0.0722 * s;
    }, m = function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : n((r + 0.055) / 1.055, 2.4);
    }, _ = {}, w = q, M = x.type, R = _, j = function(r, o, s) {
      s === void 0 && (s = 0.5);
      for (var u = [], f = arguments.length - 3; f-- > 0; )
        u[f] = arguments[f + 3];
      var d = u[0] || "lrgb";
      if (!R[d] && !u.length && (d = Object.keys(R)[0]), !R[d])
        throw new Error("interpolation mode " + d + " is not defined");
      return M(r) !== "object" && (r = new w(r)), M(o) !== "object" && (o = new w(o)), R[d](r, o, s).alpha(r.alpha() + s * (o.alpha() - r.alpha()));
    }, Tt = q, Lt = j;
    Tt.prototype.mix = Tt.prototype.interpolate = function(r, o) {
      o === void 0 && (o = 0.5);
      for (var s = [], u = arguments.length - 2; u-- > 0; )
        s[u] = arguments[u + 2];
      return Lt.apply(void 0, [this, r, o].concat(s));
    };
    var Ht = q;
    Ht.prototype.premultiply = function(r) {
      r === void 0 && (r = !1);
      var o = this._rgb, s = o[3];
      return r ? (this._rgb = [o[0] * s, o[1] * s, o[2] * s, s], this) : new Ht([o[0] * s, o[1] * s, o[2] * s, s], "rgb");
    };
    var It = q, Ze = Q;
    It.prototype.saturate = function(r) {
      r === void 0 && (r = 1);
      var o = this, s = o.lch();
      return s[1] += Ze.Kn * r, s[1] < 0 && (s[1] = 0), new It(s, "lch").alpha(o.alpha(), !0);
    }, It.prototype.desaturate = function(r) {
      return r === void 0 && (r = 1), this.saturate(-r);
    };
    var Nr = q, Dr = x.type;
    Nr.prototype.set = function(r, o, s) {
      s === void 0 && (s = !1);
      var u = r.split("."), f = u[0], d = u[1], c = this[f]();
      if (d) {
        var v = f.indexOf(d) - (f.substr(0, 2) === "ok" ? 2 : 0);
        if (v > -1) {
          if (Dr(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                c[v] += +o;
                break;
              case "-":
                c[v] += +o;
                break;
              case "*":
                c[v] *= +o.substr(1);
                break;
              case "/":
                c[v] /= +o.substr(1);
                break;
              default:
                c[v] = +o;
            }
          else if (Dr(o) === "number")
            c[v] = o;
          else
            throw new Error("unsupported value for Color.set");
          var g = new Nr(c, f);
          return s ? (this._rgb = g._rgb, this) : g;
        }
        throw new Error("unknown channel " + d + " in mode " + f);
      } else
        return c;
    };
    var Qa = q, Zr = function(r, o, s) {
      var u = r._rgb, f = o._rgb;
      return new Qa(
        u[0] + s * (f[0] - u[0]),
        u[1] + s * (f[1] - u[1]),
        u[2] + s * (f[2] - u[2]),
        "rgb"
      );
    };
    _.rgb = Zr;
    var Ga = q, Oi = Math.sqrt, pt = Math.pow, zi = function(r, o, s) {
      var u = r._rgb, f = u[0], d = u[1], c = u[2], v = o._rgb, g = v[0], A = v[1], P = v[2];
      return new Ga(
        Oi(pt(f, 2) * (1 - s) + pt(g, 2) * s),
        Oi(pt(d, 2) * (1 - s) + pt(A, 2) * s),
        Oi(pt(c, 2) * (1 - s) + pt(P, 2) * s),
        "rgb"
      );
    };
    _.lrgb = zi;
    var Ka = q, Va = function(r, o, s) {
      var u = r.lab(), f = o.lab();
      return new Ka(
        u[0] + s * (f[0] - u[0]),
        u[1] + s * (f[1] - u[1]),
        u[2] + s * (f[2] - u[2]),
        "lab"
      );
    };
    _.lab = Va;
    var Rr = q, me = function(r, o, s, u) {
      var f, d, c, v;
      u === "hsl" ? (c = r.hsl(), v = o.hsl()) : u === "hsv" ? (c = r.hsv(), v = o.hsv()) : u === "hcg" ? (c = r.hcg(), v = o.hcg()) : u === "hsi" ? (c = r.hsi(), v = o.hsi()) : u === "lch" || u === "hcl" ? (u = "hcl", c = r.hcl(), v = o.hcl()) : u === "oklch" && (c = r.oklch().reverse(), v = o.oklch().reverse());
      var g, A, P, B, C, N;
      (u.substr(0, 1) === "h" || u === "oklch") && (f = c, g = f[0], P = f[1], C = f[2], d = v, A = d[0], B = d[1], N = d[2]);
      var z, X, tt, rt;
      return !isNaN(g) && !isNaN(A) ? (A > g && A - g > 180 ? rt = A - (g + 360) : A < g && g - A > 180 ? rt = A + 360 - g : rt = A - g, X = g + s * rt) : isNaN(g) ? isNaN(A) ? X = Number.NaN : (X = A, (C == 1 || C == 0) && u != "hsv" && (z = B)) : (X = g, (N == 1 || N == 0) && u != "hsv" && (z = P)), z === void 0 && (z = P + s * (B - P)), tt = C + s * (N - C), u === "oklch" ? new Rr([tt, z, X], u) : new Rr([X, z, tt], u);
    }, Fr = me, Ur = function(r, o, s) {
      return Fr(r, o, s, "lch");
    };
    _.lch = Ur, _.hcl = Ur;
    var Mo = q, Bo = function(r, o, s) {
      var u = r.num(), f = o.num();
      return new Mo(u + s * (f - u), "num");
    };
    _.num = Bo;
    var So = me, Oo = function(r, o, s) {
      return So(r, o, s, "hcg");
    };
    _.hcg = Oo;
    var zo = me, No = function(r, o, s) {
      return zo(r, o, s, "hsi");
    };
    _.hsi = No;
    var Do = me, Zo = function(r, o, s) {
      return Do(r, o, s, "hsl");
    };
    _.hsl = Zo;
    var Ro = me, Fo = function(r, o, s) {
      return Ro(r, o, s, "hsv");
    };
    _.hsv = Fo;
    var Uo = q, Ho = function(r, o, s) {
      var u = r.oklab(), f = o.oklab();
      return new Uo(
        u[0] + s * (f[0] - u[0]),
        u[1] + s * (f[1] - u[1]),
        u[2] + s * (f[2] - u[2]),
        "oklab"
      );
    };
    _.oklab = Ho;
    var Qo = me, Go = function(r, o, s) {
      return Qo(r, o, s, "oklch");
    };
    _.oklch = Go;
    var qa = q, Ko = x.clip_rgb, Wa = Math.pow, ja = Math.sqrt, Xa = Math.PI, oo = Math.cos, so = Math.sin, Vo = Math.atan2, qo = function(r, o, s) {
      o === void 0 && (o = "lrgb"), s === void 0 && (s = null);
      var u = r.length;
      s || (s = Array.from(new Array(u)).map(function() {
        return 1;
      }));
      var f = u / s.reduce(function(X, tt) {
        return X + tt;
      });
      if (s.forEach(function(X, tt) {
        s[tt] *= f;
      }), r = r.map(function(X) {
        return new qa(X);
      }), o === "lrgb")
        return Wo(r, s);
      for (var d = r.shift(), c = d.get(o), v = [], g = 0, A = 0, P = 0; P < c.length; P++)
        if (c[P] = (c[P] || 0) * s[0], v.push(isNaN(c[P]) ? 0 : s[0]), o.charAt(P) === "h" && !isNaN(c[P])) {
          var B = c[P] / 180 * Xa;
          g += oo(B) * s[0], A += so(B) * s[0];
        }
      var C = d.alpha() * s[0];
      r.forEach(function(X, tt) {
        var rt = X.get(o);
        C += X.alpha() * s[tt + 1];
        for (var ot = 0; ot < c.length; ot++)
          if (!isNaN(rt[ot]))
            if (v[ot] += s[tt + 1], o.charAt(ot) === "h") {
              var zt = rt[ot] / 180 * Xa;
              g += oo(zt) * s[tt + 1], A += so(zt) * s[tt + 1];
            } else
              c[ot] += rt[ot] * s[tt + 1];
      });
      for (var N = 0; N < c.length; N++)
        if (o.charAt(N) === "h") {
          for (var z = Vo(A / v[N], g / v[N]) / Xa * 180; z < 0; )
            z += 360;
          for (; z >= 360; )
            z -= 360;
          c[N] = z;
        } else
          c[N] = c[N] / v[N];
      return C /= u, new qa(c, o).alpha(C > 0.99999 ? 1 : C, !0);
    }, Wo = function(r, o) {
      for (var s = r.length, u = [0, 0, 0, 0], f = 0; f < r.length; f++) {
        var d = r[f], c = o[f] / s, v = d._rgb;
        u[0] += Wa(v[0], 2) * c, u[1] += Wa(v[1], 2) * c, u[2] += Wa(v[2], 2) * c, u[3] += v[3] * c;
      }
      return u[0] = ja(u[0]), u[1] = ja(u[1]), u[2] = ja(u[2]), u[3] > 0.9999999 && (u[3] = 1), new qa(Ko(u));
    }, he = bt, Ni = x.type, jo = Math.pow, Ya = function(r) {
      var o = "rgb", s = he("#ccc"), u = 0, f = [0, 1], d = [], c = [0, 0], v = !1, g = [], A = !1, P = 0, B = 1, C = !1, N = {}, z = !0, X = 1, tt = function(E) {
        if (E = E || ["#fff", "#000"], E && Ni(E) === "string" && he.brewer && he.brewer[E.toLowerCase()] && (E = he.brewer[E.toLowerCase()]), Ni(E) === "array") {
          E.length === 1 && (E = [E[0], E[0]]), E = E.slice(0);
          for (var H = 0; H < E.length; H++)
            E[H] = he(E[H]);
          d.length = 0;
          for (var J = 0; J < E.length; J++)
            d.push(J / (E.length - 1));
        }
        return Vt(), g = E;
      }, rt = function(E) {
        if (v != null) {
          for (var H = v.length - 1, J = 0; J < H && E >= v[J]; )
            J++;
          return J - 1;
        }
        return 0;
      }, ot = function(E) {
        return E;
      }, zt = function(E) {
        return E;
      }, Bt = function(E, H) {
        var J, Y;
        if (H == null && (H = !1), isNaN(E) || E === null)
          return s;
        if (H)
          Y = E;
        else if (v && v.length > 2) {
          var Nt = rt(E);
          Y = Nt / (v.length - 2);
        } else
          B !== P ? Y = (E - P) / (B - P) : Y = 1;
        Y = zt(Y), H || (Y = ot(Y)), X !== 1 && (Y = jo(Y, X)), Y = c[0] + Y * (1 - c[0] - c[1]), Y = Math.min(1, Math.max(0, Y));
        var mt = Math.floor(Y * 1e4);
        if (z && N[mt])
          J = N[mt];
        else {
          if (Ni(g) === "array")
            for (var at = 0; at < d.length; at++) {
              var ut = d[at];
              if (Y <= ut) {
                J = g[at];
                break;
              }
              if (Y >= ut && at === d.length - 1) {
                J = g[at];
                break;
              }
              if (Y > ut && Y < d[at + 1]) {
                Y = (Y - ut) / (d[at + 1] - ut), J = he.interpolate(g[at], g[at + 1], Y, o);
                break;
              }
            }
          else
            Ni(g) === "function" && (J = g(Y));
          z && (N[mt] = J);
        }
        return J;
      }, Vt = function() {
        return N = {};
      };
      tt(r);
      var it = function(E) {
        var H = he(Bt(E));
        return A && H[A] ? H[A]() : H;
      };
      return it.classes = function(E) {
        if (E != null) {
          if (Ni(E) === "array")
            v = E, f = [E[0], E[E.length - 1]];
          else {
            var H = he.analyze(f);
            E === 0 ? v = [H.min, H.max] : v = he.limits(H, "e", E);
          }
          return it;
        }
        return v;
      }, it.domain = function(E) {
        if (!arguments.length)
          return f;
        P = E[0], B = E[E.length - 1], d = [];
        var H = g.length;
        if (E.length === H && P !== B)
          for (var J = 0, Y = Array.from(E); J < Y.length; J += 1) {
            var Nt = Y[J];
            d.push((Nt - P) / (B - P));
          }
        else {
          for (var mt = 0; mt < H; mt++)
            d.push(mt / (H - 1));
          if (E.length > 2) {
            var at = E.map(function(lt, ct) {
              return ct / (E.length - 1);
            }), ut = E.map(function(lt) {
              return (lt - P) / (B - P);
            });
            ut.every(function(lt, ct) {
              return at[ct] === lt;
            }) || (zt = function(lt) {
              if (lt <= 0 || lt >= 1)
                return lt;
              for (var ct = 0; lt >= ut[ct + 1]; )
                ct++;
              var le = (lt - ut[ct]) / (ut[ct + 1] - ut[ct]), Ue = at[ct] + le * (at[ct + 1] - at[ct]);
              return Ue;
            });
          }
        }
        return f = [P, B], it;
      }, it.mode = function(E) {
        return arguments.length ? (o = E, Vt(), it) : o;
      }, it.range = function(E, H) {
        return tt(E), it;
      }, it.out = function(E) {
        return A = E, it;
      }, it.spread = function(E) {
        return arguments.length ? (u = E, it) : u;
      }, it.correctLightness = function(E) {
        return E == null && (E = !0), C = E, Vt(), C ? ot = function(H) {
          for (var J = Bt(0, !0).lab()[0], Y = Bt(1, !0).lab()[0], Nt = J > Y, mt = Bt(H, !0).lab()[0], at = J + (Y - J) * H, ut = mt - at, lt = 0, ct = 1, le = 20; Math.abs(ut) > 0.01 && le-- > 0; )
            (function() {
              return Nt && (ut *= -1), ut < 0 ? (lt = H, H += (ct - H) * 0.5) : (ct = H, H += (lt - H) * 0.5), mt = Bt(H, !0).lab()[0], ut = mt - at;
            })();
          return H;
        } : ot = function(H) {
          return H;
        }, it;
      }, it.padding = function(E) {
        return E != null ? (Ni(E) === "number" && (E = [E, E]), c = E, it) : c;
      }, it.colors = function(E, H) {
        arguments.length < 2 && (H = "hex");
        var J = [];
        if (arguments.length === 0)
          J = g.slice(0);
        else if (E === 1)
          J = [it(0.5)];
        else if (E > 1) {
          var Y = f[0], Nt = f[1] - Y;
          J = Xo(0, E, !1).map(function(ct) {
            return it(Y + ct / (E - 1) * Nt);
          });
        } else {
          r = [];
          var mt = [];
          if (v && v.length > 2)
            for (var at = 1, ut = v.length, lt = 1 <= ut; lt ? at < ut : at > ut; lt ? at++ : at--)
              mt.push((v[at - 1] + v[at]) * 0.5);
          else
            mt = f;
          J = mt.map(function(ct) {
            return it(ct);
          });
        }
        return he[H] && (J = J.map(function(ct) {
          return ct[H]();
        })), J;
      }, it.cache = function(E) {
        return E != null ? (z = E, it) : z;
      }, it.gamma = function(E) {
        return E != null ? (X = E, it) : X;
      }, it.nodata = function(E) {
        return E != null ? (s = he(E), it) : s;
      }, it;
    };
    function Xo(r, o, s) {
      for (var u = [], f = r < o, d = s ? f ? o + 1 : o - 1 : o, c = r; f ? c < d : c > d; f ? c++ : c--)
        u.push(c);
      return u;
    }
    var On = q, Yo = Ya, Jo = function(r) {
      for (var o = [1, 1], s = 1; s < r; s++) {
        for (var u = [1], f = 1; f <= o.length; f++)
          u[f] = (o[f] || 0) + o[f - 1];
        o = u;
      }
      return o;
    }, $o = function(r) {
      var o, s, u, f, d, c, v;
      if (r = r.map(function(C) {
        return new On(C);
      }), r.length === 2)
        o = r.map(function(C) {
          return C.lab();
        }), d = o[0], c = o[1], f = function(C) {
          var N = [0, 1, 2].map(function(z) {
            return d[z] + C * (c[z] - d[z]);
          });
          return new On(N, "lab");
        };
      else if (r.length === 3)
        s = r.map(function(C) {
          return C.lab();
        }), d = s[0], c = s[1], v = s[2], f = function(C) {
          var N = [0, 1, 2].map(function(z) {
            return (1 - C) * (1 - C) * d[z] + 2 * (1 - C) * C * c[z] + C * C * v[z];
          });
          return new On(N, "lab");
        };
      else if (r.length === 4) {
        var g;
        u = r.map(function(C) {
          return C.lab();
        }), d = u[0], c = u[1], v = u[2], g = u[3], f = function(C) {
          var N = [0, 1, 2].map(function(z) {
            return (1 - C) * (1 - C) * (1 - C) * d[z] + 3 * (1 - C) * (1 - C) * C * c[z] + 3 * (1 - C) * C * C * v[z] + C * C * C * g[z];
          });
          return new On(N, "lab");
        };
      } else if (r.length >= 5) {
        var A, P, B;
        A = r.map(function(C) {
          return C.lab();
        }), B = r.length - 1, P = Jo(B), f = function(C) {
          var N = 1 - C, z = [0, 1, 2].map(function(X) {
            return A.reduce(function(tt, rt, ot) {
              return tt + P[ot] * Math.pow(N, B - ot) * Math.pow(C, ot) * rt[X];
            }, 0);
          });
          return new On(z, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return f;
    }, ts = function(r) {
      var o = $o(r);
      return o.scale = function() {
        return Yo(o);
      }, o;
    }, Ja = bt, ue = function(r, o, s) {
      if (!ue[s])
        throw new Error("unknown blend mode " + s);
      return ue[s](r, o);
    }, Re = function(r) {
      return function(o, s) {
        var u = Ja(s).rgb(), f = Ja(o).rgb();
        return Ja.rgb(r(u, f));
      };
    }, Fe = function(r) {
      return function(o, s) {
        var u = [];
        return u[0] = r(o[0], s[0]), u[1] = r(o[1], s[1]), u[2] = r(o[2], s[2]), u;
      };
    }, es = function(r) {
      return r;
    }, is = function(r, o) {
      return r * o / 255;
    }, ns = function(r, o) {
      return r > o ? o : r;
    }, rs = function(r, o) {
      return r > o ? r : o;
    }, as = function(r, o) {
      return 255 * (1 - (1 - r / 255) * (1 - o / 255));
    }, os = function(r, o) {
      return o < 128 ? 2 * r * o / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - o / 255));
    }, ss = function(r, o) {
      return 255 * (1 - (1 - o / 255) / (r / 255));
    }, hs = function(r, o) {
      return r === 255 ? 255 : (r = 255 * (o / 255) / (1 - r / 255), r > 255 ? 255 : r);
    };
    ue.normal = Re(Fe(es)), ue.multiply = Re(Fe(is)), ue.screen = Re(Fe(as)), ue.overlay = Re(Fe(os)), ue.darken = Re(Fe(ns)), ue.lighten = Re(Fe(rs)), ue.dodge = Re(Fe(hs)), ue.burn = Re(Fe(ss));
    for (var us = ue, $a = x.type, ls = x.clip_rgb, cs = x.TWOPI, fs = Math.pow, ds = Math.sin, ps = Math.cos, ho = bt, ms = function(r, o, s, u, f) {
      r === void 0 && (r = 300), o === void 0 && (o = -1.5), s === void 0 && (s = 1), u === void 0 && (u = 1), f === void 0 && (f = [0, 1]);
      var d = 0, c;
      $a(f) === "array" ? c = f[1] - f[0] : (c = 0, f = [f, f]);
      var v = function(g) {
        var A = cs * ((r + 120) / 360 + o * g), P = fs(f[0] + c * g, u), B = d !== 0 ? s[0] + g * d : s, C = B * P * (1 - P) / 2, N = ps(A), z = ds(A), X = P + C * (-0.14861 * N + 1.78277 * z), tt = P + C * (-0.29227 * N - 0.90649 * z), rt = P + C * (1.97294 * N);
        return ho(ls([X * 255, tt * 255, rt * 255, 1]));
      };
      return v.start = function(g) {
        return g == null ? r : (r = g, v);
      }, v.rotations = function(g) {
        return g == null ? o : (o = g, v);
      }, v.gamma = function(g) {
        return g == null ? u : (u = g, v);
      }, v.hue = function(g) {
        return g == null ? s : (s = g, $a(s) === "array" ? (d = s[1] - s[0], d === 0 && (s = s[1])) : d = 0, v);
      }, v.lightness = function(g) {
        return g == null ? f : ($a(g) === "array" ? (f = g, c = g[1] - g[0]) : (f = [g, g], c = 0), v);
      }, v.scale = function() {
        return ho.scale(v);
      }, v.hue(s), v;
    }, vs = q, gs = "0123456789abcdef", _s = Math.floor, As = Math.random, ys = function() {
      for (var r = "#", o = 0; o < 6; o++)
        r += gs.charAt(_s(As() * 16));
      return new vs(r, "hex");
    }, to = F, uo = Math.log, bs = Math.pow, ws = Math.floor, xs = Math.abs, lo = function(r, o) {
      o === void 0 && (o = null);
      var s = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return to(r) === "object" && (r = Object.values(r)), r.forEach(function(u) {
        o && to(u) === "object" && (u = u[o]), u != null && !isNaN(u) && (s.values.push(u), s.sum += u, u < s.min && (s.min = u), u > s.max && (s.max = u), s.count += 1);
      }), s.domain = [s.min, s.max], s.limits = function(u, f) {
        return co(s, u, f);
      }, s;
    }, co = function(r, o, s) {
      o === void 0 && (o = "equal"), s === void 0 && (s = 7), to(r) == "array" && (r = lo(r));
      var u = r.min, f = r.max, d = r.values.sort(function(io, no) {
        return io - no;
      });
      if (s === 1)
        return [u, f];
      var c = [];
      if (o.substr(0, 1) === "c" && (c.push(u), c.push(f)), o.substr(0, 1) === "e") {
        c.push(u);
        for (var v = 1; v < s; v++)
          c.push(u + v / s * (f - u));
        c.push(f);
      } else if (o.substr(0, 1) === "l") {
        if (u <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var g = Math.LOG10E * uo(u), A = Math.LOG10E * uo(f);
        c.push(u);
        for (var P = 1; P < s; P++)
          c.push(bs(10, g + P / s * (A - g)));
        c.push(f);
      } else if (o.substr(0, 1) === "q") {
        c.push(u);
        for (var B = 1; B < s; B++) {
          var C = (d.length - 1) * B / s, N = ws(C);
          if (N === C)
            c.push(d[N]);
          else {
            var z = C - N;
            c.push(d[N] * (1 - z) + d[N + 1] * z);
          }
        }
        c.push(f);
      } else if (o.substr(0, 1) === "k") {
        var X, tt = d.length, rt = new Array(tt), ot = new Array(s), zt = !0, Bt = 0, Vt = null;
        Vt = [], Vt.push(u);
        for (var it = 1; it < s; it++)
          Vt.push(u + it / s * (f - u));
        for (Vt.push(f); zt; ) {
          for (var E = 0; E < s; E++)
            ot[E] = 0;
          for (var H = 0; H < tt; H++)
            for (var J = d[H], Y = Number.MAX_VALUE, Nt = void 0, mt = 0; mt < s; mt++) {
              var at = xs(Vt[mt] - J);
              at < Y && (Y = at, Nt = mt), ot[Nt]++, rt[H] = Nt;
            }
          for (var ut = new Array(s), lt = 0; lt < s; lt++)
            ut[lt] = null;
          for (var ct = 0; ct < tt; ct++)
            X = rt[ct], ut[X] === null ? ut[X] = d[ct] : ut[X] += d[ct];
          for (var le = 0; le < s; le++)
            ut[le] *= 1 / ot[le];
          zt = !1;
          for (var Ue = 0; Ue < s; Ue++)
            if (ut[Ue] !== Vt[Ue]) {
              zt = !0;
              break;
            }
          Vt = ut, Bt++, Bt > 200 && (zt = !1);
        }
        for (var He = {}, Di = 0; Di < s; Di++)
          He[Di] = [];
        for (var Zi = 0; Zi < tt; Zi++)
          X = rt[Zi], He[X].push(d[Zi]);
        for (var Le = [], hi = 0; hi < s; hi++)
          Le.push(He[hi][0]), Le.push(He[hi][He[hi].length - 1]);
        Le = Le.sort(function(io, no) {
          return io - no;
        }), c.push(Le[0]);
        for (var zn = 1; zn < Le.length; zn += 2) {
          var ui = Le[zn];
          !isNaN(ui) && c.indexOf(ui) === -1 && c.push(ui);
        }
      }
      return c;
    }, fo = { analyze: lo, limits: co }, po = q, Ps = function(r, o) {
      r = new po(r), o = new po(o);
      var s = r.luminance(), u = o.luminance();
      return s > u ? (s + 0.05) / (u + 0.05) : (u + 0.05) / (s + 0.05);
    }, mo = q, Pe = Math.sqrt, Ct = Math.pow, Ls = Math.min, Cs = Math.max, vo = Math.atan2, go = Math.abs, Hr = Math.cos, _o = Math.sin, Es = Math.exp, Ao = Math.PI, ks = function(r, o, s, u, f) {
      s === void 0 && (s = 1), u === void 0 && (u = 1), f === void 0 && (f = 1);
      var d = function(ui) {
        return 360 * ui / (2 * Ao);
      }, c = function(ui) {
        return 2 * Ao * ui / 360;
      };
      r = new mo(r), o = new mo(o);
      var v = Array.from(r.lab()), g = v[0], A = v[1], P = v[2], B = Array.from(o.lab()), C = B[0], N = B[1], z = B[2], X = (g + C) / 2, tt = Pe(Ct(A, 2) + Ct(P, 2)), rt = Pe(Ct(N, 2) + Ct(z, 2)), ot = (tt + rt) / 2, zt = 0.5 * (1 - Pe(Ct(ot, 7) / (Ct(ot, 7) + Ct(25, 7)))), Bt = A * (1 + zt), Vt = N * (1 + zt), it = Pe(Ct(Bt, 2) + Ct(P, 2)), E = Pe(Ct(Vt, 2) + Ct(z, 2)), H = (it + E) / 2, J = d(vo(P, Bt)), Y = d(vo(z, Vt)), Nt = J >= 0 ? J : J + 360, mt = Y >= 0 ? Y : Y + 360, at = go(Nt - mt) > 180 ? (Nt + mt + 360) / 2 : (Nt + mt) / 2, ut = 1 - 0.17 * Hr(c(at - 30)) + 0.24 * Hr(c(2 * at)) + 0.32 * Hr(c(3 * at + 6)) - 0.2 * Hr(c(4 * at - 63)), lt = mt - Nt;
      lt = go(lt) <= 180 ? lt : mt <= Nt ? lt + 360 : lt - 360, lt = 2 * Pe(it * E) * _o(c(lt) / 2);
      var ct = C - g, le = E - it, Ue = 1 + 0.015 * Ct(X - 50, 2) / Pe(20 + Ct(X - 50, 2)), He = 1 + 0.045 * H, Di = 1 + 0.015 * H * ut, Zi = 30 * Es(-Ct((at - 275) / 25, 2)), Le = 2 * Pe(Ct(H, 7) / (Ct(H, 7) + Ct(25, 7))), hi = -Le * _o(2 * c(Zi)), zn = Pe(Ct(ct / (s * Ue), 2) + Ct(le / (u * He), 2) + Ct(lt / (f * Di), 2) + hi * (le / (u * He)) * (lt / (f * Di)));
      return Cs(0, Ls(100, zn));
    }, yo = q, Ts = function(r, o, s) {
      s === void 0 && (s = "lab"), r = new yo(r), o = new yo(o);
      var u = r.get(s), f = o.get(s), d = 0;
      for (var c in u) {
        var v = (u[c] || 0) - (f[c] || 0);
        d += v * v;
      }
      return Math.sqrt(d);
    }, Is = q, Ms = function() {
      for (var r = [], o = arguments.length; o--; )
        r[o] = arguments[o];
      try {
        return new (Function.prototype.bind.apply(Is, [null].concat(r)))(), !0;
      } catch {
        return !1;
      }
    }, bo = bt, wo = Ya, Bs = {
      cool: function() {
        return wo([bo.hsl(180, 1, 0.9), bo.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return wo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Qr = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, eo = 0, xo = Object.keys(Qr); eo < xo.length; eo += 1) {
      var Po = xo[eo];
      Qr[Po.toLowerCase()] = Qr[Po];
    }
    var Ss = Qr, Mt = bt;
    Mt.average = qo, Mt.bezier = ts, Mt.blend = us, Mt.cubehelix = ms, Mt.mix = Mt.interpolate = j, Mt.random = ys, Mt.scale = Ya, Mt.analyze = fo.analyze, Mt.contrast = Ps, Mt.deltaE = ks, Mt.distance = Ts, Mt.limits = fo.limits, Mt.valid = Ms, Mt.scales = Bs, Mt.colors = Li, Mt.brewer = Ss;
    var Os = Mt;
    return Os;
  });
})(Io);
var Ds = Io.exports;
const Gr = /* @__PURE__ */ ko(Ds), Qe = class Qe {
  /**
   * Converts a color to its hexadecimal representation.
   *
   * @param {string | number | chroma.Color} color - The color to convert.
   * @return {string} The hexadecimal representation of the color.
   */
  static colorToHex(y) {
    return Gr(y).hex();
  }
};
/**
 * Init random hex color
 *
 * @returns {string} Random hex color
 */
S(Qe, "initRandomHexColor", () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`), /**
 * Returns a list of random hex colors.
 * @param {number} count - Number of colors to generate.
 * @param notSimilarColor - If true, generated colors will not be similar to each other.
 * @param deltaE - The maximum difference between colors to be considered "similar".
 * @param allowLowerDetailE - If true, deltaE will be lowered if too many similar colors are generated.
 * @returns {string[]} List of generated hex colors.
 */
S(Qe, "initRandomHexColorList", (y, p = !0, k = 10, b = !0) => {
  const T = [];
  let I = 0;
  for (; T.length < y; ) {
    const U = Qe.initRandomHexColor();
    if (p && T.some(
      (F) => Gr.deltaE(F, U) < k || F === U
    )) {
      I++, b && I % 10 === 0 && k > 1 && (k -= 1, k <= 0 && (k = 1));
      continue;
    }
    T.push(U);
  }
  return T;
}), /**
 * 初始化一组包含指定数量的RGB颜色的列表。
 * @param {number} count - 列表中要生成的颜色数量。
 * @param isBlackFirst - 是否从黑色开始生成颜色。
 * @returns {string[]} 一个RGB颜色数组。
 */
S(Qe, "initRGBColorListWithScaleMode", (y, p = !1) => {
  const k = [
    "rgb(0, 0, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)"
  ];
  return Gr.scale(p ? k : k.reverse()).mode("rgb").colors(y);
}), /**
 * 初始化一组包含指定数量的RGB颜色的列表。
 * @param {number} count - 要生成的颜色数量。
 * @param isBlackFirst - 是否从黑色开始生成颜色。
 * @returns 一个RGB颜色数组。
 */
S(Qe, "initRGBColorList", (y, p = !1) => {
  const k = [], b = [0, 255], T = [0, 255], I = [0, 255], U = Math.ceil(Math.pow(y, 1 / 3)), O = (b[1] - b[0]) / U, F = (T[1] - T[0]) / U, st = (I[1] - I[0]) / U;
  let Z = b[p ? 0 : 1], V = T[p ? 0 : 1], vt = I[p ? 0 : 1];
  for (let Et = 0; Et < y; Et++) {
    const x = "#" + Math.floor(Z).toString(16).padStart(2, "0") + Math.floor(V).toString(16).padStart(2, "0") + Math.floor(vt).toString(16).padStart(2, "0");
    k.push(x), Z = Z + (p ? O : -1 * O), Z < b[0] && !p ? (Z = b[1] - (b[0] - Z), V = V - F, V < T[0] && (V = T[1] - (T[0] - V), vt = vt - st, vt < I[0] && console.warn(vt))) : Z > b[1] && p && (Z = b[0] + (Z - b[1]), V = V + F, V > T[1] && (V = T[0] + (V - T[1]), vt = vt + st, vt > I[1] && console.warn(vt)));
  }
  return k;
}), //   public static InitRGBColorList = (count: number) => {
//     // Initialize an empty array to hold the generated colors.
//     ColorList.value = [];
//     // Calculate the number of colors in one dimension.
//     const oneColorCount = Math.ceil(Math.pow(count, 1 / 3));
//     // Calculate the offset for each color in one dimension.
//     const oneColorOffset = 255 / oneColorCount;
//     let total = 0;
//     // Iterate over each color in the three dimensions.
//     for (let i = 0; i < oneColorCount; i++) {
//       // Calculate the red component of the color.
//       const colorR = Math.floor(oneColorOffset * i)
//         .toString(16)
//         .padStart(2, "0");
//       for (let j = 0; j < oneColorCount; j++) {
//         // Calculate the green component of the color.
//         const colorG = Math.floor(oneColorOffset * j)
//           .toString(16)
//           .padStart(2, "0");
//         for (let k = 0; k < oneColorCount; k++) {
//           // Calculate the blue component of the color.
//           const colorB = Math.floor(oneColorOffset * k)
//             .toString(16)
//             .padStart(2, "0");
//           // Construct the color string from the RGB components.
//           const color = "#" + colorR + colorG + colorB;
//           total++;
//           // Log the color and its position in the 3D grid to the console.
//           console.log(
//             // Use CSS to display the color string as the color.
//             "%c" + color + "\t(" + i + "," + j + "," + k + ")",
//             "color: " + color,
//             total
//           );
//           // Add the color to the list of generated colors.
//           ColorList.value.push(color);
//         }
//       }
//     }
//   };
/**
 * 初始化一组包含指定数量的HSV颜色的列表。
 * @param {number} count - 要生成的颜色数量。
 * @param isBlackFirst - 是否将黑色作为第一个颜色。
 * @returns {string[]} 一个HSV颜色数组。
 */
S(Qe, "initHSVColorList", (y, p = !1) => {
  const k = [], b = [0, 360], T = [20, 100], I = [20, 100], U = Math.pow(
    y / ((b[1] - b[0]) / 100 * ((T[1] - T[0]) / 100) * ((I[1] - I[0]) / 100)),
    1 / 3
  ), O = (b[1] - b[0]) / (U * 3.6), F = (T[1] - T[0]) / U, st = (I[1] - I[0]) / U;
  let Z = b[1], V = T[1], vt = I[1];
  for (let Et = 0; Et < y; Et++) {
    const x = Gr.hsv(Z, V / 100, vt / 100);
    k.push(x.hex()), Z -= O, Z < b[0] && (Z = b[1] - (b[0] - Z), p ? (vt -= st, vt < I[0] && (vt = I[1] - (I[0] - vt), V -= F, V < T[0] && console.warn("Saturation is out of range:", V))) : (V -= F, V < T[0] && (V = T[1] - (T[0] - V), vt -= st, vt < I[0] && console.warn("Value is out of range:", vt))));
  }
  return k;
});
let Kr = Qe;
class ao {
}
/**
 * Returns the computed value of a specified CSS property for an element with the given class name.
 * If the class name or property name is not provided, returns null.
 * @param className - The class name of the element
 * @param propertyName - The name of the CSS property
 * @returns The computed value of the CSS property, or null if the element or property cannot be found
 */
S(ao, "getStyleValueByClassName", (y, p) => {
  if (!y || !p)
    return null;
  for (const k of document.styleSheets)
    for (const b of k.cssRules)
      if (b instanceof CSSStyleRule && b.selectorText.startsWith(`.${y}`)) {
        const T = document.querySelector(
          b.selectorText
        );
        if (!T)
          continue;
        return window.getComputedStyle(T).getPropertyValue(p);
      }
  return null;
});
class Zs {
  constructor() {
    S(this, "MetersPerPixel", 1);
    S(this, "HeightInPixels", 100);
    S(this, "WidthInPixels", 100);
    S(this, "OriginPixelY", 0);
    S(this, "OriginPixelX", 0);
    /**
     * 计算将一个给定大小的地图适配到一个给定大小的视图所需的最小缩放级别。
     *
     * @param viewWidth 视图的宽度。
     * @param viewHeight 视图的高度。
     * @param mapWidth 地图的宽度。
     * @param mapHeight 地图的高度。
     * @returns 适配地图到视图所需的最小缩放级别。
     */
    S(this, "calculateMinZoom", (y, p, k, b) => {
      const T = Math.min(
        y / k,
        p / b
      );
      return Math.log(T) / Math.LN2;
    });
    /**
     * 计算将一个给定大小的地图适配到一个给定大小的视图所需的最大缩放级别。
     *
     * @param viewWidth 视图的宽度。
     * @param viewHeight 视图的高度。
     * @param mapWidth 地图的宽度。
     * @param mapHeight 地图的高度。
     * @returns 适配地图到视图所需的最小缩放级别。
     */
    S(this, "calculateMaxZoom", (y, p, k, b) => {
      const T = Math.max(
        y / k,
        p / b
      );
      return Math.log(T) / Math.LN2;
    });
    /**
     * 计算二维平面上两点之间的距离。
     *
     * @param {number} x1 - 第一个点的 x 坐标。
     * @param {number} y1 - 第一个点的 y 坐标。
     * @param {number} x2 - 第二个点的 x 坐标。
     * @param {number} y2 - 第二个点的 y 坐标。
     * @return {number} 两点之间的距离。
     */
    S(this, "calculateDistance", (y, p, k, b) => Math.hypot(k - y, b - p));
    /**
     * 将X和Y坐标转换成Leaflet地图坐标。
     *
     * @param {number} X - X坐标。
     * @param {number} Y - Y坐标。
     * @returns {L.LatLngTuple} - 计算得到的中心点。
     */
    S(this, "convertCoordinatesToLeafletMapPosition", (y, p) => [
      // 计算中心点的Y坐标
      p / (this.MetersPerPixel ?? 1) + ((this.HeightInPixels ?? 0) - (this.OriginPixelY ?? 0)),
      // 计算中心点的X坐标
      y / (this.MetersPerPixel ?? 1) + (0 - (this.OriginPixelX ?? 0))
    ]);
    /**
     * 根据一组的轨迹的平均纬度和经度计算该组的中心坐标。
     *
     * @param {CLETrack[]} group - 要计算中心坐标的轨迹组。
     * @returns {L.LatLngTuple} - 该组的中心坐标。
     */
    S(this, "calculateGroupCenterPosition", (y) => {
      const p = y.reduce(
        ({ x: T, y: I }, U) => ({
          x: T + U.X,
          y: I + U.Y
        }),
        { x: 0, y: 0 }
      ), k = p.x / y.length, b = p.y / y.length;
      return this.convertCoordinatesToLeafletMapPosition(k, b);
    });
    /**
     * 根据给定的X和Y坐标计算正方形边界坐标。
     * @param {number} X - X坐标。
     * @param {number} Y - Y坐标。
     * @returns {number[][]} - 包含正方形边界左上角和右下角坐标的数组。
     */
    S(this, "calculateSquareBounds", (y, p) => {
      const k = this.convertCoordinatesToLeafletMapPosition(y, p), b = 0.5 / (this.MetersPerPixel ?? 1);
      return Array.from([
        [k[0] + b, k[1] - b],
        [k[0] - b, k[1] + b]
      ]);
    });
    /**
     * 将给定点集合转换为包含每个点的纬度和经度的LatLngExpression数组。
     *
     * @param points - 一个点的数组，每个点由纬度和经度组成的数组表示。
     * @returns {L.LatLngExpression[]} - 包含每个点的纬度和经度的LatLngExpression数组。
     */
    S(this, "convertPointsToLatLngExpressions", (y) => (y ?? []).map(
      ([k, b]) => this.convertCoordinatesToLeafletMapPosition(k, b)
    ));
  }
}
const Lo = { TRUE: "Y", FALSE: "N" }, Co = new URL("data:image/png;base64,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", import.meta.url).href, Rs = new URL("data:image/png;base64,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", import.meta.url).href, Fs = new URL("data:image/png;base64,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", import.meta.url).href, Us = new URL("data:image/png;base64,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", import.meta.url).href, Hs = new URL("data:image/png;base64,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", import.meta.url).href;
class Qs {
  constructor() {
    // const CLEMapStore = useCLEMapStore();
    // const GlobalThemeStore = useGlobalThemeStore();
    S(this, "Set", (y, p) => {
      if (this.hasOwnProperty(y)) {
        const k = Object.getOwnPropertyDescriptor(this, y);
        k ? (console.warn("old value: ", k, p), k.value = p, console.warn("new value: ", k, p)) : console.log("Object is undefined or null");
      } else
        console.log(y + "没有对应属性！");
      return this;
    });
    S(this, "Get", (y) => {
      if (this.hasOwnProperty(y)) {
        const p = Object.getOwnPropertyDescriptor(this, y);
        if (p)
          return console.log("属性( " + y + " ):	" + p.value), p.value;
        console.log("Object is undefined or null");
      } else
        console.log(y + "没有对应属性！");
    });
    S(this, "LeafletEx", new Zs());
    S(this, "showOption", !1);
    S(this, "enableAxis", !0);
    S(this, "enableArea", !0);
    S(this, "enableAreaName", !0);
    S(this, "enableTrackUpdate", !1);
    // private CLEInfoData: CLEInfo | null = null;
    S(this, "CLEMapData", null);
    S(this, "CLEMapImageData", "");
    /** 分组后的轨迹数据 */
    S(this, "trackGroupData", {});
    /** 分组后的位置数据 */
    S(this, "positionGroupData", {});
    S(this, "SearchType4PositionValue", Ri.AwbNo);
    S(this, "SearchType4TrackValue", Ri.AwbNo);
    // 地图视图的高宽
    S(this, "mapHeight", 1080);
    S(this, "mapWidth", 1920);
    S(this, "mapMinZoom", -1);
    S(this, "mapMaxZoom", 5);
    S(this, "mapZoom", -1);
    S(this, "ThemeOpacity1", "0.5");
    S(this, "ThemeOpacity5", "0.5");
    S(this, "ThemePlaceholderColor", "#000000");
    S(this, "ThemeName", "dark");
    S(this, "ColorList", []);
    S(this, "ThisMap", null);
    S(this, "mapImageGroup", new At.LayerGroup());
    S(this, "axisGroup", new At.LayerGroup());
    S(this, "areaGroup", new At.LayerGroup());
    S(this, "cargoAreaGroup", new At.LayerGroup());
    S(this, "cargoMarkerGroup", new At.LayerGroup());
    S(this, "trackGroup", new At.LayerGroup());
    // #region watch
    // watch(
    //   () => GlobalThemeStore.Theme,
    //   () => {
    //     initAreas();
    //     initAxis();
    //   }
    // );
    S(this, "UpdateTheme", (y = "dark", p = 0.5, k = 0.5, b = "#000000") => {
      this.ThemeName = y, this.ThemeOpacity1 = p.toString(), this.ThemeOpacity5 = k.toString(), this.ThemePlaceholderColor = b, this.initAreas(), this.initAxis();
    });
    // watch(
    //   () => enableAxis.value,
    //   () => {
    //     initAxis();
    //   }
    // );
    S(this, "UpdateAxis", (y = !1) => {
      this.enableAxis = y, this.initAxis();
    });
    // watch(
    //   () => enableArea.value,
    //   () => {
    //     initAreas();
    //   }
    // );
    S(this, "UpdateArea", (y = !1) => {
      this.enableArea = y, this.initAreas();
    });
    // watch(
    //   () => enableAreaName.value,
    //   () => {
    //     initAreas();
    //   }
    // );
    S(this, "UpdateAreaName", (y = !1) => {
      this.enableAreaName = y, this.initAreas();
    });
    // watch(
    //   () => enableTrackUpdate.value,
    //   () => {
    //     trackGroup.clearLayers();
    //     cargoAreaGroup.clearLayers();
    //     cargoMarkerGroup.clearLayers();
    //     positionGroupData = {};
    //     trackGroupData = {};
    //   }
    // );
    S(this, "UpdateTrackUpdate", (y = !1) => {
      this.enableTrackUpdate = y, this.trackGroup.clearLayers(), this.cargoAreaGroup.clearLayers(), this.cargoMarkerGroup.clearLayers(), this.positionGroupData = {}, this.trackGroupData = {};
    });
    // #endregion
    S(this, "onMounted", () => {
      let y = ao.getStyleValueByClassName(
        "fullPage",
        "width"
      ), p = ao.getStyleValueByClassName(
        "fullPage",
        "height"
      );
      y ? y = Number.parseInt(y.replace("px", "")) : y = window.innerWidth, p ? p = Number.parseInt(p.replace("px", "")) : p = window.innerHeight, this.mapHeight = p, this.mapWidth = y, this.ThisMap = new At.Map("canvasBox"), this.ThisMap.removeControl(this.ThisMap.zoomControl), this.ThisMap.removeControl(this.ThisMap.attributionControl), this.ThisMap.options.zoomSnap = 0.1, this.ThisMap.options.zoomDelta = 0.1, this.ThisMap.options.crs = To.CRS.Simple, this.ThisMap.options.preferCanvas = !1, this.mapZoom = this.ThisMap.getZoom(), this.ThisMap.addLayer(this.cargoMarkerGroup), this.ThisMap.addLayer(this.cargoAreaGroup), this.ThisMap.addLayer(this.mapImageGroup), this.ThisMap.addLayer(this.areaGroup), this.ThisMap.addLayer(this.axisGroup), this.ThisMap.addLayer(this.trackGroup), this.ThisMap.off("zoomend", this.zoomUpdated), this.ThisMap.on("zoomend", this.zoomUpdated), this.showOption = !0, this.SetMapImage();
    });
    S(this, "onBeforeUnmount", () => {
      var y;
      (y = this.ThisMap) == null || y.remove();
    });
    // #region CLE 地图相关
    /** 初始化 CLE Info */
    // public InitCLEInfo = (cleInfo: CLEInfo | null) => {
    //   if (!cleInfo || (this.CLEInfoData && this.CLEInfoData.Id == cleInfo.Id))
    //     return;
    //   // 保存变量，下次进入该方法时，可判断是否为相同的CLEInfo
    //   this.CLEInfoData = cleInfo;
    // };
    /** 初始化 CLE this.ThisMap */
    S(this, "InitCLEMap", (y, p) => {
      !y || this.CLEMapData && this.CLEMapData.Id == y.Id || !p || (this.CLEMapData = y, this.CLEMapImageData = p, this.LeafletEx.MetersPerPixel = this.CLEMapData.MetersPerPixel ?? 1, this.LeafletEx.HeightInPixels = this.CLEMapData.HeightInPixels ?? 100, this.LeafletEx.WidthInPixels = this.CLEMapData.WidthInPixels ?? 100, this.LeafletEx.OriginPixelX = this.CLEMapData.OriginPixelX ?? 100, this.LeafletEx.OriginPixelY = this.CLEMapData.OriginPixelY ?? 100, this.SetMapImage());
    });
    /**
     * 设置地图图像，并配置地图缩放和视图。
     */
    S(this, "SetMapImage", () => {
      var k, b, T, I, U, O, F, st, Z, V;
      if (this.mapMinZoom = this.LeafletEx.calculateMinZoom(
        this.mapWidth,
        this.mapHeight,
        ((k = this.CLEMapData) == null ? void 0 : k.WidthInPixels) ?? 400,
        ((b = this.CLEMapData) == null ? void 0 : b.HeightInPixels) ?? 400
      ) * 1.1, this.mapMaxZoom = this.LeafletEx.calculateMaxZoom(
        this.mapWidth,
        this.mapHeight,
        1 / (((T = this.CLEMapData) == null ? void 0 : T.MetersPerPixel) ?? 1 / this.mapWidth),
        1 / (((I = this.CLEMapData) == null ? void 0 : I.MetersPerPixel) ?? 1 / this.mapHeight)
      ) * 1.1, !this.ThisMap)
        return;
      this.ThisMap.setMinZoom(this.mapMinZoom), this.ThisMap.setMaxZoom(this.mapMaxZoom), this.ThisMap.setView(
        [
          (((U = this.CLEMapData) == null ? void 0 : U.HeightInPixels) ?? 100) / 2,
          (((O = this.CLEMapData) == null ? void 0 : O.WidthInPixels) ?? 100) / 2
        ],
        this.mapMinZoom
      );
      const y = [
        [0, 0],
        [
          this.CLEMapImageData ? ((F = this.CLEMapData) == null ? void 0 : F.HeightInPixels) ?? 100 : 100,
          this.CLEMapImageData ? ((st = this.CLEMapData) == null ? void 0 : st.WidthInPixels) ?? 100 : 100
        ]
      ];
      this.ThisMap.fitBounds(y), this.ThisMap.setMaxBounds(y), this.mapImageGroup.clearLayers(), this.cargoAreaGroup.clearLayers(), this.cargoMarkerGroup.clearLayers(), this.trackGroup.clearLayers();
      const p = new At.ImageOverlay(
        this.CLEMapImageData ? this.CLEMapImageData : Us,
        [
          [0, 0],
          [
            this.CLEMapImageData ? ((Z = this.CLEMapData) == null ? void 0 : Z.HeightInPixels) ?? 100 : 100,
            this.CLEMapImageData ? ((V = this.CLEMapData) == null ? void 0 : V.WidthInPixels) ?? 100 : 100
          ]
        ]
      );
      this.mapImageGroup.addLayer(p), this.initAreas(), this.initAxis();
    });
    /**
     * 初始化地图上的区域。
     * 清除现有的区域图层，并根据区域数据添加新的区域多边形。
     */
    S(this, "initAreas", () => {
      var T;
      if (this.areaGroup.clearLayers(), !this.enableArea || !this.CLEMapData)
        return;
      const y = ((T = this.CLEMapData) == null ? void 0 : T.Areas) ?? [], p = Number.parseFloat(this.ThemeOpacity1 ?? "1"), k = Number.parseFloat(this.ThemeOpacity5 ?? "0.35"), b = this.ThemePlaceholderColor;
      for (const I of y) {
        const U = {
          stroke: !0,
          color: b,
          weight: 5,
          opacity: p,
          fill: !0,
          fillColor: b,
          fillOpacity: k,
          className: "areaPolygon"
        }, O = new At.Polygon(
          this.LeafletEx.convertPointsToLatLngExpressions(I.Points),
          U
        );
        if (this.enableAreaName) {
          const F = new At.Tooltip({
            content: I.Name,
            permanent: !0,
            direction: "center",
            className: "areaName"
          });
          O.bindTooltip(F);
        }
        this.areaGroup.addLayer(O);
      }
    });
    /**
     * 初始化坐标轴
     */
    S(this, "initAxis", () => {
      if (this.axisGroup.clearLayers(), !this.enableAxis || !this.CLEMapData)
        return;
      const {
        OriginPixelX: y = 0,
        OriginPixelY: p = 0,
        HeightInPixels: k = 0,
        WidthInPixels: b = 0
      } = this.CLEMapData, T = new At.Polyline(
        [
          [k - p, b],
          [k - p, 0 - y]
        ],
        {
          color: "red",
          opacity: 1,
          weight: 3
        }
      ), I = new At.Polyline(
        [
          [k - p, 0 - y],
          [k, 0 - y]
        ],
        {
          color: "green",
          opacity: 1,
          weight: 3
        }
      );
      this.axisGroup.addLayer(T), this.axisGroup.addLayer(I);
    });
    // #endregion
    // #region 轨迹渲染相关
    /**
     * 初始化轨迹分组数据
     * @param data 轨迹数据
     */
    S(this, "initTrackGroupData", (y) => {
      if (console.debug(y), this.cargoAreaGroup.clearLayers(), this.cargoMarkerGroup.clearLayers(), this.positionGroupData = {}, !this.enableTrackUpdate)
        this.trackGroup.clearLayers();
      else {
        const b = new Set(Object.keys(y));
        this.trackGroup.eachLayer((T) => {
          T.options.attribution && !b.has(T.options.attribution.slice(11)) && (T.remove(), T.clearAllEventListeners(), this.trackGroup.removeLayer(T));
        });
      }
      const p = Object.entries(y), k = p.length;
      this.ColorList.length != k && (this.ColorList = Kr.initHSVColorList(
        k,
        this.ThemeName !== "dark"
      ), console.debug("初始化 ColorList", this.ColorList));
      for (let b = 0; b < p.length; b++) {
        const [T, I] = p[b], U = this.trackGroupData[T], O = this.trackGroup.getLayers().find((F) => F.options.attribution == "trackLayer_" + T);
        if (O && U && U.length <= I.length) {
          if (!(U && U.length > 0))
            continue;
          const F = U[U.length - 1], st = [];
          for (let Z = I.length - 1; Z >= 0; Z--) {
            const V = I[Z];
            if (V.Id != F.Id)
              st.push(V);
            else
              break;
          }
          if (st.length <= 0)
            continue;
          this.updateTrackGroup(
            st.reverse().filter((Z) => Z.IsDelete != Lo.TRUE).map(({ X: Z, Y: V }) => [Z, V]),
            this.ColorList[b],
            O
          );
        } else
          O && O instanceof At.LayerGroup && (O.eachLayer((F) => {
            F.clearAllEventListeners(), F.remove(), O.removeLayer(F);
          }), O.clearAllEventListeners(), O.remove(), this.trackGroup.removeLayer(O)), this.createTrackGroup(
            I.filter((F) => F.IsDelete != Lo.TRUE).map(({ X: F, Y: st }) => [F, st]),
            this.ColorList[b],
            T
          ), console.debug(this.trackGroup);
      }
      this.trackGroupData = y;
    });
    /**
     * 创建新的轨迹
     */
    S(this, "createTrackGroup", (y, p = "red", k = "") => {
      if (!y || !y.length)
        return;
      const b = new At.LayerGroup();
      b.options.attribution = "trackLayer_" + k;
      const T = this.LeafletEx.convertPointsToLatLngExpressions(y), I = new At.Polyline(T, {
        attribution: "track_" + k,
        color: p,
        opacity: 1,
        weight: 3
      });
      b.addLayer(I);
      const U = new At.Marker(T[0], {
        attribution: "marker4Start_" + k,
        icon: new At.DivIcon({
          iconAnchor: [15, 0],
          className: "marker-track-icon",
          html: `<img src="${Co}" alt="Custom Icon">`
        })
      }), O = new At.Marker(T[T.length - 1], {
        attribution: "marker4End_" + k,
        icon: new At.DivIcon({
          iconAnchor: [0, 0],
          className: this.enableTrackUpdate ? "marker-updateTrack-icon" : "marker-track-icon",
          html: `<img src="${this.enableTrackUpdate ? Hs : Rs}" alt="Custom Icon">`
        })
      });
      T.length > 1 && b.addLayer(U), b.addLayer(O), this.trackGroup.addLayer(b);
    });
    /**
     * 更新原有的轨迹
     */
    S(this, "updateTrackGroup", (y, p = "red", k) => {
      var O;
      if (!y || !y.length || !k)
        return;
      const b = ((O = k.options.attribution) == null ? void 0 : O.split("_")[1]) ?? "";
      if (!b)
        return;
      const T = this.LeafletEx.convertPointsToLatLngExpressions(y), I = k.getLayers().find((F) => F.options.attribution == "track_" + b);
      if (!I)
        return;
      if (T.forEach((F) => {
        I.addLatLng(F);
      }), I.setStyle({ color: p }), !k.getLayers().find((F) => F.options.attribution == "marker4Start_" + b)) {
        const F = new At.Marker(T[0], {
          attribution: "marker4Start_" + b,
          icon: new At.DivIcon({
            iconAnchor: [15, 0],
            className: "marker-track-icon",
            html: `<img src="${Co}" alt="Custom Icon">`
          })
        });
        k.addLayer(F);
      }
      const U = k.getLayers().find(
        (F) => F.options.attribution == "marker4End_" + b
      );
      U && U.setLatLng(T[T.length - 1]);
    });
    // #endregion
    // #region （货物）位置渲染相关
    S(this, "initCargoPosition", (y) => {
      console.debug(y);
      const p = Object.entries(y).length;
      this.ColorList.length != p && (this.ColorList = Kr.initHSVColorList(
        p,
        this.ThemeName !== "dark"
      ), console.debug("初始化 ColorList", this.ColorList)), this.positionGroupData = y, this.trackGroup.clearLayers(), this.cargoAreaGroup.clearLayers(), this.cargoMarkerGroup.clearLayers(), this.initCargoArea(), this.zoomUpdated();
    });
    /**
     * 初始化货物区域
     */
    S(this, "initCargoArea", () => {
      this.cargoAreaGroup.clearLayers(), Object.entries(this.positionGroupData).forEach(
        ([y, p], k) => {
          p.forEach((b) => {
            const T = this.LeafletEx.calculateSquareBounds(
              b.X,
              b.Y
            ), I = new At.Rectangle(
              [
                [T[0][0], T[0][1]],
                [T[1][0], T[1][1]]
              ],
              {
                stroke: !1,
                fill: !0,
                fillColor: this.ColorList[k],
                fillOpacity: 1,
                className: "cargoArea"
              }
            ), U = new At.Popup({
              content: y
            });
            I.bindPopup(U), this.cargoAreaGroup.addLayer(I);
          });
        }
      );
    });
    /**
     * 初始化地图上的货物标记。
     */
    S(this, "initCargo", () => {
      if (this.cargoMarkerGroup.clearLayers(), !this.positionGroupData)
        return;
      Object.values(this.positionGroupData).flatMap(
        (p) => this.AggregationDisplay(p)
      ).forEach((p) => {
        const k = this.LeafletEx.calculateGroupCenterPosition(p), b = this.calculateCargoText(
          this.SearchType4PositionValue,
          p[0]
        ), T = p.length, I = new At.Marker([k[0], k[1]], {
          icon: new At.DivIcon({
            iconAnchor: [0, 0],
            className: "marker-icon",
            html: `<img src="${Fs}" alt="Custom Icon" /><div class='marker-text'>${b}</div>` + (T > 1 ? `<div class='marker-count'>${T}</div>` : "")
          })
        });
        this.cargoMarkerGroup.addLayer(I);
      });
    });
    /**
     * 根据搜索类型和位置计算货物文本。
     *
     * @param {CLEBeaconTrailSearchType} searchType - 搜索类型。
     * @param {CLETrack} position - 货物位置。
     * @returns {string} - 计算得到的货物文本。
     */
    S(this, "calculateCargoText", (y, p) => {
      var k, b, T;
      switch (y) {
        case Ri.AwbNo:
          return (T = p.AwbNo) == null ? void 0 : T.slice(
            (((k = p.AwbNo) == null ? void 0 : k.length) ?? 4) - 4,
            ((b = p.AwbNo) == null ? void 0 : b.length) ?? 0
          );
        case Ri.BeaconMac:
          return p.Mac;
        case Ri.ULD:
          return p.ULD;
        default:
          return p.RFID;
      }
    });
    /**
     * 根据给定的位置数组，计算位置分组。
     *
     * @param {CLETrack[]} positions - 一个包含位置信息的CLETrack对象数组。
     * @return {CLETrack[][]} 一个包含位置分组的CLETrack对象数组的数组。
     */
    S(this, "AggregationDisplay", (y) => {
      const k = [];
      for (let I = 0; I < y.length; I++) {
        const U = y[I], O = this.LeafletEx.convertCoordinatesToLeafletMapPosition(
          U.X,
          U.Y
        ), F = [U];
        for (let st = 0; st < y.length; st++) {
          const Z = y[st];
          if (U === Z)
            continue;
          const V = this.LeafletEx.convertCoordinatesToLeafletMapPosition(
            Z.X,
            Z.Y
          );
          (this.LeafletEx.calculateDistance(
            O[0],
            O[1],
            V[0],
            V[1]
          ) ?? 0) * Math.pow(2, this.mapZoom) <= 50 && F.push(Z);
        }
        k.push(F);
      }
      const b = [], T = /* @__PURE__ */ new Set();
      for (let I = 0; I < k.length; I++) {
        if (T.has(I))
          continue;
        const U = k[I];
        if (T.add(I), U.length === 1) {
          b.push([U[0]]);
          continue;
        }
        const O = [...U];
        for (let F = I + 1; F < k.length; F++) {
          if (T.has(F))
            continue;
          const st = k[F];
          st.length !== 1 && U.some((Z) => st.includes(Z)) && (O.push(...st), T.add(F));
        }
        b.push([...new Set(O)]);
      }
      return b;
    });
    // #endregion
    /**
     * 监听地图缩放事件
     */
    S(this, "zoomUpdated", () => {
      var y;
      this.mapZoom = ((y = this.ThisMap) == null ? void 0 : y.getZoom()) ?? -1, console.debug(`zoomUpdated	${this.mapZoom}`), this.initCargo();
    });
  }
}
const Ks = () => new Qs();
export {
  Ks as InitMapWorld
};
