//Thu Dec 26 2024 03:05:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
//Thu Dec 26 2024 03:02:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("\u752C\u6D3E");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(U) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (X) {
        return typeof X;
      } : function (X) {
        {
          return X && "function" == typeof Symbol && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X;
        }
      };
      return b(U);
    }
  }
  function c(U, V) {
    {
      var X = "undefined" != typeof Symbol && U[Symbol.iterator] || U["@@iterator"];
      if (!X) {
        {
          if (Array.isArray(U) || (X = d(U)) || V && U && "number" == typeof U.length) {
            {
              X && (U = X);
              var Y = 0;
              var Z = function () {};
              return {
                s: Z,
                n: function () {
                  {
                    var a5 = {
                      done: true
                    };
                    return Y >= U.length ? a5 : {
                      done: false,
                      value: U[Y++]
                    };
                  }
                },
                e: function (a5) {
                  throw a5;
                },
                f: Z
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var a0;
      var a1 = true;
      var a2 = false;
      return {
        s: function () {
          {
            X = X.call(U);
          }
        },
        n: function () {
          {
            var a6 = X.next();
            a1 = a6.done;
            return a6;
          }
        },
        e: function (a6) {
          {
            a2 = true;
            a0 = a6;
          }
        },
        f: function () {
          {
            try {
              {
                a1 || null == X.return || X.return();
              }
            } finally {
              {
                if (a2) {
                  throw a0;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(U, V) {
    {
      if (U) {
        {
          if ("string" == typeof U) {
            return f(U, V);
          }
          var W = {}.toString.call(U).slice(8, -1);
          "Object" === W && U.constructor && (W = U.constructor.name);
          return "Map" === W || "Set" === W ? Array.from(U) : "Arguments" === W || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W) ? f(U, V) : undefined;
        }
      }
    }
  }
  function f(U, V) {
    {
      (null == V || V > U.length) && (V = U.length);
      for (var W = 0, X = Array(V); W < V; W++) {
        X[W] = U[W];
      }
      return X;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return W;
      }
    };
    var V;
    var W = {
      wrap: a5,
      isGeneratorFunction: function (au) {
        {
          var av = "function" == typeof au && au.constructor;
          return !!av && (av === ad || "GeneratorFunction" === (av.displayName || av.name));
        }
      },
      mark: function (au) {
        Object.setPrototypeOf ? Object.setPrototypeOf(au, ae) : (au.__proto__ = ae, a4(au, a3, "GeneratorFunction"));
        au.prototype = Object.create(ai);
        return au;
      },
      awrap: function (au) {
        {
          var aw = {
            __await: au
          };
          return aw;
        }
      }
    };
    var X = Object.prototype;
    var Y = X.hasOwnProperty;
    var Z = Object.defineProperty || function (ar, as, at) {
      {
        ar[as] = at.value;
      }
    };
    var a0 = "function" == typeof Symbol ? Symbol : {};
    var a1 = a0.iterator || "@@iterator";
    var a2 = a0.asyncIterator || "@@asyncIterator";
    var a3 = a0.toStringTag || "@@toStringTag";
    function a4(ar, as, at) {
      {
        var au = {
          value: at,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ar, as, au);
        return ar[as];
      }
    }
    try {
      {
        a4({}, "");
      }
    } catch (as) {
      {
        a4 = function (au, av, aw) {
          return au[av] = aw;
        };
      }
    }
    function a5(au, av, aw, ax) {
      {
        var az = av && av.prototype instanceof ac ? av : ac;
        var aA = Object.create(az.prototype);
        var aB = new ap(ax || []);
        Z(aA, "_invoke", {
          value: al(au, aw, aB)
        });
        return aA;
      }
    }
    function a6(au, av, aw) {
      {
        try {
          {
            return {
              type: "normal",
              arg: au.call(av, aw)
            };
          }
        } catch (az) {
          {
            var ax = {
              type: "throw",
              arg: az
            };
            return ax;
          }
        }
      }
    }
    var a7 = "suspendedStart";
    var a8 = "suspendedYield";
    var a9 = "executing";
    var aa = "completed";
    var ab = {};
    function ac() {}
    function ad() {}
    function ae() {}
    var af = {};
    a4(af, a1, function () {
      {
        return this;
      }
    });
    var ag = Object.getPrototypeOf;
    var ah = ag && ag(ag(aq([])));
    ah && ah !== X && Y.call(ah, a1) && (af = ah);
    ae.prototype = ac.prototype = Object.create(af);
    var ai = ae.prototype;
    function aj(au) {
      {
        ["next", "throw", "return"].forEach(function (ax) {
          a4(au, ax, function (aA) {
            {
              return this._invoke(ax, aA);
            }
          });
        });
      }
    }
    function ak(au, av) {
      {
        function ay(az, aA, aB, aC) {
          {
            var aD = a6(au[az], au, aA);
            if ("throw" !== aD.type) {
              {
                var aE = aD.arg;
                var aF = aE.value;
                return aF && "object" == b(aF) && Y.call(aF, "__await") ? av.resolve(aF.__await).then(function (aH) {
                  {
                    ay("next", aH, aB, aC);
                  }
                }, function (aH) {
                  {
                    ay("throw", aH, aB, aC);
                  }
                }) : av.resolve(aF).then(function (aH) {
                  aE.value = aH;
                  aB(aE);
                }, function (aH) {
                  {
                    return ay("throw", aH, aB, aC);
                  }
                });
              }
            }
            aC(aD.arg);
          }
        }
        var ax;
        Z(this, "_invoke", {
          value: function (az, aA) {
            {
              function aD() {
                var aE;
                return new av(function (aG, aH) {
                  {
                    ay(az, aA, aG, aH);
                  }
                });
              }
              return ax = ax ? ax.then(aD, aD) : aD();
            }
          }
        });
      }
    }
    function al(au, av, aw) {
      {
        var ay = a7;
        return function (az, aA) {
          {
            if (ay === a9) {
              throw Error("Generator is already running");
            }
            if (ay === aa) {
              {
                if ("throw" === az) {
                  throw aA;
                }
                var aB = {
                  value: V,
                  done: true
                };
                return aB;
              }
            }
            for (aw.method = az, aw.arg = aA;;) {
              {
                var aC = aw.delegate;
                if (aC) {
                  {
                    var aD = am(aC, aw);
                    if (aD) {
                      {
                        if (aD === ab) {
                          continue;
                        }
                        return aD;
                      }
                    }
                  }
                }
                if ("next" === aw.method) {
                  aw.sent = aw._sent = aw.arg;
                } else {
                  if ("throw" === aw.method) {
                    {
                      if (ay === a7) {
                        throw ay = aa, aw.arg;
                      }
                      aw.dispatchException(aw.arg);
                    }
                  } else {
                    "return" === aw.method && aw.abrupt("return", aw.arg);
                  }
                }
                ay = a9;
                var aE = a6(au, av, aw);
                if ("normal" === aE.type) {
                  {
                    if (ay = aw.done ? aa : a8, aE.arg === ab) {
                      continue;
                    }
                    var aF = {
                      value: aE.arg,
                      done: aw.done
                    };
                    return aF;
                  }
                }
                "throw" === aE.type && (ay = aa, aw.method = "throw", aw.arg = aE.arg);
              }
            }
          }
        };
      }
    }
    function am(au, av) {
      {
        var aA = av.method;
        var aB = au.iterator[aA];
        if (aB === V) {
          av.delegate = null;
          "throw" === aA && au.iterator.return && (av.method = "return", av.arg = V, am(au, av), "throw" === av.method) || "return" !== aA && (av.method = "throw", av.arg = new TypeError("The iterator does not provide a '" + aA + "' method"));
          return ab;
        }
        var az = a6(aB, au.iterator, av.arg);
        if ("throw" === az.type) {
          av.method = "throw";
          av.arg = az.arg;
          av.delegate = null;
          return ab;
        }
        var aC = az.arg;
        return aC ? aC.done ? (av[au.resultName] = aC.value, av.next = au.nextLoc, "return" !== av.method && (av.method = "next", av.arg = V), av.delegate = null, ab) : aC : (av.method = "throw", av.arg = new TypeError("iterator result is not an object"), av.delegate = null, ab);
      }
    }
    function an(au) {
      {
        var ax = {
          tryLoc: au[0]
        };
        1 in au && (ax.catchLoc = au[1]);
        2 in au && (ax.finallyLoc = au[2], ax.afterLoc = au[3]);
        this.tryEntries.push(ax);
      }
    }
    function ao(au) {
      {
        var aw = au.completion || {};
        aw.type = "normal";
        delete aw.arg;
        au.completion = aw;
      }
    }
    function ap(au) {
      {
        var aw = {
          tryLoc: "root"
        };
        this.tryEntries = [aw];
        au.forEach(an, this);
        this.reset(true);
      }
    }
    function aq(au) {
      {
        if (au || "" === au) {
          {
            var aw = au[a1];
            if (aw) {
              return aw.call(au);
            }
            if ("function" == typeof au.next) {
              return au;
            }
            if (!isNaN(au.length)) {
              {
                var ax = -1;
                var ay = function aB() {
                  {
                    for (; ++ax < au.length;) {
                      if (Y.call(au, ax)) {
                        aB.value = au[ax];
                        aB.done = false;
                        return aB;
                      }
                    }
                    aB.value = V;
                    aB.done = true;
                    return aB;
                  }
                };
                return ay.next = ay;
              }
            }
          }
        }
        throw new TypeError(b(au) + " is not iterable");
      }
    }
    ad.prototype = ae;
    Z(ai, "constructor", {
      value: ae,
      configurable: true
    });
    Z(ae, "constructor", {
      value: ad,
      configurable: true
    });
    ad.displayName = a4(ae, a3, "GeneratorFunction");
    aj(ak.prototype);
    a4(ak.prototype, a2, function () {
      {
        return this;
      }
    });
    W.AsyncIterator = ak;
    W.async = function (au, av, aw, ax, ay) {
      {
        undefined === ay && (ay = Promise);
        var aA = new ak(a5(au, av, aw, ax), ay);
        return W.isGeneratorFunction(av) ? aA : aA.next().then(function (aB) {
          {
            return aB.done ? aB.value : aA.next();
          }
        });
      }
    };
    aj(ai);
    a4(ai, a3, "Generator");
    a4(ai, a1, function () {
      {
        return this;
      }
    });
    a4(ai, "toString", function () {
      return "[object Generator]";
    });
    W.keys = function (au) {
      {
        var aw = Object(au);
        var ax = [];
        for (var ay in aw) ax.push(ay);
        ax.reverse();
        return function aA() {
          {
            for (; ax.length;) {
              {
                var aC = ax.pop();
                if (aC in aw) {
                  aA.value = aC;
                  aA.done = false;
                  return aA;
                }
              }
            }
            aA.done = true;
            return aA;
          }
        };
      }
    };
    W.values = aq;
    ap.prototype = {
      constructor: ap,
      reset: function (au) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = V, this.done = false, this.delegate = null, this.method = "next", this.arg = V, this.tryEntries.forEach(ao), !au) {
            for (var aw in this) "t" === aw.charAt(0) && Y.call(this, aw) && !isNaN(+aw.slice(1)) && (this[aw] = V);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var au = this.tryEntries[0].completion;
          if ("throw" === au.type) {
            throw au.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (au) {
        {
          if (this.done) {
            throw au;
          }
          var aw = this;
          function aC(aD, aE) {
            az.type = "throw";
            az.arg = au;
            aw.next = aD;
            aE && (aw.method = "next", aw.arg = V);
            return !!aE;
          }
          for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
            {
              var ay = this.tryEntries[ax];
              var az = ay.completion;
              if ("root" === ay.tryLoc) {
                return aC("end");
              }
              if (ay.tryLoc <= this.prev) {
                {
                  var aA = Y.call(ay, "catchLoc");
                  var aB = Y.call(ay, "finallyLoc");
                  if (aA && aB) {
                    {
                      if (this.prev < ay.catchLoc) {
                        return aC(ay.catchLoc, true);
                      }
                      if (this.prev < ay.finallyLoc) {
                        return aC(ay.finallyLoc);
                      }
                    }
                  } else {
                    if (aA) {
                      {
                        if (this.prev < ay.catchLoc) {
                          return aC(ay.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aB) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < ay.finallyLoc) {
                          return aC(ay.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (au, av) {
        {
          for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
            {
              var ay = this.tryEntries[ax];
              if (ay.tryLoc <= this.prev && Y.call(ay, "finallyLoc") && this.prev < ay.finallyLoc) {
                {
                  var az = ay;
                  break;
                }
              }
            }
          }
          az && ("break" === au || "continue" === au) && az.tryLoc <= av && av <= az.finallyLoc && (az = null);
          var aA = az ? az.completion : {};
          aA.type = au;
          aA.arg = av;
          return az ? (this.method = "next", this.next = az.finallyLoc, ab) : this.complete(aA);
        }
      },
      complete: function (au, av) {
        {
          if ("throw" === au.type) {
            throw au.arg;
          }
          "break" === au.type || "continue" === au.type ? this.next = au.arg : "return" === au.type ? (this.rval = this.arg = au.arg, this.method = "return", this.next = "end") : "normal" === au.type && av && (this.next = av);
          return ab;
        }
      },
      finish: function (au) {
        {
          for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
            {
              var ax = this.tryEntries[aw];
              if (ax.finallyLoc === au) {
                this.complete(ax.completion, ax.afterLoc);
                ao(ax);
                return ab;
              }
            }
          }
        }
      },
      catch: function (au) {
        {
          for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
            {
              var ax = this.tryEntries[aw];
              if (ax.tryLoc === au) {
                {
                  var ay = ax.completion;
                  if ("throw" === ay.type) {
                    {
                      var az = ay.arg;
                      ao(ax);
                    }
                  }
                  return az;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (au, av, aw) {
        this.delegate = {
          iterator: aq(au),
          resultName: av,
          nextLoc: aw
        };
        "next" === this.method && (this.arg = V);
        return ab;
      }
    };
    return W;
  }
  function h(U, V, W, X, Y, Z, a0) {
    {
      try {
        {
          var a2 = U[Z](a0);
          var a3 = a2.value;
        }
      } catch (a5) {
        {
          return void W(a5);
        }
      }
      a2.done ? V(a3) : Promise.resolve(a3).then(X, Y);
    }
  }
  function i(U) {
    return function () {
      var W = this;
      var X = arguments;
      return new Promise(function (Y, Z) {
        var a1 = U.apply(W, X);
        function a2(a4) {
          {
            h(a1, Y, Z, a2, a3, "next", a4);
          }
        }
        function a3(a4) {
          {
            h(a1, Y, Z, a2, a3, "throw", a4);
          }
        }
        a2(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.YongPai : $.getdata("YongPai")) || "";
  window = {};
  var k = "";
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  function x() {
    {
      return y.apply(this, arguments);
    }
  }
  function y() {
    y = i(g().mark(function V() {
      var W = {
        KHUOV: "next",
        qmEej: "GeneratorFunction",
        vxzUl: function (aU, aV) {
          return aU === aV;
        },
        MBICq: "throw",
        RIfxO: function (aU, aV) {
          return aU(aV);
        },
        MIBkR: "2|1|5|4|0|3",
        oNBcu: function (aU, aV) {
          return aU === aV;
        },
        WycYy: function (aU, aV) {
          return aU === aV;
        },
        vAoha: function (aU, aV) {
          return aU === aV;
        },
        bOplH: function (aU, aV) {
          return aU !== aV;
        },
        myhuo: "return",
        QlsuR: function (aU, aV) {
          return aU + aV;
        },
        IbPfc: function (aU, aV) {
          return aU + aV;
        },
        GINgx: "The iterator does not provide a '",
        iSoYb: "iterator result is not an object",
        GVhfv: function (aU, aV, aW, aX) {
          return aU(aV, aW, aX);
        }
      };
      var X;
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
      var a7;
      var a8;
      var a9;
      var aa;
      var ab;
      var ac;
      var ad;
      var ae;
      var af;
      var ag;
      var ah;
      var ai;
      var aj;
      var ak;
      var al;
      var am;
      var an;
      var ao;
      var ap;
      var aq;
      var ar;
      var as;
      var at;
      var au;
      var av;
      var aw;
      var ax;
      var ay;
      var az;
      var aA;
      var aB;
      var aC;
      var aD;
      var aE;
      var aF;
      var aG;
      var aH;
      var aI;
      var aJ;
      var aK;
      var aL;
      var aM;
      var aN;
      var aO;
      var aP;
      var aQ;
      var aR;
      var aS;
      var aT;
      return g().wrap(function aU(aV) {
        for (;;) {
          switch (aV.prev = aV.next) {
            case 0:
              if (console.log("\u4F5C\u8005\uFF1A@xzxxn777\n\u9891\u9053\uFF1Ahttps://t.me/xzxxn777\n\u7FA4\u7EC4\uFF1Ahttps://t.me/xzxxn7777\n\u81EA\u7528\u673A\u573A\u63A8\u8350\uFF1Ahttps://xn--diqv0fut7b.com\n"), j) {
                {
                  aV.next = 6;
                  break;
                }
              }
              console.log("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
              aV.next = 5;
              return S("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
            case 5:
              return aV.abrupt("return");
            case 6:
              X = j.split(" ");
              Y = c(X);
              aV.prev = 8;
              Y.s();
            case 10:
              if ((Z = Y.n()).done) {
                {
                  aV.next = 247;
                  break;
                }
              }
              a0 = Z.value;
              console.log("\u968F\u673A\u751F\u6210\u8BBE\u5907");
              o = a0.split("&")[0];
              p = a0.split("&")[1];
              q = a0.split("&")[2];
              r = a0.split("&")[3];
              k = a0.split("&")[4];
              a1 = O();
              k || (k = a1.deviceId);
              v = a1.model;
              console.log(k);
              console.log(v);
              console.log("\u7528\u6237\uFF1A".concat(o, "\u5F00\u59CB\u4EFB\u52A1"));
              console.log("\u767B\u5F55");
              a2 = Date.now();
              aV.next = 28;
              return z("username=".concat(o, "&password=").concat(encodeURI(p), "&deviceId=").concat(k, "&globalDatetime=").concat(a2, "&sign=").concat(md5("globalDatetime".concat(a2, "username").concat(o, "test_123456679890123456")).toUpperCase()));
            case 28:
              if (a3 = aV.sent, 0 == a3.code) {
                {
                  aV.next = 32;
                  break;
                }
              }
              console.log(a3.message);
              return aV.abrupt("continue", 245);
            case 32:
              console.log("\u83B7\u53D6userId\uFF1A".concat(a3.data.userId));
              s = a3.data.userId;
              console.log("\u83B7\u53D6name\uFF1A".concat(a3.data.nickname));
              a4 = a3.data.token;
              u = a3.data.nickname;
              aV.next = 39;
              return B("userId=".concat(s, "&loginName=").concat(o, "&name=").concat(encodeURI(u), "&phone=").concat(o));
            case 39:
              if (a5 = aV.sent, 200 == a5.code) {
                {
                  aV.next = 43;
                  break;
                }
              }
              console.log(a5.message);
              return aV.abrupt("continue", 245);
            case 43:
              console.log("\u767B\u5F55\u6210\u529F");
              l = a5.data;
              console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
              console.log("\u5F00\u59CB\u4EFB\u52A1");
              a6 = true;
              a7 = true;
              a8 = true;
              aV.next = 52;
              return D("/yongpai-user/api/user/my_level?userId=".concat(s));
            case 52:
              a9 = aV.sent;
              aa = c(a9.data.scoreRule);
              aV.prev = 54;
              aa.s();
            case 56:
              if ((ab = aa.n()).done) {
                aV.next = 68;
                break;
              }
              if (ac = ab.value, console.log("\u4EFB\u52A1\uFF1A".concat(ac.type)), ac.dayscore != ac.usedScore) {
                {
                  aV.next = 62;
                  break;
                }
              }
              console.log("\u4EFB\u52A1\u5DF2\u5B8C\u6210");
              return aV.abrupt("continue", 66);
            case 62:
              console.log("\u4EFB\u52A1\u8FDB\u5EA6\uFF1A".concat(ac.usedScore, "/").concat(ac.dayscore));
              "\u9605\u8BFB\u65B0\u95FB" == ac.type && (a6 = false);
              "\u70B9\u8D5E" == ac.type && (a7 = false);
              "\u5206\u4EAB\u65B0\u95FB" == ac.type && (a8 = false);
            case 66:
              aV.next = 56;
              break;
            case 68:
              aV.next = 73;
              break;
            case 70:
              aV.prev = 70;
              aV.t0 = aV.catch(54);
              aa.e(aV.t0);
            case 73:
              aV.prev = 73;
              aa.f();
              return aV.finish(73);
            case 76:
              if (a6 && a7 && a8) {
                {
                  aV.next = 124;
                  break;
                }
              }
              ad = [0, 2, 20183, 20184, 4, 32];
              ae = 30;
              af = 0;
              ag = ad;
            case 80:
              if (!(af < ag.length)) {
                {
                  aV.next = 124;
                  break;
                }
              }
              ah = ag[af];
              aV.next = 84;
              return D("/yongpai-news/api/news/list?channelId=".concat(ah, "&currentPage=1&timestamp=0"));
            case 84:
              ai = aV.sent;
              aj = c(ai.data.content);
              aV.prev = 86;
              aj.s();
            case 88:
              if ((ak = aj.n()).done) {
                {
                  aV.next = 113;
                  break;
                }
              }
              if (al = ak.value, R(al.sourcetime)) {
                aV.next = 92;
                break;
              }
              return aV.abrupt("continue", 111);
            case 92:
              if (0 != ae) {
                aV.next = 94;
                break;
              }
              return aV.abrupt("break", 113);
            case 94:
              if (console.log("\u6587\u7AE0\uFF1A".concat(al.title)), am = al.id, a6) {
                aV.next = 101;
                break;
              }
              aV.next = 99;
              return D("/yongpai-news/api/news/detail?newsId=".concat(am, "&userId=").concat(s, "&deviceId=").concat(k));
            case 99:
              an = aV.sent;
              console.log("\u9605\u8BFB\uFF1A".concat(an.message));
            case 101:
              if (a7) {
                aV.next = 106;
                break;
              }
              aV.next = 104;
              return D("/yongpai-ugc/api/praise/save_news?userId=".concat(s, "&newsId=").concat(am, "&deviceId=").concat(k));
            case 104:
              ao = aV.sent;
              0 == ao.code ? (ae--, console.log("\u70B9\u8D5E\u83B7\u5F97\uFF1A".concat(null == ao || null === (ap = ao.data) || undefined === ap ? undefined : ap.score, "\u79EF\u5206"))) : console.log(ao.message);
            case 106:
              if (a8) {
                aV.next = 111;
                break;
              }
              aV.next = 109;
              return D("/yongpai-ugc/api/forward/news?userId=".concat(s, "&newsId=").concat(am, "&source=4"));
            case 109:
              aq = aV.sent;
              0 == aq.code ? console.log("\u5206\u4EAB\u83B7\u5F97\uFF1A".concat(null == aq ? undefined : aq.data, "\u79EF\u5206")) : console.log(aq.message);
            case 111:
              aV.next = 88;
              break;
            case 113:
              aV.next = 118;
              break;
            case 115:
              aV.prev = 115;
              aV.t1 = aV.catch(86);
              aj.e(aV.t1);
            case 118:
              aV.prev = 118;
              aj.f();
              return aV.finish(118);
            case 121:
              af++;
              aV.next = 80;
              break;
            case 124:
              ar = "";
              aV.next = 127;
              return D("/yongpai-news/api/news/list?channelId=4&currentPage=1&timestamp=0");
            case 127:
              as = aV.sent;
              at = c(as.data.content);
              aV.prev = 129;
              at.s();
            case 131:
              if ((au = at.n()).done) {
                aV.next = 139;
                break;
              }
              if (av = au.value, !av.title.includes("\u8F6C\u76D8") && !av.subtitle.includes("\u8F6C\u76D8")) {
                aV.next = 137;
                break;
              }
              console.log("\u62BD\u5956\u6D3B\u52A8\uFF1A".concat(av.title));
              ar = av.id;
              return aV.abrupt("break", 139);
            case 137:
              aV.next = 131;
              break;
            case 139:
              aV.next = 144;
              break;
            case 141:
              aV.prev = 141;
              aV.t2 = aV.catch(129);
              at.e(aV.t2);
            case 144:
              aV.prev = 144;
              at.f();
              return aV.finish(144);
            case 147:
              if (console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"), console.log("\u9605\u8BFB\u62BD\u5956"), console.log("\u83B7\u53D6id"), ar) {
                aV.next = 154;
                break;
              }
              console.log("\u672A\u627E\u5230id");
              aV.next = 239;
              break;
            case 154:
              console.log(ar);
              console.log("\u83B7\u53D6\u62BD\u5956id");
              aV.next = 158;
              return D("/yongpai-news/api/news/detail?newsId=".concat(ar, "&userId=").concat(s, "&deviceId=").concat(k));
            case 158:
              aw = aV.sent;
              ax = aw.data.body.match(/id=\d+/);
              ax && (n = ax[0].split("=")[1]);
              console.log(n);
              console.log("\u9605\u8BFB\u767B\u5F55");
              aV.next = 165;
              return F("userId=".concat(s, "&dbredirect=https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=").concat(n, "&dbnewopen"));
            case 165:
              ay = aV.sent;
              m = "";
              aV.next = 169;
              return H(ay.data);
            case 169:
              m = aV.sent;
              console.log("\u83B7\u53D6\u62BD\u5956key");
              aV.next = 173;
              return L("https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"));
            case 173:
              az = aV.sent;
              aV.next = 176;
              return J("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(n, "&adslotId="));
            case 176:
              aA = aV.sent;
              lotteryCount = aA.element.freeLimit;
              console.log("\u62E5\u6709".concat(lotteryCount, "\u6B21\u62BD\u5956"));
              aB = 0;
            case 180:
              if (!(aB < aA.element.freeLimit)) {
                aV.next = 239;
                break;
              }
              aV.next = 183;
              return J("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(n, "&activityType=hdtool&consumerId=").concat(t));
            case 183:
              aC = aV.sent;
              eval(aC.token);
              aD = window[az];
              aV.next = 188;
              return J("/hdtool/doJoin?dpm=92722.3.1.0&activityId=".concat(n, "&_=").concat(Date.now()), "actId=".concat(n, "&oaId=").concat(n, "&activityType=hdtool&consumerId=").concat(t, "&token=").concat(aD));
            case 188:
              if (aE = aV.sent, !aE.success) {
                aV.next = 235;
                break;
              }
              if (aE.orderId) {
                aV.next = 193;
                break;
              }
              console.log(aE.message);
              return aV.abrupt("break", 239);
            case 193:
              aF = aE.orderId;
              aG = 0;
            case 195:
              if (0 != aG) {
                aV.next = 233;
                break;
              }
              aV.next = 198;
              return J("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(aF, "&adslotId="));
            case 198:
              if (aH = aV.sent, aG = aH.result, 0 != aG) {
                aV.next = 204;
                break;
              }
              console.log(aH.message);
              aV.next = 231;
              break;
            case 204:
              if ("thanks" == aH.lottery.type && (console.log("\u8C22\u8C22\u53C2\u4E0E"), w += "\u7528\u6237\uFF1A".concat(o, " \u62BD\u5956\u83B7\u5F97\uFF1A\u8C22\u8C22\u53C2\u4E0E\n")), "alipay" != aH.lottery.type) {
                aV.next = 231;
                break;
              }
              for (console.log("\u62BD\u5956\u83B7\u5F97\u652F\u4ED8\u5B9D\u7EA2\u5305\uFF1A".concat(aH.lottery.title)), aI = aH.lottery.link, aJ = aI.split("?")[1], aK = {}, aL = aJ.split("&"), aM = 0, aN = aL.length; aM < aN; aM++) {
                aO = aL[aM].split("=");
                aK[aO[0]] = aO[1];
              }
              if (aP = aK.recordId, !q || !r) {
                aV.next = 230;
                break;
              }
              console.log("\u83B7\u53D6\u5151\u6362key");
              aV.next = 217;
              return L("https://92722.activity-12.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aP, "&dbnewopen"));
            case 217:
              az = aV.sent;
              aV.next = 220;
              return J("/ctoken/getToken.do");
            case 220:
              aQ = aV.sent;
              eval(aQ.token);
              aR = window[az];
              aV.next = 225;
              return J("/activity/doTakePrize", "alipay=".concat(r, "&realname=").concat(encodeURI(q), "&recordId=").concat(aP, "&token=").concat(aR));
            case 225:
              aS = aV.sent;
              console.log(aS.message);
              w += "\u7528\u6237\uFF1A".concat(o, " \u62BD\u5956\u83B7\u5F97\uFF1A").concat(aH.lottery.title, " \u9886\u53D6\u7ED3\u679C\uFF1A").concat(aS.message, "\n");
              aV.next = 231;
              break;
            case 230:
              console.log("\u8BF7\u8BBE\u7F6E\u652F\u4ED8\u5B9D\u59D3\u540D\u548C\u8D26\u53F7");
            case 231:
              aV.next = 195;
              break;
            case 233:
              aV.next = 236;
              break;
            case 235:
              console.log(aE.message);
            case 236:
              aB++;
              aV.next = 180;
              break;
            case 239:
              console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
              console.log("\u67E5\u8BE2\u79EF\u5206");
              aV.next = 243;
              return D("/yongpai-user/api/user/client?userId=".concat(s, "&deviceId=").concat(k, "&token=").concat(a4));
            case 243:
              aT = aV.sent;
              console.log("\u62E5\u6709\u79EF\u5206\uFF1A".concat(aT.data.score, "\n"));
            case 245:
              aV.next = 10;
              break;
            case 247:
              aV.next = 252;
              break;
            case 249:
              aV.prev = 249;
              aV.t3 = aV.catch(8);
              Y.e(aV.t3);
            case 252:
              aV.prev = 252;
              Y.f();
              return aV.finish(252);
            case 255:
              if (!w) {
                aV.next = 258;
                break;
              }
              aV.next = 258;
              return S(w);
            case 258:
            case "end":
              return aV.stop();
          }
        }
      }, V, null, [[8, 249, 252, 255], [54, 70, 73, 76], [86, 115, 118, 121], [129, 141, 144, 147]]);
    }));
    return y.apply(this, arguments);
  }
  function z(U) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function V(W) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?".concat(W),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: "",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a1, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a5) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a7));
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a6);
                          case 14:
                            a9.prev = 14;
                            Z();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, V);
    }));
    return A.apply(this, arguments);
  }
  function B(U) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function V(W) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a0 = {
                  url: "https://ypapp.cnnb.com.cn/web-nbcc/member/login?".concat(W),
                  headers: {
                    "content-type": "application/json",
                    module: "web-member",
                    sign: md5("/member/login{loginName:".concat(o, ",name:").concat(u, ",phone:").concat(o, ",userId:").concat(s)),
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a0, function () {
                  var a2 = i(g().mark(function a3(a4, a5, a6) {
                    return g().wrap(function (a7) {
                      for (;;) {
                        switch (a7.prev = a7.next) {
                          case 0:
                            if (a7.prev = 0, !a4) {
                              a7.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            a7.next = 9;
                            break;
                          case 6:
                            a7.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a6));
                          case 9:
                            a7.next = 14;
                            break;
                          case 11:
                            a7.prev = 11;
                            a7.t0 = a7.catch(0);
                            $.logErr(a7.t0, a5);
                          case 14:
                            a7.prev = 14;
                            Z();
                            return a7.finish(14);
                          case 17:
                          case "end":
                            return a7.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, V);
    }));
    return C.apply(this, arguments);
  }
  function D(U) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function V(W) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  url: "https://ypapp.cnnb.com.cn".concat(W),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: l,
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a1, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a5) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a7));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a6);
                          case 14:
                            a8.prev = 14;
                            Z();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, V);
    }));
    return E.apply(this, arguments);
  }
  function F(U) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function V(W) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a2 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/duiba/autologin?".concat(W),
                  headers: {
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a2, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a6) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(a8));
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a7);
                          case 14:
                            a9.prev = 14;
                            a1();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, V);
    }));
    return G.apply(this, arguments);
  }
  function H(U) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function U(V) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var a2 = {
                  url: "".concat(V),
                  headers: a1,
                  followRedirect: false
                };
                $.get(a2, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    var a9;
                    var aa;
                    return g().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a5) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            ab.next = 10;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (a9 = a6.headers["set-cookie"] || a6.headers["Set-Cookie"], aa = 0; aa < a9.length; aa++) {
                                m += a9[aa].split(";")[0] + ";";
                              }
                            } else {
                              m = a6.headers["set-cookie"] || a6.headers["Set-Cookie"];
                              m = N(m);
                            }
                            Z(m);
                          case 10:
                            ab.next = 15;
                            break;
                          case 12:
                            ab.prev = 12;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a6);
                          case 15:
                            ab.prev = 15;
                            Z();
                            return ab.finish(15);
                          case 18:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a4, null, [[0, 12, 15, 18]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, U);
    }));
    return I.apply(this, arguments);
  }
  function J(U, V) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function V(W, X) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a1 = {
                  url: "https://92722.activity-12.m.duiba.com.cn".concat(W),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92722.activity-12.m.duiba.com.cn",
                    cookie: m,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: X
                };
                $.post(a1, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a5) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(JSON.parse(a7));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a6);
                          case 14:
                            a8.prev = 14;
                            a0();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, V);
    }));
    return K.apply(this, arguments);
  }
  function L(U) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function U(V) {
      return g().wrap(function X(Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: m
                };
                var a4 = {
                  url: V,
                  headers: a2
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    var ac;
                    var ad;
                    var ae;
                    var af;
                    return g().wrap(function ag(ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !a8) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            ah.next = 18;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aa)[1];
                            eval(ac);
                            ad = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(ad);
                            console.log("\u83B7\u53D6consumerId");
                            ae = /consumerId:'(\d+)'/;
                            af = aa.match(ae);
                            t = af ? af[1] : "4136126583";
                            console.log(t);
                            a0(ad);
                          case 18:
                            ah.next = 23;
                            break;
                          case 20:
                            ah.prev = 20;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, a9);
                          case 23:
                            ah.prev = 23;
                            a0();
                            return ah.finish(23);
                          case 26:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, a7, null, [[0, 20, 23, 26]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, U);
    }));
    return M.apply(this, arguments);
  }
  function N(U) {
    var V = U.split(", ");
    var W = V.map(function (X) {
      var Y = X.split(";")[0];
      return Y.trim();
    });
    return W.join(";");
  }
  function O() {
    var U = Q();
    var V = P(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var W = {
      deviceId: U,
      model: V
    };
    return W;
  }
  function P(U) {
    return U[Math.floor(Math.random() * U.length)];
  }
  function Q() {
    for (var U = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 16, V = "abcdefghijklmnopqrstuvwxyz0123456789", W = "", X = 0; X < U; X++) {
      W += V.charAt(Math.floor(36 * Math.random()));
    }
    return W;
  }
  function R(U) {
    var V = new Date(U);
    var W = new Date();
    return V.getFullYear() === W.getFullYear() && V.getMonth() === W.getMonth() && V.getDate() === W.getDate();
  }
  function S(U) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function U(V) {
      return g().wrap(function (W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              if (!$.isNode()) {
                W.next = 5;
                break;
              }
              W.next = 3;
              return notify.sendNotify($.name, V);
            case 3:
              W.next = 6;
              break;
            case 5:
              $.msg($.name, "", V);
            case 6:
            case "end":
              return W.stop();
          }
        }
      }, U);
    }));
    return T.apply(this, arguments);
  }
  i(g().mark(function U() {
    return g().wrap(function (W) {
      for (;;) {
        switch (W.prev = W.next) {
          case 0:
            W.next = 2;
            return x();
          case 2:
          case "end":
            return W.stop();
        }
      }
    }, U);
  }))().catch(function (V) {
    $.log(V);
  }).finally(function () {
    $.done({});
  });
})();
function md5(r) {
  return rstr2hex(rstr_md5(str2rstr_utf8(r)));
}
function b64_md5(r) {
  return rstr2b64(rstr_md5(str2rstr_utf8(r)));
}
function any_md5(r, t) {
  return rstr2any(rstr_md5(str2rstr_utf8(r)), t);
}
function hex_hmac_md5(r, t) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function b64_hmac_md5(r, t) {
  return rstr2b64(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function any_hmac_md5(r, t, d) {
  return rstr2any(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)), d);
}
function md5_vm_test() {
  return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase();
}
function rstr_md5(r) {
  return binl2rstr(binl_md5(rstr2binl(r), 8 * r.length));
}
function rstr_hmac_md5(r, t) {
  var d = rstr2binl(r);
  d.length > 16 && (d = binl_md5(d, 8 * r.length));
  for (var n = Array(16), _ = Array(16), m = 0; m < 16; m++) {
    n[m] = 909522486 ^ d[m];
    _[m] = 1549556828 ^ d[m];
  }
  var f = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
  return binl2rstr(binl_md5(_.concat(f), 640));
}
function rstr2hex(r) {
  for (var t, d = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", _ = 0; _ < r.length; _++) {
    t = r.charCodeAt(_);
    n += d.charAt(t >>> 4 & 15) + d.charAt(15 & t);
  }
  return n;
}
function rstr2b64(r) {
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", n = r.length, _ = 0; _ < n; _ += 3) {
    for (var m = r.charCodeAt(_) << 16 | (_ + 1 < n ? r.charCodeAt(_ + 1) << 8 : 0) | (_ + 2 < n ? r.charCodeAt(_ + 2) : 0), f = 0; f < 4; f++) {
      8 * _ + 6 * f > 8 * r.length ? d += b64pad : d += t.charAt(m >>> 6 * (3 - f) & 63);
    }
  }
  return d;
}
function rstr2any(r, t) {
  var d;
  var n;
  var _;
  var m;
  var f;
  var h = t.length;
  var e = Array(Math.ceil(r.length / 2));
  for (d = 0; d < e.length; d++) {
    e[d] = r.charCodeAt(2 * d) << 8 | r.charCodeAt(2 * d + 1);
  }
  var a = Math.ceil(8 * r.length / (Math.log(t.length) / Math.log(2)));
  var i = Array(a);
  for (n = 0; n < a; n++) {
    for (f = Array(), m = 0, d = 0; d < e.length; d++) {
      m = (m << 16) + e[d];
      _ = Math.floor(m / h);
      m -= _ * h;
      (f.length > 0 || _ > 0) && (f[f.length] = _);
    }
    i[n] = m;
    e = f;
  }
  var o = "";
  for (d = i.length - 1; d >= 0; d--) {
    o += t.charAt(i[d]);
  }
  return o;
}
function str2rstr_utf8(r) {
  for (var t, d, n = "", _ = -1; ++_ < r.length;) {
    t = r.charCodeAt(_);
    d = _ + 1 < r.length ? r.charCodeAt(_ + 1) : 0;
    55296 <= t && t <= 56319 && 56320 <= d && d <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & d), _++);
    t <= 127 ? n += String.fromCharCode(t) : t <= 2047 ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
  }
  return n;
}
function str2rstr_utf16le(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(255 & r.charCodeAt(d), r.charCodeAt(d) >>> 8 & 255);
  }
  return t;
}
function str2rstr_utf16be(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(r.charCodeAt(d) >>> 8 & 255, 255 & r.charCodeAt(d));
  }
  return t;
}
function rstr2binl(r) {
  for (var t = Array(r.length >> 2), d = 0; d < t.length; d++) {
    t[d] = 0;
  }
  for (d = 0; d < 8 * r.length; d += 8) {
    t[d >> 5] |= (255 & r.charCodeAt(d / 8)) << d % 32;
  }
  return t;
}
function binl2rstr(r) {
  for (var t = "", d = 0; d < 32 * r.length; d += 8) {
    t += String.fromCharCode(r[d >> 5] >>> d % 32 & 255);
  }
  return t;
}
function binl_md5(r, t) {
  r[t >> 5] |= 128 << t % 32;
  r[14 + (t + 64 >>> 9 << 4)] = t;
  for (var d = 1732584193, n = -271733879, _ = -1732584194, m = 271733878, f = 0; f < r.length; f += 16) {
    var h = d;
    var e = n;
    var a = _;
    var i = m;
    d = md5_ff(d, n, _, m, r[f + 0], 7, -680876936);
    m = md5_ff(m, d, n, _, r[f + 1], 12, -389564586);
    _ = md5_ff(_, m, d, n, r[f + 2], 17, 606105819);
    n = md5_ff(n, _, m, d, r[f + 3], 22, -1044525330);
    d = md5_ff(d, n, _, m, r[f + 4], 7, -176418897);
    m = md5_ff(m, d, n, _, r[f + 5], 12, 1200080426);
    _ = md5_ff(_, m, d, n, r[f + 6], 17, -1473231341);
    n = md5_ff(n, _, m, d, r[f + 7], 22, -45705983);
    d = md5_ff(d, n, _, m, r[f + 8], 7, 1770035416);
    m = md5_ff(m, d, n, _, r[f + 9], 12, -1958414417);
    _ = md5_ff(_, m, d, n, r[f + 10], 17, -42063);
    n = md5_ff(n, _, m, d, r[f + 11], 22, -1990404162);
    d = md5_ff(d, n, _, m, r[f + 12], 7, 1804603682);
    m = md5_ff(m, d, n, _, r[f + 13], 12, -40341101);
    _ = md5_ff(_, m, d, n, r[f + 14], 17, -1502002290);
    n = md5_ff(n, _, m, d, r[f + 15], 22, 1236535329);
    d = md5_gg(d, n, _, m, r[f + 1], 5, -165796510);
    m = md5_gg(m, d, n, _, r[f + 6], 9, -1069501632);
    _ = md5_gg(_, m, d, n, r[f + 11], 14, 643717713);
    n = md5_gg(n, _, m, d, r[f + 0], 20, -373897302);
    d = md5_gg(d, n, _, m, r[f + 5], 5, -701558691);
    m = md5_gg(m, d, n, _, r[f + 10], 9, 38016083);
    _ = md5_gg(_, m, d, n, r[f + 15], 14, -660478335);
    n = md5_gg(n, _, m, d, r[f + 4], 20, -405537848);
    d = md5_gg(d, n, _, m, r[f + 9], 5, 568446438);
    m = md5_gg(m, d, n, _, r[f + 14], 9, -1019803690);
    _ = md5_gg(_, m, d, n, r[f + 3], 14, -187363961);
    n = md5_gg(n, _, m, d, r[f + 8], 20, 1163531501);
    d = md5_gg(d, n, _, m, r[f + 13], 5, -1444681467);
    m = md5_gg(m, d, n, _, r[f + 2], 9, -51403784);
    _ = md5_gg(_, m, d, n, r[f + 7], 14, 1735328473);
    n = md5_gg(n, _, m, d, r[f + 12], 20, -1926607734);
    d = md5_hh(d, n, _, m, r[f + 5], 4, -378558);
    m = md5_hh(m, d, n, _, r[f + 8], 11, -2022574463);
    _ = md5_hh(_, m, d, n, r[f + 11], 16, 1839030562);
    n = md5_hh(n, _, m, d, r[f + 14], 23, -35309556);
    d = md5_hh(d, n, _, m, r[f + 1], 4, -1530992060);
    m = md5_hh(m, d, n, _, r[f + 4], 11, 1272893353);
    _ = md5_hh(_, m, d, n, r[f + 7], 16, -155497632);
    n = md5_hh(n, _, m, d, r[f + 10], 23, -1094730640);
    d = md5_hh(d, n, _, m, r[f + 13], 4, 681279174);
    m = md5_hh(m, d, n, _, r[f + 0], 11, -358537222);
    _ = md5_hh(_, m, d, n, r[f + 3], 16, -722521979);
    n = md5_hh(n, _, m, d, r[f + 6], 23, 76029189);
    d = md5_hh(d, n, _, m, r[f + 9], 4, -640364487);
    m = md5_hh(m, d, n, _, r[f + 12], 11, -421815835);
    _ = md5_hh(_, m, d, n, r[f + 15], 16, 530742520);
    n = md5_hh(n, _, m, d, r[f + 2], 23, -995338651);
    d = md5_ii(d, n, _, m, r[f + 0], 6, -198630844);
    m = md5_ii(m, d, n, _, r[f + 7], 10, 1126891415);
    _ = md5_ii(_, m, d, n, r[f + 14], 15, -1416354905);
    n = md5_ii(n, _, m, d, r[f + 5], 21, -57434055);
    d = md5_ii(d, n, _, m, r[f + 12], 6, 1700485571);
    m = md5_ii(m, d, n, _, r[f + 3], 10, -1894986606);
    _ = md5_ii(_, m, d, n, r[f + 10], 15, -1051523);
    n = md5_ii(n, _, m, d, r[f + 1], 21, -2054922799);
    d = md5_ii(d, n, _, m, r[f + 8], 6, 1873313359);
    m = md5_ii(m, d, n, _, r[f + 15], 10, -30611744);
    _ = md5_ii(_, m, d, n, r[f + 6], 15, -1560198380);
    n = md5_ii(n, _, m, d, r[f + 13], 21, 1309151649);
    d = md5_ii(d, n, _, m, r[f + 4], 6, -145523070);
    m = md5_ii(m, d, n, _, r[f + 11], 10, -1120210379);
    _ = md5_ii(_, m, d, n, r[f + 2], 15, 718787259);
    n = md5_ii(n, _, m, d, r[f + 9], 21, -343485551);
    d = safe_add(d, h);
    n = safe_add(n, e);
    _ = safe_add(_, a);
    m = safe_add(m, i);
  }
  return Array(d, n, _, m);
}
function md5_cmn(r, t, d, n, _, m) {
  return safe_add(bit_rol(safe_add(safe_add(t, r), safe_add(n, m)), _), d);
}
function md5_ff(r, t, d, n, _, m, f) {
  return md5_cmn(t & d | ~t & n, r, t, _, m, f);
}
function md5_gg(r, t, d, n, _, m, f) {
  return md5_cmn(t & n | d & ~n, r, t, _, m, f);
}
function md5_hh(r, t, d, n, _, m, f) {
  return md5_cmn(t ^ d ^ n, r, t, _, m, f);
}
function md5_ii(r, t, d, n, _, m, f) {
  return md5_cmn(d ^ (t | ~n), r, t, _, m, f);
}
function safe_add(r, t) {
  var d = (65535 & r) + (65535 & t);
  var n = (r >> 16) + (t >> 16) + (d >> 16);
  return n << 16 | 65535 & d;
}
function bit_rol(r, t) {
  return r << t | r >>> 32 - t;
}
var hexcase = 0;
var b64pad = "";
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}