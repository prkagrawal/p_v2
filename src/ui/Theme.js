// export const colors = {
//   primary: "#546af0",
//   secondary: "#8f9ef7",
//   light: "#a4aff5",
//   accent: "#e8ecff",
//   offwhite: "#ebeeff",
//   white: "#FBFBFF",
//   black: "#373640",
//   gray: "#a3aac2",
// };

// export const sizes = {
//   mobileS: "320px",
//   mobile: "480px",
//   tablet: "768px",
//   desktop: "1024px",
//   desktopL: "1440px",
// };

// export const CommonTheme = {
//   font: {
//     primary: "Product Sans Regular",
//     primaryBold: "Product Sans Bold",
//     primaryItalic: "Product Sans Italic",
//     primaryMedium: "Product Sans Medium Regular",
//     primaryLight: "Product Sans Light Regular",
//   },
//   colors,
//   spacings: {
//     top: 40,
//     bottom: 40,
//     left: 25,
//     right: 25,
//     my: "20px",
//     mx: "20px",
//   },
//   space: {
//     none: 0,
//     small: 5,
//     medium: 10,
//     large: 15,
//     xlarge: 30,
//     huge: 40,
//   },
//   border: `2px solid ${colors.offwhite}`,
//   media: {
//     mobileS: `max-width: ${sizes.mobileS}`,
//     mobile: `max-width: ${sizes.mobile}`,
//     tablet: `max-width: ${sizes.tablet}`,
//     desktop: `max-width: ${sizes.desktop}`,
//     desktopL: `max-width: ${sizes.desktopL}`,
//   },
//   shadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
//   shadowSmall: "0px 5px 10px rgba(0, 0, 0, 0.05)",
//   fontFamily: "Roboto, sans-serif",
//   media: {
//     mobile: `(max-width: ${sizes.mobile})`,
//     tablet: `(max-width: ${sizes.tablet})`,
//     fablet: `(max-width: ${sizes.fablet})`,
//     desktop: `(max-width: ${sizes.desktop})`,
//     minMobile: `(min-width: ${sizes.mobile})`,
//     minTablet: `(min-width: ${sizes.tablet})`,
//   },
//   gradient: "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
//   gradient2: "linear-gradient(99deg, #6A98F0 0%, #4961DC 130%)",
// };

// export const DefaultTheme = {
//   ...CommonTheme,
// };

// export const LightTheme = {
//   dark: false,
//   bg: "#F8F8F8",
//   primaryColor: "#6D83F2",
//   secondaryColor: "#F8F8F8",
//   accentColor: "#C7D0FF",
//   primaryBlack: "#383838",
//   primaryText: "#383838",
//   ...CommonTheme,
// };

// export const DarkTheme = {
//   dark: true,
//   bg: "#191919",
//   primaryColor: "#6D83F2",
//   secondaryColor: "#232323",
//   accentColor: "#303030",
//   primaryBlack: "#F8F8F8",
//   elevation0: "#191919",
//   primaryText: "#F8F8F8",
//   ...CommonTheme,
// };

const theme = {
  colors: {
    text: "#111", // Body foreground color
    background: "#191919", // 	Body background color
    primary: "tomato", // Primary brand color for links, buttons, etc.
    secondary: "#3f3f3f", // A secondary brand color for alternative styling
    accent: "#3f3f3f", // A contrast color for emphasizing UI
    highlight: "#222", // A background color for highlighting text
    muted: "#e0e0e0", // 	A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    bg: "#191919",
    primaryColor: "#6D83F2",
    secondaryColor: "#232323",
    accentColor: "#303030",
    primaryBlack: "#F8F8F8",
    elevation0: "#191919",
    primaryText: "#F8F8F8",
    gray_normal: "#55595a",
    gray_brigh: "#83898b",
    gray_light: "#a1a5a7",
    gray_softlight: "#56595a",
    blue_light: "#94b2d6",
    gray_darklight: "#636869",
    gray_tlight: "#969d9e",
  },
  fonts: {
    body: "Comic Sans MS",
  },
};

export default theme;

// import { roboto } from '@theme-ui/presets'

// const theme = {
//   ...roboto,
//   containers: {
//     card: {
//       boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
//       border: '1px solid',
//       borderColor: 'muted',
//       borderRadius: '4px',
//       p: 2,
//     },
//     page: {
//       width: '100%',
//       maxWidth: '960px',
//       m: 0,
//       mx: 'auto',
//     }
//   },
//   styles: {
//     ...roboto.styles
//   }
// }

// export default theme
