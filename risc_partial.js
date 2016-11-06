var RiscLogin = function(n) {
  var a = {}, c = "";
  this.initialize = function() {
    (elem = document.getElementById(n)) ? (window.addEventListener("mousedown", function() {
      c = c + "md," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("mouseup", function() {
      c = c + "mu," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("mousemove", function() {
      c = c + "mm," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("keydown", function() {
      c = c + "kd," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("keyup", function() {
      c = c + "ku," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("resize", function() {
      c = c + "rs," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("scroll", function() {
      c = c + "sc," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("wheel", function() {
      c = c + "wl," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("paste", function() {
      c = c + "pst," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("load", function() {
      c = c + "ld," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("error", function() {
      c = c + "er," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("hashchange", function() {
      c = c + "hc," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("offline", function() {
      c = c + "ofl," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("online", function() {
      c = c + "onl," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("pagehide", function() {
      c = c + "ph," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("pageshow", function() {
      c = c + "ps," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("popstate", function() {
      c = c + "pps," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("unload", function() {
      c = c + "unl," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("dragstart", function() {
      c = c + "dgs," + String(Date.now()) + ":";
      b();
    }), window.addEventListener("dragend", function() {
      c = c + "dge," + String(Date.now()) + ":";
      b();
    }), e()) : window.alert("Cannot find RISC data form field!");
  };
  var b = function() {
    a.events = c;
    document.getElementById(n).value = JSON.stringify(a);
  }, e = function() {
    var b = navigator.appVersion, c = navigator.userAgent, e = navigator.appName, k = navigator.appName, l = "" + parseFloat(b), m = parseInt(b, 10), d, q;
    -1 != (d = c.indexOf("Opera")) ? (k = "Opera", l = c.substring(d + 6), -1 != (d = c.indexOf("Version")) && (l = c.substring(d + 8))) : -1 != (d = c.indexOf("MSIE")) ? (k = "Microsoft Internet Explorer", l = c.substring(d + 5)) : -1 != (d = c.indexOf("Chrome")) ? (k = "Chrome", l = c.substring(d + 7)) : -1 != (d = c.indexOf("Safari")) ? (k = "Safari", l = c.substring(d + 7), -1 != (d = c.indexOf("Version")) && (l = c.substring(d + 8))) : -1 != (d = c.indexOf("Firefox")) ? (k = "Firefox", l = c.substring(d + 
    8)) : (m = c.lastIndexOf(" ") + 1) < (d = c.lastIndexOf("/")) && (k = c.substring(m, d), l = c.substring(d + 1), k.toLowerCase() == k.toUpperCase() && (k = e));
    -1 != (q = l.indexOf(";")) && (l = l.substring(0, q));
    -1 != (q = l.indexOf(" ")) && (l = l.substring(0, q));
    m = parseInt("" + l, 10);
    isNaN(m) && (l = "" + parseFloat(b), m = parseInt(b, 10));
    q = navigator.platform;
    d = "Unknown OS";
    -1 != b.indexOf("Win") && (d = "Windows");
    -1 != b.indexOf("Mac") && (d = "MacOS");
    -1 != b.indexOf("X11") && (d = "UNIX");
    if (-1 != b.indexOf("Linux") || -1 != c.indexOf("Linux")) {
      d = "Linux";
    }
    var v = navigator.language, t = document.compatMode, r = document.defaultCharset, w = navigator.hardwareConcurrency || 0, G = screen.width, H = screen.height, I = window.innerWidth, J = window.innerHeight, K = navigator.cookieEnabled, y = null, x = null;
    navigator.javaEnabled && (y = navigator.javaEnabled());
    var p = new function() {
      var a = this;
      a.installed = !1;
      a.raw = "";
      a.major = -1;
      a.minor = -1;
      a.revision = -1;
      a.revisionStr = "";
      var b = [{name:"ShockwaveFlash.ShockwaveFlash.7", version:function(a) {
        return c(a);
      }}, {name:"ShockwaveFlash.ShockwaveFlash.6", version:function(a) {
        var b = "6,0,21";
        try {
          a.AllowScriptAccess = "always", b = c(a);
        } catch (L) {
        }
        return b;
      }}, {name:"ShockwaveFlash.ShockwaveFlash", version:function(a) {
        return c(a);
      }}], c = function(a) {
        var b = -1;
        try {
          b = a.GetVariable("$version");
        } catch (L) {
        }
        return b;
      };
      a.majorAtLeast = function(b) {
        return a.major >= b;
      };
      a.minorAtLeast = function(b) {
        return a.minor >= b;
      };
      a.revisionAtLeast = function(b) {
        return a.revision >= b;
      };
      a.versionAtLeast = function(b) {
        var c = [a.major, a.minor, a.revision], d = Math.min(c.length, arguments.length);
        for (i = 0;i < d;i++) {
          if (c[i] >= arguments[i]) {
            if (!(i + 1 < d && c[i] == arguments[i])) {
              return !0;
            }
          } else {
            return !1;
          }
        }
      };
      a.FlashDetect = function() {
        var c, d, g, e, k;
        if (navigator.plugins && 0 < navigator.plugins.length) {
          var f = navigator.mimeTypes;
          if (f && f["application/x-shockwave-flash"] && f["application/x-shockwave-flash"].enabledPlugin && f["application/x-shockwave-flash"].enabledPlugin.description) {
            c = f = f["application/x-shockwave-flash"].enabledPlugin.description;
            var f = c.split(/ +/), h = f[2].split(/\./), f = f[3];
            d = parseInt(h[0], 10);
            g = parseInt(h[1], 10);
            e = f;
            k = parseInt(f.replace(/[a-zA-Z]/g, ""), 10) || a.revision;
            a.raw = c;
            a.major = d;
            a.minor = g;
            a.revisionStr = e;
            a.revision = k;
            a.installed = !0;
          }
        } else {
          if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript) {
            for (f = -1, h = 0;h < b.length && -1 == f;h++) {
              c = -1;
              try {
                c = new ActiveXObject(b[h].name);
              } catch (P) {
                c = {activeXError:!0};
              }
              c.activeXError || (a.installed = !0, f = b[h].version(c), -1 != f && (c = f, e = c.split(","), d = parseInt(e[0].split(" ")[1], 10), g = parseInt(e[1], 10), k = parseInt(e[2], 10), e = e[2], a.raw = c, a.major = d, a.minor = g, a.revision = k, a.revisionStr = e));
            }
          }
        }
      }();
    }, x = "", x = p.installed ? p.major + "." + p.minor : "0.0", p = !1;
    if ("Microsoft Internet Explorer" == e) {
      try {
        new ActiveXObject("AgControl.AgControl"), p = !0;
      } catch (z) {
      }
    } else {
      try {
        navigator.plugins["Silverlight Plug-In"] && (p = !0);
      } catch (z) {
      }
    }
    var A = [!1, !1, !1, !1], u = function(a) {
      A[a] = !0;
      for (a = 0;4 > a && A[a];a++) {
      }
    }, M = navigator.onLine, N = navigator.product, O = navigator.productSub, B = navigator.buildID, C = navigator.pixelDepth, D = navigator.cpuClass, E = navigator.msDoNotTrack;
    if (window.localStorage) {
      try {
        var F = window.localStorage.getItem("kvc");
      } catch (z) {
      }
    }
    a = {};
    (function() {
      var b = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
      if (b) {
        var c = function(b) {
          b.split("\r\n").forEach(function(b) {
            if (~b.indexOf("a=candidate")) {
              b = b.split(" ");
              var c = b[4];
              "host" === b[7] && (a.webRtcLocalIP = c);
            } else {
              ~b.indexOf("c=") && (b = b.split(" "), c = b[2], a.webRtcLocalIP = c);
            }
          });
          u(3);
        }, d = new b({iceServers:[]});
        d.createDataChannel("", {reliable:!1});
        d.onicecandidate = function(a) {
          a.candidate && c("a=" + a.candidate.candidate);
        };
        d.createOffer(function(a) {
          c(a.sdp);
          d.setLocalDescription(a);
          u(0);
        }, function(a) {
          console.warn("offer failed", a);
        });
        Object.create(null)["0.0.0.0"] = !1;
      }
    })();
    (function() {
      (new Fingerprint2({})).get(function(b, c) {
        a.fingerPrintHash = b;
        for (var d = "canvas webgl language navigator_platform resolution user_agent".split(" "), e = 0;e < c.length;e++) {
          var g = c[e].key;
          -1 == d.indexOf(g) && (a[g] = c[e].value);
        }
        document.getElementById(n).value = JSON.stringify(a);
        u(1);
      });
    })();
    (function() {
      navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.enumerateDevices().then(function(b) {
        a.mediaDevices = b;
        document.getElementById(n).value = JSON.stringify(a);
        u(2);
      })["catch"](function(a) {
      });
    })();
    a.browserName = k;
    a.fullVersion = l;
    a.majorVersion = m;
    a.appName = e;
    a.appVersion = b;
    a.userAgent = c;
    a.osName = d;
    a.platform = q;
    a.language = v;
    a.compatMode = t;
    a.defaultCharset = r;
    a.numCores = w;
    a.screenWidth = G;
    a.screenHeight = H;
    a.windowWidth = I;
    a.windowHeight = J;
    a.cookieEnabled = K;
    a.javaEnabled = y;
    a.flashVersion = x;
    a.slEnabled = p;
    a.onLine = M;
    a.product = N;
    a.productSub = O;
    a.buildID = B ? B : "unknown";
    a.pixelDepth = C ? C : "unknown";
    a.cpuClass = D ? D : "unknown";
    a.msDoNotTrack = E ? E : "unknown";
    F && (a.digitalCookie = F);
    document.getElementById(n).value = JSON.stringify(a);
  };
};
!function(n, a, c) {
  "undefined" != typeof module && module.exports ? module.exports = c() : "function" == typeof define && define.amd ? define(c) : a[n] = c();
}("Fingerprint2", this, function() {
  Array.prototype.indexOf || (Array.prototype.indexOf = function(a, c) {
    var b;
    if (null == this) {
      throw new TypeError("'this' is null or undefined");
    }
    var e = Object(this), g = e.length >>> 0;
    if (0 === g) {
      return -1;
    }
    b = +c || 0;
    if (Math.abs(b) === 1 / 0 && (b = 0), b >= g) {
      return -1;
    }
    for (b = Math.max(0 <= b ? b : g - Math.abs(b), 0);g > b;) {
      if (b in e && e[b] === a) {
        return b;
      }
      b++;
    }
    return -1;
  });
  var n = function(a) {
    this.options = this.extend(a, {swfContainerId:"fingerprint", swfPath:"flash/compiled/FontList.swf", detectScreenOrientation:!0, sortPluginsFor:[/palemoon/i]});
    this.nativeForEach = Array.prototype.forEach;
    this.nativeMap = Array.prototype.map;
  };
  return n.prototype = {extend:function(a, c) {
    if (null == a) {
      return c;
    }
    for (var b in a) {
      null != a[b] && c[b] !== a[b] && (c[b] = a[b]);
    }
    return c;
  }, log:function(a) {
    window.console && console.log(a);
  }, get:function(a) {
    var c = [], c = this.userAgentKey(c), c = this.languageKey(c), c = this.colorDepthKey(c), c = this.screenResolutionKey(c), c = this.availableScreenResolutionKey(c), c = this.timezoneOffsetKey(c), c = this.sessionStorageKey(c), c = this.localStorageKey(c), c = this.indexedDbKey(c), c = this.addBehaviorKey(c), c = this.openDatabaseKey(c), c = this.cpuClassKey(c), c = this.platformKey(c), c = this.doNotTrackKey(c), c = this.pluginsKey(c), c = this.canvasKey(c), c = this.webglKey(c), c = this.adBlockKey(c), 
    c = this.hasLiedLanguagesKey(c), c = this.hasLiedResolutionKey(c), c = this.hasLiedOsKey(c), c = this.hasLiedBrowserKey(c), c = this.touchSupportKey(c), b = this;
    this.fontsKey(c, function(c) {
      var e = [];
      b.each(c, function(a) {
        var b = a.value;
        "undefined" != typeof a.value.join && (b = a.value.join(";"));
        e.push(b);
      });
      var f = b.x64hash128(e.join("~~~"), 31);
      return a(f, c);
    });
  }, userAgentKey:function(a) {
    return this.options.excludeUserAgent || a.push({key:"user_agent", value:this.getUserAgent()}), a;
  }, getUserAgent:function() {
    return navigator.userAgent;
  }, languageKey:function(a) {
    return this.options.excludeLanguage || a.push({key:"language", value:navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage}), a;
  }, colorDepthKey:function(a) {
    return this.options.excludeColorDepth || a.push({key:"color_depth", value:screen.colorDepth}), a;
  }, screenResolutionKey:function(a) {
    return this.options.excludeScreenResolution ? a : this.getScreenResolution(a);
  }, getScreenResolution:function(a) {
    var c;
    return c = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], "undefined" != typeof c && a.push({key:"resolution", value:c}), a;
  }, availableScreenResolutionKey:function(a) {
    return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a);
  }, getAvailableScreenResolution:function(a) {
    var c;
    return screen.availWidth && screen.availHeight && (c = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), "undefined" != typeof c && a.push({key:"available_resolution", value:c}), a;
  }, timezoneOffsetKey:function(a) {
    return this.options.excludeTimezoneOffset || a.push({key:"timezone_offset", value:(new Date).getTimezoneOffset()}), a;
  }, sessionStorageKey:function(a) {
    return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.push({key:"session_storage", value:1}), a;
  }, localStorageKey:function(a) {
    return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.push({key:"local_storage", value:1}), a;
  }, indexedDbKey:function(a) {
    return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.push({key:"indexed_db", value:1}), a;
  }, addBehaviorKey:function(a) {
    return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && a.push({key:"add_behavior", value:1}), a;
  }, openDatabaseKey:function(a) {
    return !this.options.excludeOpenDatabase && window.openDatabase && a.push({key:"open_database", value:1}), a;
  }, cpuClassKey:function(a) {
    return this.options.excludeCpuClass || a.push({key:"cpu_class", value:this.getNavigatorCpuClass()}), a;
  }, platformKey:function(a) {
    return this.options.excludePlatform || a.push({key:"navigator_platform", value:this.getNavigatorPlatform()}), a;
  }, doNotTrackKey:function(a) {
    return this.options.excludeDoNotTrack || a.push({key:"do_not_track", value:this.getDoNotTrack()}), a;
  }, canvasKey:function(a) {
    return !this.options.excludeCanvas && this.isCanvasSupported() && a.push({key:"canvas", value:this.getCanvasFp()}), a;
  }, webglKey:function(a) {
    return this.options.excludeWebGL ? a : this.isWebGlSupported() ? (a.push({key:"webgl", value:this.getWebglFp()}), a) : a;
  }, adBlockKey:function(a) {
    return this.options.excludeAdBlock || a.push({key:"adblock", value:this.getAdBlock()}), a;
  }, hasLiedLanguagesKey:function(a) {
    return this.options.excludeHasLiedLanguages || a.push({key:"has_lied_languages", value:this.getHasLiedLanguages()}), a;
  }, hasLiedResolutionKey:function(a) {
    return this.options.excludeHasLiedResolution || a.push({key:"has_lied_resolution", value:this.getHasLiedResolution()}), a;
  }, hasLiedOsKey:function(a) {
    return this.options.excludeHasLiedOs || a.push({key:"has_lied_os", value:this.getHasLiedOs()}), a;
  }, hasLiedBrowserKey:function(a) {
    return this.options.excludeHasLiedBrowser || a.push({key:"has_lied_browser", value:this.getHasLiedBrowser()}), a;
  }, fontsKey:function(a, c) {
    return this.options.excludeJsFonts ? this.flashFontsKey(a, c) : this.jsFontsKey(a, c);
  }, flashFontsKey:function(a, c) {
    return this.options.excludeFlashFonts ? c(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? c(a) : void this.loadSwfAndDetectFonts(function(b) {
      a.push({key:"swf_fonts", value:b.join(";")});
      c(a);
    }) : c(a);
  }, jsFontsKey:function(a, c) {
    var b = this;
    return setTimeout(function() {
      var e = ["monospace", "sans-serif", "serif"], g = document.getElementsByTagName("body")[0], f = document.createElement("span");
      f.style.fontSize = "72px";
      f.innerHTML = "mmmmmmmmmmlli";
      var h = {}, k = {}, l;
      for (l in e) {
        f.style.fontFamily = e[l], g.appendChild(f), h[e[l]] = f.offsetWidth, k[e[l]] = f.offsetHeight, g.removeChild(f);
      }
      l = "Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";");
      var m = "Abadi MT Condensed Light;Academy Engraved LET;ADOBE CASLON PRO;Adobe Garamond;ADOBE GARAMOND PRO;Agency FB;Aharoni;Albertus Extra Bold;Albertus Medium;Algerian;Amazone BT;American Typewriter;American Typewriter Condensed;AmerType Md BT;Andalus;Angsana New;AngsanaUPC;Antique Olive;Aparajita;Apple Chancery;Apple Color Emoji;Apple SD Gothic Neo;Arabic Typesetting;ARCHER;ARNO PRO;Arrus BT;Aurora Cn BT;AvantGarde Bk BT;AvantGarde Md BT;AVENIR;Ayuthaya;Bandy;Bangla Sangam MN;Bank Gothic;BankGothic Md BT;Baskerville;Baskerville Old Face;Batang;BatangChe;Bauer Bodoni;Bauhaus 93;Bazooka;Bell MT;Bembo;Benguiat Bk BT;Berlin Sans FB;Berlin Sans FB Demi;Bernard MT Condensed;BernhardFashion BT;BernhardMod BT;Big Caslon;BinnerD;Blackadder ITC;BlairMdITC TT;Bodoni 72;Bodoni 72 Oldstyle;Bodoni 72 Smallcaps;Bodoni MT;Bodoni MT Black;Bodoni MT Condensed;Bodoni MT Poster Compressed;Bookshelf Symbol 7;Boulder;Bradley Hand;Bradley Hand ITC;Bremen Bd BT;Britannic Bold;Broadway;Browallia New;BrowalliaUPC;Brush Script MT;Californian FB;Calisto MT;Calligrapher;Candara;CaslonOpnface BT;Castellar;Centaur;Cezanne;CG Omega;CG Times;Chalkboard;Chalkboard SE;Chalkduster;Charlesworth;Charter Bd BT;Charter BT;Chaucer;ChelthmITC Bk BT;Chiller;Clarendon;Clarendon Condensed;CloisterBlack BT;Cochin;Colonna MT;Constantia;Cooper Black;Copperplate;Copperplate Gothic;Copperplate Gothic Bold;Copperplate Gothic Light;CopperplGoth Bd BT;Corbel;Cordia New;CordiaUPC;Cornerstone;Coronet;Cuckoo;Curlz MT;DaunPenh;Dauphin;David;DB LCD Temp;DELICIOUS;Denmark;DFKai-SB;Didot;DilleniaUPC;DIN;DokChampa;Dotum;DotumChe;Ebrima;Edwardian Script ITC;Elephant;English 111 Vivace BT;Engravers MT;EngraversGothic BT;Eras Bold ITC;Eras Demi ITC;Eras Light ITC;Eras Medium ITC;EucrosiaUPC;Euphemia;Euphemia UCAS;EUROSTILE;Exotc350 Bd BT;FangSong;Felix Titling;Fixedsys;FONTIN;Footlight MT Light;Forte;FrankRuehl;Fransiscan;Freefrm721 Blk BT;FreesiaUPC;Freestyle Script;French Script MT;FrnkGothITC Bk BT;Fruitger;FRUTIGER;Futura;Futura Bk BT;Futura Lt BT;Futura Md BT;Futura ZBlk BT;FuturaBlack BT;Gabriola;Galliard BT;Gautami;Geeza Pro;Geometr231 BT;Geometr231 Hv BT;Geometr231 Lt BT;GeoSlab 703 Lt BT;GeoSlab 703 XBd BT;Gigi;Gill Sans;Gill Sans MT;Gill Sans MT Condensed;Gill Sans MT Ext Condensed Bold;Gill Sans Ultra Bold;Gill Sans Ultra Bold Condensed;Gisha;Gloucester MT Extra Condensed;GOTHAM;GOTHAM BOLD;Goudy Old Style;Goudy Stout;GoudyHandtooled BT;GoudyOLSt BT;Gujarati Sangam MN;Gulim;GulimChe;Gungsuh;GungsuhChe;Gurmukhi MN;Haettenschweiler;Harlow Solid Italic;Harrington;Heather;Heiti SC;Heiti TC;HELV;Herald;High Tower Text;Hiragino Kaku Gothic ProN;Hiragino Mincho ProN;Hoefler Text;Humanst 521 Cn BT;Humanst521 BT;Humanst521 Lt BT;Imprint MT Shadow;Incised901 Bd BT;Incised901 BT;Incised901 Lt BT;INCONSOLATA;Informal Roman;Informal011 BT;INTERSTATE;IrisUPC;Iskoola Pota;JasmineUPC;Jazz LET;Jenson;Jester;Jokerman;Juice ITC;Kabel Bk BT;Kabel Ult BT;Kailasa;KaiTi;Kalinga;Kannada Sangam MN;Kartika;Kaufmann Bd BT;Kaufmann BT;Khmer UI;KodchiangUPC;Kokila;Korinna BT;Kristen ITC;Krungthep;Kunstler Script;Lao UI;Latha;Leelawadee;Letter Gothic;Levenim MT;LilyUPC;Lithograph;Lithograph Light;Long Island;Lydian BT;Magneto;Maiandra GD;Malayalam Sangam MN;Malgun Gothic;Mangal;Marigold;Marion;Marker Felt;Market;Marlett;Matisse ITC;Matura MT Script Capitals;Meiryo;Meiryo UI;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;MingLiU-ExtB;Minion;Minion Pro;Miriam;Miriam Fixed;Mistral;Modern;Modern No. 20;Mona Lisa Solid ITC TT;Mongolian Baiti;MONO;MoolBoran;Mrs Eaves;MS LineDraw;MS Mincho;MS PMincho;MS Reference Specialty;MS UI Gothic;MT Extra;MUSEO;MV Boli;Nadeem;Narkisim;NEVIS;News Gothic;News GothicMT;NewsGoth BT;Niagara Engraved;Niagara Solid;Noteworthy;NSimSun;Nyala;OCR A Extended;Old Century;Old English Text MT;Onyx;Onyx BT;OPTIMA;Oriya Sangam MN;OSAKA;OzHandicraft BT;Palace Script MT;Papyrus;Parchment;Party LET;Pegasus;Perpetua;Perpetua Titling MT;PetitaBold;Pickwick;Plantagenet Cherokee;Playbill;PMingLiU;PMingLiU-ExtB;Poor Richard;Poster;PosterBodoni BT;PRINCETOWN LET;Pristina;PTBarnum BT;Pythagoras;Raavi;Rage Italic;Ravie;Ribbon131 Bd BT;Rockwell;Rockwell Condensed;Rockwell Extra Bold;Rod;Roman;Sakkal Majalla;Santa Fe LET;Savoye LET;Sceptre;Script;Script MT Bold;SCRIPTINA;Serifa;Serifa BT;Serifa Th BT;ShelleyVolante BT;Sherwood;Shonar Bangla;Showcard Gothic;Shruti;Signboard;SILKSCREEN;SimHei;Simplified Arabic;Simplified Arabic Fixed;SimSun;SimSun-ExtB;Sinhala Sangam MN;Sketch Rockwell;Skia;Small Fonts;Snap ITC;Snell Roundhand;Socket;Souvenir Lt BT;Staccato222 BT;Steamer;Stencil;Storybook;Styllo;Subway;Swis721 BlkEx BT;Swiss911 XCm BT;Sylfaen;Synchro LET;System;Tamil Sangam MN;Technical;Teletype;Telugu Sangam MN;Tempus Sans ITC;Terminal;Thonburi;Traditional Arabic;Trajan;TRAJAN PRO;Tristan;Tubular;Tunga;Tw Cen MT;Tw Cen MT Condensed;Tw Cen MT Condensed Extra Bold;TypoUpright BT;Unicorn;Univers;Univers CE 55 Medium;Univers Condensed;Utsaah;Vagabond;Vani;Vijaya;Viner Hand ITC;VisualUI;Vivaldi;Vladimir Script;Vrinda;Westminster;WHITNEY;Wide Latin;ZapfEllipt BT;ZapfHumnst BT;ZapfHumnst Dm BT;Zapfino;Zurich BlkEx BT;Zurich Ex BT;ZWAdobeF".split(";");
      b.options.extendedJsFonts && (l = l.concat(m));
      for (var m = [], d = 0, n = l.length;n > d;d++) {
        var v = l[d], t = !1, r = void 0;
        for (r in e) {
          f.style.fontFamily = v + "," + e[r];
          g.appendChild(f);
          var w = f.offsetWidth !== h[e[r]] || f.offsetHeight !== k[e[r]];
          g.removeChild(f);
          t = t || w;
        }
        t && m.push(l[d]);
      }
      a.push({key:"js_fonts", value:m});
      c(a);
    }, 1);
  }, pluginsKey:function(a) {
    return this.options.excludePlugins || a.push(this.isIE() ? {key:"ie_plugins", value:this.getIEPlugins()} : {key:"regular_plugins", value:this.getRegularPlugins()}), a;
  }, getRegularPlugins:function() {
    for (var a = [], c = 0, b = navigator.plugins.length;b > c;c++) {
      a.push(navigator.plugins[c]);
    }
    return this.pluginsShouldBeSorted() && (a = a.sort(function(a, b) {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    })), this.map(a, function(a) {
      var b = this.map(a, function(a) {
        return [a.type, a.suffixes].join("~");
      }).join(",");
      return [a.name, a.description, b].join("::");
    }, this);
  }, getIEPlugins:function() {
    return window.ActiveXObject ? this.map("AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";"), 
    function(a) {
      try {
        return new ActiveXObject(a), a;
      } catch (c) {
        return null;
      }
    }) : [];
  }, pluginsShouldBeSorted:function() {
    for (var a = !1, c = 0, b = this.options.sortPluginsFor.length;b > c;c++) {
      if (navigator.userAgent.match(this.options.sortPluginsFor[c])) {
        a = !0;
        break;
      }
    }
    return a;
  }, touchSupportKey:function(a) {
    return this.options.excludeTouchSupport || a.push({key:"touch_support", value:this.getTouchSupport()}), a;
  }, hasSessionStorage:function() {
    try {
      return !!window.sessionStorage;
    } catch (a) {
      return !0;
    }
  }, hasLocalStorage:function() {
    try {
      return !!window.localStorage;
    } catch (a) {
      return !0;
    }
  }, hasIndexedDB:function() {
    return !!window.indexedDB;
  }, getNavigatorCpuClass:function() {
    return navigator.cpuClass ? navigator.cpuClass : "unknown";
  }, getNavigatorPlatform:function() {
    return navigator.platform ? navigator.platform : "unknown";
  }, getDoNotTrack:function() {
    return navigator.doNotTrack ? navigator.doNotTrack : "unknown";
  }, getTouchSupport:function() {
    var a = 0, c = !1;
    "undefined" != typeof navigator.maxTouchPoints ? a = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints);
    try {
      document.createEvent("TouchEvent"), c = !0;
    } catch (b) {
    }
    return [a, c, "ontouchstart" in window];
  }, getCanvasFp:function() {
    var a = [], c = document.createElement("canvas");
    c.width = 2E3;
    c.height = 200;
    c.style.display = "inline";
    var b = c.getContext("2d");
    return b.rect(0, 0, 10, 10), b.rect(2, 2, 6, 6), a.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.font = this.options.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123", b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.font = "18pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 
    4, 45), b.globalCompositeOperation = "multiply", b.fillStyle = "rgb(255,0,255)", b.beginPath(), b.arc(50, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(0,255,255)", b.beginPath(), b.arc(100, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,255,0)", b.beginPath(), b.arc(75, 100, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,0,255)", b.arc(75, 75, 75, 0, 2 * Math.PI, !0), b.arc(75, 75, 25, 0, 2 * Math.PI, !0), b.fill("evenodd"), 
    a.push("canvas fp:" + c.toDataURL()), a.join("~");
  }, getWebglFp:function() {
    var a, c = function(b) {
      return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + b[0] + ", " + b[1] + "]";
    };
    if (a = this.getWebglCanvas(), !a) {
      return null;
    }
    var b = [], e = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, e);
    var g = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
    a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
    e.itemSize = 3;
    e.numItems = 3;
    var g = a.createProgram(), f = a.createShader(a.VERTEX_SHADER);
    a.shaderSource(f, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
    a.compileShader(f);
    var h = a.createShader(a.FRAGMENT_SHADER);
    return a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), a.compileShader(h), a.attachShader(g, f), a.attachShader(g, h), a.linkProgram(g), a.useProgram(g), g.vertexPosAttrib = a.getAttribLocation(g, "attrVertex"), g.offsetUniform = a.getUniformLocation(g, "uniformOffset"), a.enableVertexAttribArray(g.vertexPosArray), a.vertexAttribPointer(g.vertexPosAttrib, e.itemSize, a.FLOAT, !1, 0, 0), a.uniform2f(g.offsetUniform, 
    1, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, e.numItems), null != a.canvas && b.push(a.canvas.toDataURL()), b.push("extensions:" + a.getSupportedExtensions().join(";")), b.push("webgl aliased line width range:" + c(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))), b.push("webgl aliased point size range:" + c(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))), b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)), b.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")), b.push("webgl blue bits:" + 
    a.getParameter(a.BLUE_BITS)), b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)), b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)), b.push("webgl max anisotropy:" + function(a) {
      var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
      return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null;
    }(a)), b.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), b.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)), b.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)), b.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)), b.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), b.push("webgl max texture size:" + 
    a.getParameter(a.MAX_TEXTURE_SIZE)), b.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)), b.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)), b.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), b.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)), b.push("webgl max viewport dims:" + c(a.getParameter(a.MAX_VIEWPORT_DIMS))), b.push("webgl red bits:" + a.getParameter(a.RED_BITS)), 
    b.push("webgl renderer:" + a.getParameter(a.RENDERER)), b.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)), b.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)), b.push("webgl vendor:" + a.getParameter(a.VENDOR)), b.push("webgl version:" + a.getParameter(a.VERSION)), a.getShaderPrecisionFormat ? (b.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), b.push("webgl vertex shader high float precision rangeMin:" + 
    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("webgl vertex shader medium float precision rangeMax:" + 
    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), b.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl fragment shader high float precision:" + 
    a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), b.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), b.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), b.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), b.push("webgl fragment shader medium float precision rangeMin:" + 
    a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), b.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), b.push("webgl fragment shader low float precision rangeMax:" + 
    a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), b.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), b.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), b.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), b.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, 
    a.MEDIUM_INT).precision), b.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), b.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, 
    a.LOW_INT).rangeMin), b.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), b.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), b.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), b.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, 
    a.HIGH_INT).rangeMax), b.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), b.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), b.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), b.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, 
    a.LOW_INT).precision), b.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), b.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), b.join("~")) : b.join("~");
  }, getAdBlock:function() {
    var a = document.createElement("div");
    a.setAttribute("id", "ads");
    try {
      return document.body.appendChild(a), document.getElementById("ads") ? !1 : !0;
    } catch (c) {
      return !1;
    }
  }, getHasLiedLanguages:function() {
    if ("undefined" != typeof navigator.languages) {
      try {
        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) {
          return !0;
        }
      } catch (a) {
        return !0;
      }
    }
    return !1;
  }, getHasLiedResolution:function() {
    return screen.width < screen.availWidth ? !0 : screen.height < screen.availHeight ? !0 : !1;
  }, getHasLiedOs:function() {
    var a;
    a = navigator.userAgent.toLowerCase();
    var c = navigator.oscpu, b = navigator.platform.toLowerCase();
    a = 0 <= a.indexOf("windows phone") ? "Windows Phone" : 0 <= a.indexOf("win") ? "Windows" : 0 <= a.indexOf("android") ? "Android" : 0 <= a.indexOf("linux") ? "Linux" : 0 <= a.indexOf("iphone") || 0 <= a.indexOf("ipad") ? "iOS" : 0 <= a.indexOf("mac") ? "Mac" : "Other";
    var e;
    return (e = "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1, e && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) || "undefined" != typeof c && ((c = c.toLowerCase(), 0 <= c.indexOf("win") && "Windows" !== a && "Windows Phone" !== a) || 0 <= c.indexOf("linux") && "Linux" !== a && "Android" !== a || 0 <= c.indexOf("mac") && "Mac" !== a && "iOS" !== a || 0 === c.indexOf("win") && 0 === c.indexOf("linux") && 0 <= c.indexOf("mac") && 
    "other" !== a) ? !0 : 0 <= b.indexOf("win") && "Windows" !== a && "Windows Phone" !== a ? !0 : (0 <= b.indexOf("linux") || 0 <= b.indexOf("android") || 0 <= b.indexOf("pike")) && "Linux" !== a && "Android" !== a ? !0 : (0 <= b.indexOf("mac") || 0 <= b.indexOf("ipad") || 0 <= b.indexOf("ipod") || 0 <= b.indexOf("iphone")) && "Mac" !== a && "iOS" !== a ? !0 : 0 === b.indexOf("win") && 0 === b.indexOf("linux") && 0 <= b.indexOf("mac") && "other" !== a ? !0 : "undefined" == typeof navigator.plugins && 
    "Windows" !== a && "Windows Phone" !== a ? !0 : !1;
  }, getHasLiedBrowser:function() {
    var a, c = navigator.userAgent.toLowerCase(), b = navigator.productSub;
    if (a = 0 <= c.indexOf("firefox") ? "Firefox" : 0 <= c.indexOf("opera") || 0 <= c.indexOf("opr") ? "Opera" : 0 <= c.indexOf("chrome") ? "Chrome" : 0 <= c.indexOf("safari") ? "Safari" : 0 <= c.indexOf("trident") ? "Internet Explorer" : "Other", ("Chrome" === a || "Safari" === a || "Opera" === a) && "20030107" !== b) {
      return !0;
    }
    c = eval.toString().length;
    if (37 === c && "Safari" !== a && "Firefox" !== a && "Other" !== a || 39 === c && "Internet Explorer" !== a && "Other" !== a || 33 === c && "Chrome" !== a && "Opera" !== a && "Other" !== a) {
      return !0;
    }
    var e;
    try {
      throw "a";
    } catch (g) {
      try {
        g.toSource(), e = !0;
      } catch (f) {
        e = !1;
      }
    }
    return e && "Firefox" !== a && "Other" !== a ? !0 : !1;
  }, isCanvasSupported:function() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"));
  }, isWebGlSupported:function() {
    if (!this.isCanvasSupported()) {
      return !1;
    }
    var a, c = document.createElement("canvas");
    try {
      a = c.getContext && (c.getContext("webgl") || c.getContext("experimental-webgl"));
    } catch (b) {
      a = !1;
    }
    return !!window.WebGLRenderingContext && !!a;
  }, isIE:function() {
    return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1;
  }, hasSwfObjectLoaded:function() {
    return "undefined" != typeof window.swfobject;
  }, hasMinFlashInstalled:function() {
    return swfobject.hasFlashPlayerVersion("9.0.0");
  }, addFlashDivNode:function() {
    var a = document.createElement("div");
    a.setAttribute("id", this.options.swfContainerId);
    document.body.appendChild(a);
  }, loadSwfAndDetectFonts:function(a) {
    window.___fp_swf_loaded = function(b) {
      a(b);
    };
    var c = this.options.swfContainerId;
    this.addFlashDivNode();
    swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, {onReady:"___fp_swf_loaded"}, {allowScriptAccess:"always", menu:"false"}, {});
  }, getWebglCanvas:function() {
    var a = document.createElement("canvas"), c = null;
    try {
      c = a.getContext("webgl") || a.getContext("experimental-webgl");
    } catch (b) {
    }
    return c || (c = null), c;
  }, each:function(a, c, b) {
    if (null !== a) {
      if (this.nativeForEach && a.forEach === this.nativeForEach) {
        a.forEach(c, b);
      } else {
        if (a.length === +a.length) {
          for (var e = 0, g = a.length;g > e && c.call(b, a[e], e, a) !== {};e++) {
          }
        } else {
          for (e in a) {
            if (a.hasOwnProperty(e) && c.call(b, a[e], e, a) === {}) {
              break;
            }
          }
        }
      }
    }
  }, map:function(a, c, b) {
    var e = [];
    return null == a ? e : this.nativeMap && a.map === this.nativeMap ? a.map(c, b) : (this.each(a, function(a, f, h) {
      e[e.length] = c.call(b, a, f, h);
    }), e);
  }, x64Add:function(a, c) {
    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
    c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
    var b = [0, 0, 0, 0];
    return b[3] += a[3] + c[3], b[2] += b[3] >>> 16, b[3] &= 65535, b[2] += a[2] + c[2], b[1] += b[2] >>> 16, b[2] &= 65535, b[1] += a[1] + c[1], b[0] += b[1] >>> 16, b[1] &= 65535, b[0] += a[0] + c[0], b[0] &= 65535, [b[0] << 16 | b[1], b[2] << 16 | b[3]];
  }, x64Multiply:function(a, c) {
    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
    c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
    var b = [0, 0, 0, 0];
    return b[3] += a[3] * c[3], b[2] += b[3] >>> 16, b[3] &= 65535, b[2] += a[2] * c[3], b[1] += b[2] >>> 16, b[2] &= 65535, b[2] += a[3] * c[2], b[1] += b[2] >>> 16, b[2] &= 65535, b[1] += a[1] * c[3], b[0] += b[1] >>> 16, b[1] &= 65535, b[1] += a[2] * c[2], b[0] += b[1] >>> 16, b[1] &= 65535, b[1] += a[3] * c[1], b[0] += b[1] >>> 16, b[1] &= 65535, b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0], b[0] &= 65535, [b[0] << 16 | b[1], b[2] << 16 | b[3]];
  }, x64Rotl:function(a, c) {
    return c %= 64, 32 === c ? [a[1], a[0]] : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c] : (c -= 32, [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]);
  }, x64LeftShift:function(a, c) {
    return c %= 64, 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0];
  }, x64Xor:function(a, c) {
    return [a[0] ^ c[0], a[1] ^ c[1]];
  }, x64Fmix:function(a) {
    return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), this.x64Xor(a, [0, a[0] >>> 1]);
  }, x64hash128:function(a, c) {
    a = a || "";
    c = c || 0;
    for (var b = a.length % 16, e = a.length - b, g = [0, c], f = [0, c], h, k, l = [2277735313, 289559509], m = [1291169091, 658871167], d = 0;e > d;d += 16) {
      h = [255 & a.charCodeAt(d + 4) | (255 & a.charCodeAt(d + 5)) << 8 | (255 & a.charCodeAt(d + 6)) << 16 | (255 & a.charCodeAt(d + 7)) << 24, 255 & a.charCodeAt(d) | (255 & a.charCodeAt(d + 1)) << 8 | (255 & a.charCodeAt(d + 2)) << 16 | (255 & a.charCodeAt(d + 3)) << 24], k = [255 & a.charCodeAt(d + 12) | (255 & a.charCodeAt(d + 13)) << 8 | (255 & a.charCodeAt(d + 14)) << 16 | (255 & a.charCodeAt(d + 15)) << 24, 255 & a.charCodeAt(d + 8) | (255 & a.charCodeAt(d + 9)) << 8 | (255 & a.charCodeAt(d + 
      10)) << 16 | (255 & a.charCodeAt(d + 11)) << 24], h = this.x64Multiply(h, l), h = this.x64Rotl(h, 31), h = this.x64Multiply(h, m), g = this.x64Xor(g, h), g = this.x64Rotl(g, 27), g = this.x64Add(g, f), g = this.x64Add(this.x64Multiply(g, [0, 5]), [0, 1390208809]), k = this.x64Multiply(k, m), k = this.x64Rotl(k, 33), k = this.x64Multiply(k, l), f = this.x64Xor(f, k), f = this.x64Rotl(f, 31), f = this.x64Add(f, g), f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 944331445]);
    }
    switch(h = [0, 0], k = [0, 0], b) {
      case 15:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 14)], 48));
      case 14:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 13)], 40));
      case 13:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 12)], 32));
      case 12:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 11)], 24));
      case 11:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 10)], 16));
      case 10:
        k = this.x64Xor(k, this.x64LeftShift([0, a.charCodeAt(d + 9)], 8));
      case 9:
        k = this.x64Xor(k, [0, a.charCodeAt(d + 8)]), k = this.x64Multiply(k, m), k = this.x64Rotl(k, 33), k = this.x64Multiply(k, l), f = this.x64Xor(f, k);
      case 8:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 7)], 56));
      case 7:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 6)], 48));
      case 6:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 5)], 40));
      case 5:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 4)], 32));
      case 4:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 3)], 24));
      case 3:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 2)], 16));
      case 2:
        h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(d + 1)], 8));
      case 1:
        h = this.x64Xor(h, [0, a.charCodeAt(d)]), h = this.x64Multiply(h, l), h = this.x64Rotl(h, 31), h = this.x64Multiply(h, m), g = this.x64Xor(g, h);
    }
    return g = this.x64Xor(g, [0, a.length]), f = this.x64Xor(f, [0, a.length]), g = this.x64Add(g, f), f = this.x64Add(f, g), g = this.x64Fmix(g), f = this.x64Fmix(f), g = this.x64Add(g, f), f = this.x64Add(f, g), ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (g[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8);
  }}, n.VERSION = "1.1.0", n;
});