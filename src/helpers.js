export const mergeDeep = (t, s) => {
  const o = Object,
    a = o.assign;
  for (const k of o.keys(s))
    s[k] instanceof o && a(s[k], mergeDeep(t[k], s[k]));
  return a(t || {}, s), t;
};
