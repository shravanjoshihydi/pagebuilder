let componentsArray = [
  {
    componentName: "Articles",
    props: [],
  },
  {
    componentName: "ContactUsForm",
    props: ["formId", "showformtitle", "formtitleposition", "customstyleclass"],
  },
  {
    componentName: "CookieLayout",
    props: [],
  },
  {
    componentName: "DealerContactDetails",
    props: [],
  },
  {
    componentName: "FeaturedCar",
    props: [
      "disablemi_price",
      "showanimation",
      "feturedcarClass",
      "title",
      "showkmtext",
      "externalLink",
      "vehiclePosition",
      "InventoryType",
      "enableroundedborders",
      "enablegroupscroll",
      "customclass",
      "featuredcartitle",
      "featuretitleimg",
      "featureimg",
      "vehiclePositionclass",
      "smalldesktopitemsperview",
      "desktopitemsperview",
      "montlyloanpayment",
      "financesimulator",
      "financeTypeId",
      "calendericon",
      "mileage",
      "milageicon",
      "fuelicon",
      "enginetype",
      "viewall_btn",
    ],
  },
  {
    componentName: "FifthRowBanner",
    props: [],
  },
  {
    componentName: "FloatMenuLink",
    props: [],
  },
  {
    componentName: "Footer",
    version: "ver0",
    props: [
      "showFooterSmoThirdParty",
      "showGuestSuite",
      "gsCity",
      "gsMake",
      "guestSuitText",
      "fw_text2",
      "fw_text1",
      "popupHeadingText",
      "popupBackgroundImg",
      "fidcarbnr",
      "fidcarimg",
      "fidcarimglink",
      "footerVlinktext",
      "footerVlink",
      "thirdpartypluginimg",
      "thirdpartypluginlandingurl",
      "garagescore",
      "footerthirdpartycomponent",
      "thirdprtyWidth",
      "footerdlrlstWidth",
      "hidesmobelowaddress",
      "footerdlradrsWidth",
      "footerPositionclass",
      "bordertopclass",
      "poweredbywidth",
      "footerlinkswidth",
      "smonewicons",
      "HIDE_FOOTER_QUICKLINK_IN_MOBI",
      "HIDE_FOOTER_QUICKLINK_IN_TAB",
      "HIDE_FOOTER_QUICKLINK_IN_DESKTOP",
      "footerLocationsDisplay",
      "footerStyleclass",
      "footerAddressOrder",
      "SHOW_SMO_BELOW_ADDRESS",
      "footerDelaerListOrder",
      "footerTopBottomBorder",
      "smoIconsStyle",
      "smoPositionClass",
      "showfooterlogo",
      "footerlogoredireturl",
      "footerlogourl",
      "showdealerlogo",
      "showdealername",
      "countrycode",
      "showDeptname",
    ],
  },
  {
    componentName: "Footerlegal",
    props: ["footer_legaltag", "footer_legaltxt"],
  },
  {
    componentName: "FourthRowBanner",
    props: ["showfourthrowtitle"],
  },
  {
    componentName: "Header",
    props: [
      "headerdealeradress",
      "headerdealeradressviews",
      "showclicktocallbutton",
      "topbarsmowidth",
      "HIDE_HEADERSMOICONS_IN_DESKTOP",
      "HIDE_HEADERSMOICONS_IN_TAB",
      "HIDE_HEADERSMOICONS_IN_MOBI",
      "googlemapurl",
      "showtopbardealerlogo",
      "headertoplogocustmbtnwidth",
      "CUSTOM_IMAGE_PATH",
      "headertopcustmbtnwidth",
      "CLICK_TO_CALL_TEXT",
      "showheadertopphonenumber",
      "headertopphonenumberwidth",
      "SHOW_LOCATION_NAME",
      "showheadertopsmoicons",
      "headertoppsmowidth",
      "customlinkshow",
      "customresponsiveclass",
      "logoclassvalues",
      "rightsectionclassvalues",
      "linksclassvalues",
      "dealerlogohreflink",
      "showcustomimage",
      "headerMenuposClass",
      "headremenucustomclass",
      "topbardealerphonewidth",
      "HIDE_PHONE_IN_DESKTOP",
      "HIDE_PHONE_IN_TAB",
      "HIDE_PHONE_IN_MOBI",
      "topbarquiclinkwidth",
      "hidequickindesktop",
      "hidequickintab",
      "hidequickinmobi",
      "showheadertopheaderlinks",
      "oemurl",
    ],
  },
  {
    componentName: "Menu",
    props: ["headerMenuposClass"],
  },
  {
    componentName: "HomePageMap",
    props: [],
  },
  {
    componentName: "InventoryWidget",
    props: [
      "invwidgettoolkiturl",
      "invtype",
      "hide_radio_buttons",
      "showanimation",
      "inventoryStyleClass",
    ],
  },
  {
    componentName: "MainBanner",
    props: ["thumbnailimg", "videourl", "enablePagination"],
  },
  { componentName: "MainBanner Content", props: ["marqueText"] },
  {
    componentName: "ModelSelector",
    props: [
      "enablegroupscroll",
      "modeltitle",
      "modelsImageSize",
      "MODELSELECTOR_LOOP",
      "enabletoolkitanchortag",
      "showanimation",
      "animateImage",
      "virtualBrochureUrl",
      "modelsubtitle",
      "modelselectorclass",
      "modelselectortitle",
      "itemsToShowInMobi",
      "itemsToShowInIpad",
      "itemsToShowInDesktop",
      "itemsToShow",
      "hidegotostockpageurl",
      "externalLink",
      "modelselectorctabtn",
      "enableroundedborders",
      "enableshadoweffect",
      "modeltitleposition",
      "showmodelnamebelowimage",
      "enableseemore_button",
      "modelselectorsubtitle",
      "hideviewmore",
      "viewmorevehiclesposition",
      "modelselector_ctabtn",
      "modelselector_loop",
      "enableToolkitUrl",
      "enablestock_button",
      "modifiedUrl",
      "modelselectorstyleclass",
      "showgotostockpageurl",
      "modelreqBtn",
    ],
  },
  {
    componentName: "QuickLink",
    props: [],
  },
  {
    componentName: "SecondRowBanner",
    props: [
      "secondrowtitle",
      "hidesecondrowtitle",
      "rowtitle",
      "subtitle",
      "gridDesktopWdth",
      "gridTabWdth",
      "gridMobileWdth",
    ],
  },
  {
    componentName: "Testimonials",
    props: [],
  },
  {
    componentName: "ThirdRowBanner",
    props: ["showthirdrowbannertitle"],
  },
  {
    componentName: "TopVehicles",
    props: [
      "vechiclekey",
      "topvechicleclass",
      "topvehicletitlepos",
      "rowtitle",
    ],
  },
  {
    componentName: "VisualSeo",
    props: [],
  },
];
export const componentsList = componentsArray.map(
  (component) => component.componentName
);
export const getVersionProps = (componentName) => {
  const component = componentsArray.find((item) =>
    componentName.includes(item.componentName)
  );
  const versionProps = {};
  if (component) {
    component?.props.forEach((item) => {
      versionProps[item] = "";
    });
  }
  return versionProps;
};