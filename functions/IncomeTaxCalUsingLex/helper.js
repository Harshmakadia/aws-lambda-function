function calcindividualTax(n, t, i, r) {
    try {
        if (n < 0) return n = 0, 0;
        var u = 0;
        return t == "2010-11" && (r == "Female" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 19e4 ? u = 0 : n > 19e4 && n <= 3e5 ? u = (n - 19e4) * .1 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .2 + 11e3 : n > 5e5 && (u = (n - 5e5) * .3 + 51e3) : r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 24e4 ? u = 0 : n > 24e4 && n <= 3e5 ? u = (n - 24e4) * .1 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .2 + 6e3 : n > 5e5 && (u = (n - 5e5) * .3 + 46e3) : n <= 16e4 ? u = 0 : n > 16e4 && n <= 3e5 ? u = (n - 16e4) * .1 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .2 + 14e3 : n > 5e5 && (u = (n - 5e5) * .3 + 54e3)), t == "2011-12" && (r == "Female" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 19e4 ? u = 0 : n > 19e4 && n <= 5e5 ? u = (n - 19e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 31e3 : n > 8e5 && (u = (n - 8e5) * .3 + 91e3) : r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 24e4 ? u = 0 : n > 24e4 && n <= 5e5 ? u = (n - 24e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 26e3 : n > 8e5 && (u = (n - 8e5) * .3 + 86e3) : n <= 16e4 ? u = 0 : n > 16e4 && n <= 5e5 ? u = (n - 16e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 34e3 : n > 8e5 && (u = (n - 8e5) * .3 + 94e3)), t == "2012-13" && (r == "Female" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 19e4 ? u = 0 : n > 19e4 && n <= 5e5 ? u = (n - 19e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 31e3 : n > 8e5 && (u = (n - 8e5) * .3 + 91e3) : r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 25e3 : n > 8e5 && (u = (n - 8e5) * .3 + 85e3) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 : n > 8e5 && (u = (n - 8e5) * .3 + 6e4) : n <= 18e4 ? u = 0 : n > 18e4 && n <= 5e5 ? u = (n - 18e4) * .1 : n > 5e5 && n <= 8e5 ? u = (n - 5e5) * .2 + 32e3 : n > 8e5 && (u = (n - 8e5) * .3 + 92e3)), t == "2013-14" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 25e3 : n > 1e6 && (u = (n - 1e6) * .3 + 125e3) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 2e5 ? u = 0 : n > 2e5 && n <= 5e5 ? u = (n - 2e5) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 3e4 : n > 1e6 && (u = (n - 1e6) * .3 + 13e4)), t == "2014-15" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 25e3 : n > 1e6 && (u = (n - 1e6) * .3 + 125e3) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 2e5 ? u = 0 : n > 2e5 && n <= 5e5 ? u = (n - 2e5) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 3e4 : n > 1e6 && (u = (n - 1e6) * .3 + 13e4)), t == "2015-16" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 3e5 ? u = 0 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 2e4 : n > 1e6 && (u = (n - 1e6) * .3 + 12e4) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 25e3 : n > 1e6 && (u = (n - 1e6) * .3 + 125e3)), t == "2016-17" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 3e5 ? u = 0 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 2e4 : n > 1e6 && (u = (n - 1e6) * .3 + 12e4) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 25e3 : n > 1e6 && (u = (n - 1e6) * .3 + 125e3)), t == "2017-18" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 3e5 ? u = 0 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 2e4 : n > 1e6 && (u = (n - 1e6) * .3 + 12e4) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .1 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 25e3 : n > 1e6 && (u = (n - 1e6) * .3 + 125e3)), t == "2018-19" && (r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 3e5 ? u = 0 : n > 3e5 && n <= 5e5 ? u = (n - 3e5) * .05 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 1e4 : n > 1e6 && (u = (n - 1e6) * .3 + 11e4) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 5e5 ? u = 0 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 : n > 1e6 && (u = (n - 1e6) * .3 + 1e5) : n <= 25e4 ? u = 0 : n > 25e4 && n <= 5e5 ? u = (n - 25e4) * .05 : n > 5e5 && n <= 1e6 ? u = (n - 5e5) * .2 + 12500 : n > 1e6 && (u = (n - 1e6) * .3 + 112500)), u
    } catch (f) {
        alert("An error has occurred: Module-IndividaulTax :" + f.message)
    }
}

function addthousandseprator(n) {
    n += "";
    x = n.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    for (var t = /(\d+)(\d{3})/, i = 0, u = String(x1).length, r = parseInt(u / 2 - 1); t.test(x1);)
        if (i > 0 ? x1 = x1.replace(t, "$1,$2") : (x1 = x1.replace(t, "$1,$2"), t = /(\d+)(\d{2})/), i++, r--, r == 0) break;
    return x1 + x2
}

function calculateData201819Yr(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft,cb=null) {
    var et = 0,
        st = 0,
        ht = 0,
        ct = 0,
        ot = parseInt((r)),
        wt = 0,
        bt = 0,
        f = 0,
        at, vt, pt, p;
    if (t == "Domestic Company") at = 0, vt = 0, l.checked == !0 ? (et = ot * .25, at = 25e5, vt = 25e6) : c.checked == !0 ? (et = ot * .25, at = 25e5, vt = 25e6) : (et = ot * .3, at = 3e6, vt = 3e7), et = Math.round(et, 0), ot > 1e7 && ot <= 1e8 ? (adjustablesurcharge = et * .07, et + adjustablesurcharge > at + (ot - 1e7) ? (marginalrelief = et + adjustablesurcharge - (at + (ot - 1e7)), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)) : ot > 1e8 && (adjustablesurcharge = et * .12, et + adjustablesurcharge > vt * 1.07 + (ot - 1e8) ? (marginalrelief = et + adjustablesurcharge - (vt * 1.07 + (ot - 1e8)), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "Foreign Company") et = ot * .4, et = Math.round(et, 0), ot > 1e7 && ot <= 1e8 ? (adjustablesurcharge = et * .02, et + adjustablesurcharge > ot - 6e6 ? (marginalrelief = et + adjustablesurcharge - (ot - 6e6), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)) : ot > 1e8 && (adjustablesurcharge = et * .05, et + adjustablesurcharge > ot - 592e5 ? (marginalrelief = et + adjustablesurcharge - (ot - 592e5), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "LLP") et = ot * .3, et = Math.round(et, 0), ot >= 1e7 && (adjustablesurcharge = et * .12, et + adjustablesurcharge > ot - 7e6 ? (marginalrelief = et + adjustablesurcharge - (ot - 7e6), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "Firms") et = ot * .3, et = Math.round(et, 0), ot >= 1e7 && (adjustablesurcharge = et * .12, et + adjustablesurcharge > ot - 7e6 ? (marginalrelief = et + adjustablesurcharge - (ot - 7e6), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "Co-operative Society") ot <= 1e4 ? et = ot * .1 : ot > 1e4 && ot <= 2e4 ? et = (ot - 1e4) * .2 + 1e3 : ot > 2e4 && (et = (ot - 2e4) * .3 + 3e3), et = Math.round(et, 0), ot >= 1e7 && (adjustablesurcharge = et * .12, et + adjustablesurcharge > ot - 7003e3 ? (marginalrelief = et + adjustablesurcharge - (ot - 7003e3), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "AOPs/BOI") ot <= 25e4 ? et = 0 : ot > 25e4 && ot <= 5e5 ? et = (ot - 25e4) * .05 : ot > 5e5 && ot <= 1e6 ? et = (ot - 5e5) * .2 + 12500 : ot > 1e6 && (et = (ot - 1e6) * .3 + 112500), et = Math.round(et, 0), ot > 5e6 && ot <= 1e7 ? (adjustablesurcharge = et * .1, et + adjustablesurcharge > ot - 3687500 ? (marginalrelief = et + adjustablesurcharge - (ot - 3687500), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)) : ot > 1e7 && (adjustablesurcharge = et * .15, et + adjustablesurcharge > ot - 6906250 ? (marginalrelief = et + adjustablesurcharge - (ot - 6906250), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "HUF") ot <= 25e4 ? et = 0 : ot > 25e4 && ot <= 5e5 ? et = (ot - 25e4) * .05 : ot > 5e5 && ot <= 1e6 ? et = (ot - 5e5) * .2 + 12500 : ot > 1e6 && (et = (ot - 1e6) * .3 + 112500), et = Math.round(et, 0), ot > 5e6 && ot <= 1e7 ? (adjustablesurcharge = et * .1, et + adjustablesurcharge > ot - 3687500 ? (marginalrelief = et + adjustablesurcharge - (ot - 3687500), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)) : ot > 1e7 && (adjustablesurcharge = et * .15, et + adjustablesurcharge > ot - 6906250 ? (marginalrelief = et + adjustablesurcharge - (ot - 6906250), st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)), ht = (et + st) * .02, ct = (et + st) * .01;
    else if (t == "Individual") {
        if (ft == !1) {
            var lt = parseInt(getNum(a.value)),
                yt = 0,
                kt = parseInt(getNum(y.value));
            yt = lt;
            lt > v && kt > 5e3 && (lt = lt + kt);
            lt = lt - (Math.min(parseInt(getNum(w.value)), p) + parseInt(getNum(b.value)) + parseInt(getNum(k.value)) + parseInt(getNum(d.value)));
            yt = yt - (Math.min(parseInt(getNum(w.value)), p) + parseInt(getNum(b.value)) + parseInt(getNum(k.value)) + parseInt(getNum(d.value)));
            wt = Math.min(parseInt(getNum(w.value)), p) + parseInt(getNum(b.value)) + parseInt(getNum(k.value)) + parseInt(getNum(d.value));
            lt < 0 && (lt = 0);
            yt < 0 && (yt = 0);
            g.value = addthousandseprator(yt);
            et = lt > v && kt > 5e3 ? calcindividualTax(lt, n, u, i) - calcindividualTax(v + kt, n, u, i) : calcindividualTax(lt, n, u, i);
            et < 0 && (et = 0);
            et = Math.round(et, 0);
            nt.value = addthousandseprator(et);
            et = et + parseInt(getNum(tt.value)) + parseInt(getNum(it.value)) + parseInt(getNum(rt.value)) + parseInt(getNum(ut.value));
            bt = parseInt(getNum(tt.value)) + parseInt(getNum(it.value)) + parseInt(getNum(rt.value)) + parseInt(getNum(ut.value));
            u != "Non-Resident" && ot <= 35e4 && (et = et - 2500, et < 0 && (et = 0))
        } else wt = 0, bt = 0, et = calcindividualTax(ot, n, u, i), u != "Non-Resident" && ot <= 35e4 && (et = et - 2500, et < 0 && (et = 0));
        et < 0 && (et = 0);
        et = Math.round(et, 0);
        f.value = et;
        ot > 5e6 && ot <= 1e7 ? (adjustablesurcharge = et * .1, pt = et + adjustablesurcharge, p = calcindividualTax(5e6 - wt, n, u, i) + (ot - 5e6) + bt, pt > p ? (marginalrelief = pt - p, st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0)) : ot > 1e7 && (adjustablesurcharge = et * .15, pt = et + adjustablesurcharge, p = (calcindividualTax(1e7 - wt, n, u, i) + bt) * 1.1 + (ot - 1e7), pt > p ? (marginalrelief = pt - p, st = adjustablesurcharge - marginalrelief) : st = adjustablesurcharge, st = Math.round(st, 0));
        ht = (et + st) * .02;
        ct = (et + st) * .01
    }
    ht = Math.round(ht, 0);
    ct = Math.round(ct, 0);
	var taxObj = {};
	taxObj["IncomeTax"] = addthousandseprator(et);
	taxObj["Surcharge"] = addthousandseprator(st);
	taxObj["EducationCess"] = addthousandseprator(ht);
	taxObj["SecondaryHigherCess"] = addthousandseprator(ct);
	taxObj["TotalTaxLiability"] = addthousandseprator(et + st + ht + ct);
	cb(taxObj);
    //console.log(addthousandseprator(et), addthousandseprator(st), addthousandseprator(ht), addthousandseprator(ct))

}

module.exports.calculateData201819Yr=calculateData201819Yr;
//calculateData201819Yr("2018-19", "Individual", "Male", "600000", "Resident", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);