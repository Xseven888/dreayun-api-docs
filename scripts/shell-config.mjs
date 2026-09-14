/**
 * Strategy-A shell build configuration for the private OpenLux study rebuild.
 * The mirror/ tree is evidence and remains untouched; site/ is generated from
 * these registered transforms only.
 */
export default {
  pages: [
    { rel: "index.html", route: "/" },
    { rel: "en/index.html", route: "/en" },
    { rel: "explore/index.html", route: "/explore" },
    { rel: "en/explore/index.html", route: "/en/explore" },
    { rel: "reference/kling/index.html", route: "/reference/kling" },
    { rel: "en/reference/kling/index.html", route: "/en/reference/kling" },
  ],
  extras: [],
  originHosts: ["doc.openlux.ai"],
  mirroredExtHosts: ["cdn.jsdelivr.net"],
  stubExtHosts: [],
  notice: "<!--\n" +
    "  UNOFFICIAL PRIVATE STUDY REBUILD — this is not the official source site.\n" +
    "  Generated from a forensic mirror solely to study the site's implementation.\n" +
    "  Not affiliated with or endorsed by the original site. Content, artwork, copy, fonts,\n" +
    "  trademarks and trade dress belong to their respective owners. Private, noindex.\n" +
    "-->\n",
  floors: {
    "T-LOCALIZE": 0,
    "T-DATA-KEEP": 0,
    "T-NOINDEX": 6,
  },
  transforms: [],
  purposeChecks: [],
};

